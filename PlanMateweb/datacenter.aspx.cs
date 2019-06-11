using PlanMateweb.Models;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace PlanMateweb
{
    public partial class datacenter : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            HttpCookie cookie = Request.Cookies["userCookie"];
            if (cookie == null)
            {
                Response.Redirect("/index.aspx");
            }
        }

        protected string Geterlay()
        {
            string days = string.Empty;
            string workplanid = string.Empty,workplanName = string.Empty,owner = string.Empty;
            string sysid = ConfigurationManager.AppSettings["Sysid"];
            SqlCommand cmd = PmFuc.Getcmd("Sch");
            cmd.CommandText = "select * from PMS_WorkPlans where sysid = '" + sysid + "' and  and Status = 'Released'";
            SqlDataReader rd = cmd.ExecuteReader();
            if(rd.Read())
            {
                workplanid = rd["WorkPlanID"].ToString();
                workplanName = rd["WorkplanName"].ToString();
                owner = rd["Owner"].ToString();
            }
            rd.Close();

            cmd.CommandText = "select * from View_WorkPlansBars where  workplanid = '" + workplanid + "'";
            return days;
        }
    }
}