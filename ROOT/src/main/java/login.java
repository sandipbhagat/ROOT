

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class login
 */
@WebServlet("/login")
public class login extends HttpServlet {
	private static final long serialVersionUID = 1L;
	Connection connection; 
	Statement stmt= null;   
    /**
     * @see HttpServlet#HttpServlet()
     */
    public login() {
        super();
        // TODO Auto-generated constructor stub
    }
    private static Connection getConnection() 
            throws SQLException, 
                ClassNotFoundException 
    {
        Connection con = ConnectionFactory.
                getInstance().getConnection();
        return con;
    }
	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		response.setContentType("text/html");  
		PrintWriter pw = response.getWriter();  
		
		try{  
		String username = request.getParameter("username"); 
		String password = request.getParameter("password");  
		connection = getConnection();
       
		stmt = connection.createStatement();
		String query = "select username from user where userName='"+username+"' and password='"+password+"'";
		ResultSet rs = stmt.executeQuery(query);


		if(rs.next()){  
            Cookie loginCookie = new Cookie("user",username);
            loginCookie.setMaxAge(30*60);
            response.addCookie(loginCookie);
            response.sendRedirect("#/employeepanel");			
			}  
		else{
			PrintWriter out = response.getWriter();  
			response.setContentType("text/html");  
			out.println("<script type=\"text/javascript\">");  
			out.println("alert('Mail has been sent in your email address. Please Activate your Account');");  
			out.println("</script>");
			response.sendRedirect("#/");
		}  
		}  
		catch (Exception e){  
		pw.println(e);  
		} finally
        {
            try {
                if(stmt != null)
                    stmt.close();
                if(connection != null)
                    connection.close();
                } catch (SQLException e) {
                e.printStackTrace();
            }
        }
	}

}
