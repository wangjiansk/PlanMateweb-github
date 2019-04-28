using PlanMateweb.Models;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.IO;
using System.Net;
using System.Text;
using System.Web;

namespace PlanMateweb
{
    public partial class index : System.Web.UI.Page
    {
        List<string> loginstate = new List<string>();
        protected string userMsg = string.Empty;
        string empID = string.Empty, loginPass = string.Empty, loginip = string.Empty, loginbrower = string.Empty;
        protected void Page_Load(object sender, EventArgs e)
        {
            warp.Visible = true;
            nowarp1.Visible = false;
            nowarp.Visible = false;
            userPass.Attributes.Add("value", null);
        }

        protected void BtnLogout_Click(object sender, EventArgs e)
        {
            empID = userName.Text;
            loginPass = userPass.Text;
            loginip = HttpContext.Current.Request.UserHostAddress;
            loginbrower = HttpContext.Current.Request.UserAgent; ;
            if (empID == string.Empty)
            {
                LoginMsg.InnerText = "用户名不允许为空";
                return;
            }
            else if (loginPass == string.Empty)
            {
                LoginMsg.InnerText = "用户密码不允许为空";
            }
            else
            {
                LoginFuc login = new LoginFuc();
                string empName = string.Empty;
                if (login.ForceLogout(empID, loginip, loginbrower) == 1)
                {
                    List<string> loginstate = login.Login(empID, loginPass, loginip, loginbrower);
                    if(loginstate[0]=="1")
                    {
                        empName = loginstate[3];
                        HttpCookie cookie = new HttpCookie("userCookie");
                        cookie.Values["empID"] = HttpUtility.UrlEncode(empID, Encoding.UTF8);
                        cookie.Values["empName"] = HttpUtility.UrlEncode(login.GetempName(empID), Encoding.UTF8);
                        cookie.Values["userGuid"] = HttpUtility.UrlEncode(loginstate[4]);
                        HttpContext.Current.Response.Cookies.Add(cookie);
                        PmFuc.WriteLogs(empID, empName, loginip, "强制登出", DateTime.Now, "用户选择强制登出。", loginbrower);

                        List<string> userGroup = login.GetuserGroup(empID);
                        if(userGroup.Count < 1)
                        {
                            Response.Write("<script type = text/javascript> alert('该员工没有分配用户组，请联系管理员分配。')</script>");
                            LoginMsg.InnerText = null;
                            return;
                        }
                        if (usercheck.Checked == true)
                        {
                            if(userGroup.Contains("ADMIN")==false)
                            {
                                LoginMsg.InnerText = "请不要使用非管理员账户越权操作！";
                                PmFuc.WriteLogs(empID, empName, loginip, "越权登陆", DateTime.Now, "用户越权使用管理员登陆。", loginbrower);
                                return;
                            }
                            else
                            {
                                HttpCookie md5cookie = new HttpCookie("usermd5");
                                string md5Guid = Guid.NewGuid().ToString();
                                string usermd5 = PmFuc.GetMd5("ADMIN" + md5Guid);
                                md5cookie.Value = usermd5;
                                Response.Cookies.Add(md5cookie);
                                Response.Redirect("/selector.aspx");
                            }
                        }
                        else
                        {
                            cookie = new HttpCookie("userpermation");
                            foreach (string item in userGroup)
                            {
                                if (item == "ADMIN")
                                {
                                    continue;                                    
                                }
                                else if (item == "CFM")
                                {
                                    cookie.Values["permation1"] = "reportsystem";
                                }
                                else if (item == "REP")
                                {
                                    cookie.Values["permation2"] = "reportsystem";
                                }
                                else if (item == "VIEW")
                                {
                                    cookie.Values["permation3"] = "datacenter";
                                }
                                else if (item == "BOARD")
                                {
                                    cookie.Values["permation4"] = "planboard";
                                }
                                Response.Cookies.Add(cookie);
                            }
                            Response.Redirect("/selector.aspx");
                        }
                    }
                    else
                    {
                        LoginMsg.InnerText = loginstate[1];
                        return;
                    }
                }
                else
                {
                    LoginMsg.InnerText = "强制退出失败，请联系管理员";
                    return;
                }
            }

        }

        protected void BtnLogin_Click(object sender, EventArgs e)
        {
            empID = userName.Text;
            loginPass = userPass.Text;
            loginip = HttpContext.Current.Request.UserHostAddress;
            loginbrower = HttpContext.Current.Request.UserAgent;

            if (empID == string.Empty)
            {
                LoginMsg.InnerText = "用户名不允许为空";
                return;
            }
            else if (loginPass == string.Empty)
            {
                LoginMsg.InnerText = "用户密码不允许为空";
                return;
            }
            if (int.TryParse(empID, out int empstate) == false)
            {
                LoginMsg.InnerText = " 请输入员工ID，不是员工姓名。";
                return;
            }
            else
            {
                if (userName.Text == "")
                {
                    userMsg = "登陆";
                }
                LoginFuc login = new LoginFuc();
                loginstate = login.Login(empID, loginPass, loginip, loginbrower);
                if (loginstate[0] == "0")
                {
                    LoginMsg.InnerText = loginstate[1]; 
                }
                else if (loginstate[0] == "2")
                {
                    warp.Visible = false;
                    nowarp1.Visible = true;
                    nowarp.Visible = true;
                    userPass.Attributes.Add("value", loginPass);
                    LoginMsg.InnerText = loginstate[1];

                }
                else
                {
                    HttpCookie cookie = new HttpCookie("userCookie");
                    cookie.Values["empID"] = HttpUtility.UrlEncode(empID, Encoding.UTF8);
                    cookie.Values["empName"] = HttpUtility.UrlEncode(login.GetempName(empID), Encoding.UTF8);
                    cookie.Values["userGuid"] = HttpUtility.UrlEncode(loginstate[4]);
                    HttpContext.Current.Response.Cookies.Add(cookie);
                    List<string> userGroup = login.GetuserGroup(empID);
                    if (userGroup.Count < 1)
                    {
                        Response.Write("<script type = text/javascript> alert('该员工没有分配用户组，请联系管理员分配。')</script>");
                        LoginMsg.InnerText = null;
                        return;
                    }
                    if (usercheck.Checked == true)
                    {
                        if (userGroup.Contains("ADMIN") == false)
                        {
                            LoginMsg.InnerText = "请不要使用非管理员账户越权操作！";
                            PmFuc.WriteLogs(empID, login.GetempName(empID), loginip, "越权登陆", DateTime.Now, "用户越权使用管理员登陆。", loginbrower);
                            return;
                        }
                        else
                        {
                            HttpCookie md5cookie = new HttpCookie("usermd5");
                            string md5Guid = Guid.NewGuid().ToString();
                            string usermd5 = PmFuc.GetMd5("ADMIN" + md5Guid);
                            md5cookie.Value = usermd5;
                            Response.Cookies.Add(md5cookie);
                            Response.Redirect("/selector.aspx");
                        }
                    }
                    else
                    {
                       
                        //判断该用户具有的功能模块权限，如果只有一个权限，直接跳入页面，如果有多个权限，给出选择

                        cookie = new HttpCookie("userpermation");
                        foreach (string item in userGroup)
                        {
                            if (item == "ADMIN")
                            {                                
                                continue;
                            }
                            else if (item == "CFM")
                            {
                                cookie.Values["permation1"] = "reportsystem";
                            }
                            else if(item == "REP")
                            {
                                cookie.Values["permation2"] = "reportsystem";
                            }
                            else if (item == "VIEW")
                            {
                                cookie.Values["permation3"] = "datacenter";
                            }
                            else if (item == "BOARD")
                            {
                                cookie.Values["permation4"] = "planboard";
                            }
                            Response.Cookies.Add(cookie);
                        }
                        Response.Redirect("/selector.aspx");
                    }
                }
            }
        }
        protected void BtnCancel_Click(object sender, EventArgs e)
        {
            ClientScript.RegisterClientScriptBlock(this.GetType(), "mes", "<script type = 'text/javascript'>javascript:deleteCookie()</script>");
            LoginMsg.InnerText = null;
        }
    }

}