package request;

import javax.servlet.ServletConfig;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

/**
 * Created by bryanvillegas on 4/25/18.
 */
public class MasterServlet extends HttpServlet{
    private static final long serialVersionUID = 1L;

    public MasterServlet(){
        super();
    }
    public void init(ServletConfig config) throws ServletException {
        // TODO Auto-generated method stub
    }

    public void destroy() {
        // TODO Auto-generated method stub
    }

    protected void service(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        // TODO Auto-generated method stub
        super.service(request, response);
    }

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        response.getWriter().append("Hello world");
        System.out.println("doGet");
        PrintWriter pw = response.getWriter();
        pw.println();
        response.setContentType("text/html");
        String s1 = request.getParameter("email");
        String s2 = request.getParameter("password");
        pw.println("<html><body><div> "
                + s1 + " : " + s2 + ", are the values entered </div></body></html>");
        pw.close();
    }

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        response.getWriter().append("Hello world - Post method");
        System.out.println("doPost");
        PrintWriter pw = response.getWriter();
        response.setContentType("text/html");
        String s1 = request.getParameter("text1");
        String s2 = request.getParameter("text2");
        pw.println("<html><body><div> "
                + s1 + " : " + s2 + ", are the values entered </div></body></html>");
        pw.close();
    }

}
