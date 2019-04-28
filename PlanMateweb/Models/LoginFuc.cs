using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

namespace PlanMateweb.Models
{
    public class LoginFuc
    {
        public List<string> Login(string empID, string userPass, string userIpaddress, string webinfomation)
        {            
            List<string> loginInfo = new List<string>();
            string dbpass = string.Empty;
            string empName = GetempName(empID); ;
            int errortimes = 0;
            string online = string.Empty;
            string ipaddress = string.Empty;
            DateTime errortime = Convert.ToDateTime("1900-01-01 00:00:00");
            SqlCommand cmd = PmFuc.Getcmd("ctrl");
            cmd.CommandText = "select *  from wapUserstate where empID = '" + empID + "'";
            DataTable DtuserState = new DataTable();
            SqlDataAdapter dataAdapter = new SqlDataAdapter(cmd);
            dataAdapter.Fill(DtuserState);
            dataAdapter.Dispose();
            cmd.Connection.Close();

            if (DtuserState.Rows.Count > 0)
            {
                errortimes = Convert.ToInt32(DtuserState.Rows[0]["errortimes"]);
                errortime = Convert.ToDateTime(DtuserState.Rows[0]["errortime"]);
                online = DtuserState.Rows[0]["online"].ToString();
                ipaddress = DtuserState.Rows[0]["userIpaddress"].ToString();
                if (online == "0")
                {
                    //如果已经大于5分钟了，删除数据库记录
                    if ((DateTime.Now - errortime).Minutes > 5)
                    {
                        cmd = PmFuc.Getcmd("ctrl");
                        cmd.CommandText = "delete from wapUserstate where empID = '" + empID + "' and online = '0'";
                        cmd.ExecuteNonQuery();
                        cmd.Connection.Close();
                    }
                }
                else
                {
                    loginInfo.Add("2");
                    loginInfo.Add("用户已经在IP:" + ipaddress + " 上登陆。");
                    loginInfo.Add(empID);
                    loginInfo.Add(empName);                    
                    return loginInfo;
                }
            }

            //判断用户是否被锁定
            if (errortimes < 3)
            {
                cmd = PmFuc.Getcmd("mod");
                cmd.CommandText = "select * from wapEmpList where empID = '" + empID + "'";
                SqlDataReader reader = cmd.ExecuteReader();
                if (reader.Read() != true)
                {
                    loginInfo.Add("0");
                    loginInfo.Add("登陆失败，没有这个用户名。");
                    loginInfo.Add(empID);
                    loginInfo.Add(empName);
                    reader.Close();                    
                }
                else
                {
                    //存在用户名，验证密码
                    
                    dbpass = reader["password"].ToString();
                    reader.Close();
                    if (userPass != dbpass)
                    {
                        //如果密码错误，去查询库里是不是第一次错误，如果是，计入错误记录和计数                 
                        DataRow[] dr = null;
                        if ((dr = DtuserState.Select("empID = '" + empID + "'")).Count() > 0)
                        {
                            errortimes = Convert.ToInt32(dr[0][6]) + 1;
                            cmd = PmFuc.Getcmd("ctrl");
                            cmd.CommandText = "update wapUserstate set userpass = '" + userPass + "',errortimes = '" + errortimes + "', errorTime = '" + DateTime.Now + "' where empID = '" + empID + "'";
                            cmd.ExecuteNonQuery();
                            cmd.Connection.Close();
                        }
                        else
                        {
                            errortimes = 1;
                            cmd = PmFuc.Getcmd("ctrl");
                            cmd.CommandText = "insert into wapUserstate (empID,empName,userPass,userIpaddress,onLine,errorTimes,errorTime,message) values ('" + empID +"','" + empName + "','" + userPass + "','" + userIpaddress + "','0','" + errortimes + "','" + DateTime.Now + "','用户密码错误')";
                            cmd.ExecuteNonQuery();
                            cmd.Connection.Close();
                        }
                        if (errortimes <= 3)
                        {
                            loginInfo.Add("0");
                            int interr = 3 - errortimes;
                            if(interr != 0)
                            {
                                loginInfo.Add("用户密码错误！再输入" + (3 - errortimes).ToString() + "次错误密码后，账号将被锁定5分钟。");
                            }
                            else
                            {
                                loginInfo.Add("用户被锁定，请在" + (3000 - (DateTime.Now - errortime).TotalSeconds).ToString() + "秒后登陆。");
                            }
                            loginInfo.Add(empID);
                            loginInfo.Add(empName);                           
                        }
                    }
                    else
                    {
                        //查询是否有相同登陆记录，如果有，是否推出。
                        DataRow[] dr = null;
                        cmd = PmFuc.Getcmd("ctrl");
                        string userguid = Guid.NewGuid().ToString();
                        if ((dr = DtuserState.Select("empID = '" + empID + "'")).Count() > 0)
                        {
                            cmd.CommandText = "update wapUserstate set userpass = '" + userPass + "',errortimes = '0',errortime = '" + DateTime.Now + "',online = '1',message = '登陆成功',userGuid = '"+ userguid + "',useripaddress = '" + userIpaddress + "' where empID = '" + empID + "'";
                            cmd.ExecuteNonQuery();
                        }
                        else
                        {
                            cmd.CommandText = "insert into wapUserstate (empID,empName,userPass,userIpaddress,onLine,errorTimes,errorTime,message,userGuid) values ('" + empID + "','" + empName + "','" + userPass + "','" + userIpaddress + "','1','0','" + DateTime.Now + "','登陆成功','" + userguid + "')";
                            cmd.ExecuteNonQuery();
                        }
                        cmd.Connection.Close();
                        loginInfo.Add("1");
                        loginInfo.Add("登陆成功！");
                        loginInfo.Add(empID);
                        loginInfo.Add(empName);
                        loginInfo.Add(userguid);
                    }
                }
            }
            else
            {
                loginInfo.Add("0");
                loginInfo.Add("用户被锁定，请在" + (3000 - (DateTime.Now - errortime).TotalSeconds).ToString() + "秒后登陆。");
                loginInfo.Add(empID);
                loginInfo.Add(empName);               
            }
            return loginInfo;
        }

        public List<string> GetuserGroup(string empID)
        {
            List<string> tmp = new List<string>();
            SqlCommand cmd = PmFuc.Getcmd("mod");
            cmd.CommandText = "select userName from wapEmpUserMap where empID = '" + empID + "'";
            SqlDataAdapter da = new SqlDataAdapter(cmd);
            DataTable DtUsermap = new DataTable();
            da.Fill(DtUsermap);
            da.Dispose();

            cmd.CommandText = "select *  from  wapUser";
            da = new SqlDataAdapter(cmd);
            DataTable DtWapuser = new DataTable();
            da.Fill(DtWapuser);
            da.Dispose();            
            cmd.Connection.Close();

            if(DtUsermap.Rows.Count > 0)   //一定会有数据，防呆
            {
                string addstring = string.Empty;
                foreach (DataRow item in DtUsermap.Rows)
                {
                    string username = item["userName"].ToString();
                    DataRow[] dr = DtWapuser.Select("userName = '" + username + "'");
                    if(dr.Count() > 0)
                    {
                        addstring = dr[0][1].ToString();
                        if(tmp.Contains(addstring)==false)
                        {
                            tmp.Add(addstring);
                        }
                    }
                }
            }
            return tmp;
        }

        public int ForceLogout(string empID, string userIpaddress, string webinfomation)
        {
            int state = 0;
            SqlCommand cmd = PmFuc.Getcmd("ctrl");
            cmd.CommandText = "delete from wapUserstate where empID = '" + empID + "'";
            state = cmd.ExecuteNonQuery();        
            return state;

        }
        public string GetempName(string empid)
        {
            string empname = string.Empty;
            SqlCommand cmd = PmFuc.Getcmd("mod");
            cmd.CommandText = "select empName from wapEmpList where empID = '" + empid + "'";
            SqlDataReader rd = cmd.ExecuteReader();
            if (rd.Read())
            {
                empname = rd["empName"].ToString();
            }
            rd.Close();
            cmd.Connection.Close();
            return empname;
        }
    }
}