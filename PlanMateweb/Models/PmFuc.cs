using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Web;

namespace PlanMateweb.Models
{
    public class PmFuc
    {
        public static SqlCommand Getcmd(string DbName)
        {
            string conntext = string.Empty;
            if (DbName.ToLower() == "mod")
            {
                conntext = ConfigurationManager.ConnectionStrings["Modeler"].ConnectionString;
            }
            else if (DbName.ToLower() == "sch")
            {
                conntext = ConfigurationManager.ConnectionStrings["Schedule"].ConnectionString;
            }
            else if (DbName.ToLower() == "ctrl")
            {
                conntext = ConfigurationManager.ConnectionStrings["PMControl"].ConnectionString;
            }
            SqlConnection conn = new SqlConnection(conntext);
            if (conn.State == ConnectionState.Closed)
            {
                conn.Open();
            }
            SqlCommand command = conn.CreateCommand();
            return command;
        }

        public static void WriteLogs(string empID,string empName, string ipaddress, string model, DateTime time, string message, string webinfo)
        {
            //写入log
            SqlCommand cmd = Getcmd("ctrl");
            cmd.CommandText = "insert into wapUserlog (empID,empName,ipAddress,model,logtime,logmessage,webinfomation) values ('" + empID +"','" + empName + "','" + ipaddress + "','" + model + "','" + time + "','" + message + "','" + webinfo + "')";
            cmd.ExecuteNonQuery();
            cmd.Connection.Close();
        }

        public static string GetuserGuid(string empID)
        {
            SqlCommand cmd = Getcmd("ctrl");
            cmd.CommandText = "select userGuid from wapUserstate where empID = '" + empID + "'";
            SqlDataReader rd = cmd.ExecuteReader();
            rd.Read();
            string userguid = rd[0].ToString();
            rd.Close();
            cmd.Connection.Close();
            return userguid;
        }
        
        public static string GetMd5(string str)
        {
            MD5 md5str = MD5.Create();
            byte[] s = md5str.ComputeHash(Encoding.UTF8.GetBytes(str));
            return Convert.ToBase64String(s);
        }
    }
}