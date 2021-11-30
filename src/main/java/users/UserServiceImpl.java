package users;

import exception.ApplicationException;

import java.util.List;

public class UserServiceImpl implements UserService{

    UserDao userDao;

    public UserServiceImpl() {
        this.userDao = new UserDaoImpl();
    }

    @Override
    public UserPojo addUser(UserPojo user) throws ApplicationException {
        return this.userDao.addUser(user);
    }

    @Override
    public UserPojo updateUser(UserPojo user) throws ApplicationException {
        return this.userDao.updateUser(user);
    }

    @Override
    public boolean deleteUser(int userID) throws ApplicationException {
        return false;
    }

    @Override
    public List<UserPojo> getAllEmployees() throws ApplicationException {
        return this.userDao.getAllEmployees();
    }

    @Override
    public UserPojo validateLogin(String username, String password) throws ApplicationException {
        return this.userDao.validateLogin(username, password);
    }
}
