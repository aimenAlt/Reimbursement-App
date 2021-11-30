package users;

import exception.ApplicationException;

import java.util.List;

public interface UserDao {
    UserPojo addUser(UserPojo user) throws ApplicationException;
    UserPojo updateUser(UserPojo user) throws ApplicationException;
    boolean deleteUser(int userID) throws ApplicationException;
    List<UserPojo> getAllEmployees() throws ApplicationException;
    UserPojo validateLogin(String username, String password) throws ApplicationException;
}
