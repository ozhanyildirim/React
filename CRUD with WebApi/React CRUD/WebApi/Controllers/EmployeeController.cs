using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebApi.Models;

namespace WebApi.Controllers
{
    public class EmployeeController : ApiController
    {
        public HttpResponseMessage Get()
        {
            DataTable db = new DataTable();

            string query = @"select EmployeeID,EmployeeName,Department,MailID,CONVERT(varchar(10), DOJ,120) as DOJ from dbo.Employee";
            var con = new SqlConnection(ConfigurationManager.ConnectionStrings["NewAppDB"].ConnectionString);
            var command = new SqlCommand(query, con);

            using (var da = new SqlDataAdapter(command))
            {
                command.CommandType = CommandType.Text;
                da.Fill(db);
            }
            return Request.CreateResponse(HttpStatusCode.OK, db);

        }

        public string Post(Employee emp)
        {
            try
            {
                DataTable db = new DataTable();
                string doj = emp.DOJ.ToString().Split(' ')[0];    
                string query = @"insert into dbo.Employee (EmployeeName,Department,MailID,DOJ) values (
            '" + emp.EmployeeName + @"',
            '" + emp.Department + @"',
            '" + emp.MailID + @"',
            '" + doj + @"')";


                var con = new SqlConnection(ConfigurationManager.ConnectionStrings["NewAppDB"].ConnectionString);
                var command = new SqlCommand(query, con);

                using (var da = new SqlDataAdapter(command))
                {
                    command.CommandType = CommandType.Text;
                    da.Fill(db);
                }
                return "Added Succesfully";
            }
            catch (Exception ex)
            {

                return "Failed to add";
            }
        }

        public string Put(Employee emp)
        {
            try
            {
                DataTable db = new DataTable();

                string query = @"update dbo.Employee set 
                EmployeeName='" + emp.EmployeeName + @"',
                Department='" + emp.Department + @"',
                MailID='" + emp.MailID + @"',
                DOJ='" + emp.DOJ + @"'
                where EmployeeID=" + emp.EmployeeID + @"
                  ";
                var con = new SqlConnection(ConfigurationManager.ConnectionStrings["NewAppDB"].ConnectionString);
                var command = new SqlCommand(query, con);

                using (var da = new SqlDataAdapter(command))
                {
                    command.CommandType = CommandType.Text;
                    da.Fill(db);
                }
                return "Update Succesfully";
            }
            catch (Exception ex)
            {

                return "Failed to update";
            }
        }

        public string Delete(int id)
        {
            try
            {
                DataTable db = new DataTable();

                string query = @"delete from dbo.Employee where EmployeeID="+id;
                var con = new SqlConnection(ConfigurationManager.ConnectionStrings["NewAppDB"].ConnectionString);
                var command = new SqlCommand(query, con);

                using (var da = new SqlDataAdapter(command))
                {
                    command.CommandType = CommandType.Text;
                    da.Fill(db);
                }
                return "Deleted Succesfully";
            }
            catch (Exception ex)
            {

                return "Failed to delete";
            }
        }
    }
}
