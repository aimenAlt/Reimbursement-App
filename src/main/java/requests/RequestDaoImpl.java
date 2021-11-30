package requests;

import database.PostgreSQLAccess;
import exception.ApplicationException;

import java.sql.*;
import java.util.ArrayList;

public class RequestDaoImpl implements RequestDao{

    @Override
    public RequestPojo addRequest(RequestPojo request) throws ApplicationException {
        RequestPojo req = null;
        Connection conn = PostgreSQLAccess.makeConnection();
        PreparedStatement stmt;
        String query = "INSERT INTO requests (employee_id, description, cost, date, status, image_link) VALUES (?, ?, ?, ?, ?, ?)";
        try {
            stmt = conn .prepareStatement(query);

            stmt.setInt(1, request.employeeID);
            stmt.setString(2, request.description);
            stmt.setDouble(3, request.cost);
            stmt.setString(4, request.date);
            stmt.setString(5, request.status);
            stmt.setString(6, request.imageLink);

            stmt.executeUpdate();
        } catch (SQLException e) {
            throw new ApplicationException(e.getMessage());
        }
        return req;
    }

    @Override
    public RequestPojo updateRequest(RequestPojo request) throws ApplicationException {
        RequestPojo req = null;
        Connection conn = PostgreSQLAccess.makeConnection();
        PreparedStatement stmt;
        String query = "UPDATE requests SET description=?, cost=?, date=?, status=?, image_link=? WHERE id=?";
        try {
            stmt = conn .prepareStatement(query);

            stmt.setString(1, request.description);
            stmt.setDouble(2, request.cost);
            stmt.setString(3, request.date);
            stmt.setString(4, request.status);
            stmt.setString(5, request.imageLink);
            stmt.setInt(6, request.requestID);


            stmt.executeUpdate();
        } catch (SQLException e) {
            throw new ApplicationException(e.getMessage());
        }
        return req;
    }

    @Override
    public boolean deleteRequest(int requestID) throws ApplicationException {
        return false;
    }

    @Override
    public ArrayList<RequestPojo> getAllRequests() throws ApplicationException {
        ArrayList<RequestPojo> reqs = null;
        Connection conn = PostgreSQLAccess.makeConnection();
        PreparedStatement stmt;
        String query = "SELECT * FROM requests";
        try {
            stmt = conn .prepareStatement(query);
            ResultSet results = stmt.executeQuery();
            reqs = new ArrayList<RequestPojo>();

            while(results.next()) {
                RequestPojo tempReq = new RequestPojo(results.getInt(1), results.getInt(2),
                                        results.getString(3), results.getDouble(4),
                                        results.getString(5), results.getString(6), results.getString(7));
                reqs.add(tempReq);
            }
        } catch (SQLException e) {
            throw new ApplicationException(e.getMessage());
        }
        return reqs;
    }

    @Override
    public ArrayList<RequestPojo> getAllEmployeeRequests(int employeeID) throws ApplicationException {
        ArrayList<RequestPojo> reqs = null;
        Connection conn = PostgreSQLAccess.makeConnection();
        PreparedStatement stmt;
        String query = "SELECT * FROM requests WHERE employee_id=?";
        try {
            stmt = conn .prepareStatement(query);
            stmt.setInt(1, employeeID);
            ResultSet results = stmt.executeQuery();
            reqs = new ArrayList<RequestPojo>();

            while(results.next()) {
                RequestPojo tempReq = new RequestPojo(results.getInt(1), results.getInt(2),
                        results.getString(3), results.getDouble(4),
                        results.getString(5), results.getString(6), results.getString(7));
                reqs.add(tempReq);
            }
        } catch (SQLException e) {
            throw new ApplicationException(e.getMessage());
        }
        return reqs;
    }
}
