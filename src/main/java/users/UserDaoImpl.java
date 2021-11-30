package users;

import database.PostgreSQLAccess;
import exception.ApplicationException;
import requests.RequestPojo;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

public class UserDaoImpl implements UserDao{
    @Override
    public UserPojo addUser(UserPojo user) throws ApplicationException {
        return null;
    }

    @Override
    public UserPojo updateUser(UserPojo user) throws ApplicationException {
        UserPojo userOut = null;
        Connection conn = PostgreSQLAccess.makeConnection();
        PreparedStatement stmt;
        String query = "UPDATE users SET password=?, username=?, user_address=?, user_type=?, user_email=? WHERE id=?";
        try {
            stmt = conn .prepareStatement(query);

            stmt.setString(1, user.userPassword);
            stmt.setString(2, user.userName);
            stmt.setString(3, user.userAddress);
            stmt.setString(4, user.userType);
            stmt.setString(5, user.userEmail);
            stmt.setInt(6, user.userID);


            stmt.executeUpdate();
        } catch (SQLException e) {
            throw new ApplicationException(e.getMessage());
        }
        return userOut;
    }

    @Override
    public boolean deleteUser(int userID) throws ApplicationException {
        return false;
    }

    @Override
    public List<UserPojo> getAllEmployees() throws ApplicationException {
        ArrayList<UserPojo> users = null;
        Connection conn = PostgreSQLAccess.makeConnection();
        PreparedStatement stmt;
        String query = "SELECT * FROM users WHERE user_type=?";
        try {
            stmt = conn.prepareStatement(query);
            stmt.setString(1, "employee");
            ResultSet results = stmt.executeQuery();
            users = new ArrayList<UserPojo>();

            while(results.next()) {
                UserPojo tempUser = new UserPojo(results.getInt(1), "********",
                        results.getString(3), results.getString(4),
                        results.getString(5), results.getString(6));
                users.add(tempUser);
            }
        } catch (SQLException e) {
            throw new ApplicationException(e.getMessage());
        }
        return users;
    }

    @Override
    public UserPojo validateLogin(String username, String password) throws ApplicationException {
        UserPojo userOut = null;
        Connection conn = PostgreSQLAccess.makeConnection();
        PreparedStatement stmt;
        String query = "SELECT * FROM users WHERE username=? AND password=?";
        try {
            stmt = conn .prepareStatement(query);

            stmt.setString(1, username);
            stmt.setString(2, password);

            ResultSet results = stmt.executeQuery();
            if(results.next()) {
                userOut = new UserPojo(results.getInt(1), results.getString(2),
                        results.getString(3), results.getString(4),
                        results.getString(5), results.getString(6));
            }
        } catch (SQLException e) {
            throw new ApplicationException(e.getMessage());
        }
        return userOut;
    }
}
