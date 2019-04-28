using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace PlanMateweb
{
    public partial class selector : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            //禁止恶意登陆
            HttpCookie cookie = Request.Cookies["userCookie"];
            if (cookie == null)
            {
                Response.Redirect("/index.aspx");
            }
            else
            {
                //判断是否多点登陆
                HttpCookie md5cookie = Request.Cookies["userMd5"];
                if (md5cookie == null)
                {
                    if (cookie.Values["userGuid"].ToString() == Models.PmFuc.GetuserGuid(cookie.Values["empID"]))
                    {
                        //判断开启哪几个功能视窗
                        HttpCookie cookiepar = Request.Cookies["userpermation"];
                        if (cookiepar != null)
                        {
                            string fucname = string.Empty;
                            systemsetting.Visible = false;
                            reportsystem.Visible = false;
                            datacenter.Visible = false;
                            planboard.Visible = false;

                            if (cookiepar.Values.Count == 1)
                            {
                                fucname = cookiepar.Values[0];
                                Response.Write("<script type = 'text/javascript'>alert('进入页面')</script>");
                            }
                            else
                            {
                                foreach (string item in cookiepar.Values)
                                {

                                    fucname = cookiepar[item];

                                    if (fucname == systemsetting.ClientID.ToString())
                                    {
                                        systemsetting.Visible = true;
                                    }
                                    else if (fucname == reportsystem.ClientID.ToString())
                                    {
                                        reportsystem.Visible = true;
                                    }
                                    else if (fucname == datacenter.ClientID.ToString())
                                    {
                                        datacenter.Visible = true;
                                    }
                                    else if (fucname == planboard.ClientID.ToString())
                                    {
                                        planboard.Visible = true;
                                    }
                                }
                            }
                        }

                    }
                    else
                    {
                        Request.Cookies.Clear();
                        Response.Write("<script type = 'text/javascript'> alert('你已经被强制登出！')</script>");
                    }
                }

            }
        }
    }
}
