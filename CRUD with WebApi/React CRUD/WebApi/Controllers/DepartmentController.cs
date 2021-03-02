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
    public class DepartmentController : ApiController
    {
        public HttpResponseMessage Get ()
        {
            DataTable db = new DataTable();

            string query = @"select DepartmentID,DepartmentName from dbo.Department";
            var con = new SqlConnection(ConfigurationManager.ConnectionStrings["NewAppDB"].ConnectionString);
            var command = new SqlCommand(query, con);

            using (var da = new SqlDataAdapter(command))
            {
                command.CommandType = CommandType.Text;
                da.Fill(db);
            }
            return Request.CreateResponse(HttpStatusCode.OK, db);

        }

        public string Post(Department dep)
        {
            try
            {
                DataTable db = new DataTable();

                string query = @"insert into dbo.Department (DepartmentName) values ('"+dep.DepartmentName+@"')";
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
        public string Put(Department dep)
        {
            try
            {
                DataTable db = new DataTable();

                string query = @"update dbo.Department set DepartmentName='"+dep.DepartmentName+
                    @"' where DepartmentID="+dep.DepartmentID+@"";
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

                string query = @"delete from dbo.Department where DepartmentID=" + id;
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
