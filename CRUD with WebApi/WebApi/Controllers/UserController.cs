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
    public class UserController : ApiController
    {
        public HttpResponseMessage Get()
        {
            DataTable db = new DataTable();

            string query = @"select UserID,UserName,Password from dbo.Users";
            var con = new SqlConnection(ConfigurationManager.ConnectionStrings["NewAppDB"].ConnectionString);
            var command = new SqlCommand(query, con);

            using (var da = new SqlDataAdapter(command))
            {
                command.CommandType = CommandType.Text;
                da.Fill(db);
            }
            return Request.CreateResponse(HttpStatusCode.OK, db);

        }

       public string Post(User usr)
        {
            try
            {
                DataTable db = new DataTable();

                string query = @"insert into dbo.Users (UserName,Password) values (
            '" + usr.UserName + @"',
            '" + usr.Password + @"')";

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
    }
}
