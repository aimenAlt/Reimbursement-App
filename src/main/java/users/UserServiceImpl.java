package users;

import exception.ApplicationException;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import java.util.List;

public class UserServiceImpl implements UserService{

    private static final Logger logger = LogManager.getLogger(UserServiceImpl.class);


    UserDao userDao;

    public UserServiceImpl() {
        this.userDao = new UserDaoImpl();
    }

    @Override
    public UserPojo addUser(UserPojo user) throws ApplicationException {
        logger.info("Entered addUser() in dao.");
        UserPojo usr = this.userDao.addUser(user);
        logger.info("Exiting addUser() in dao.");
        return usr;
    }

    @Override
    public UserPojo updateUser(UserPojo user) throws ApplicationException {
        logger.info("Entered updateUser() in dao.");
        UserPojo usr = this.userDao.updateUser(user);
        logger.info("Exiting updateUser() in dao.");
        return usr;
    }

    @Override
    public boolean deleteUser(int userID) throws ApplicationException {
//        UserPojo usr = false;
        return false;
    }

    @Override
    public List<UserPojo> getAllEmployees() throws ApplicationException {
        logger.info("Entered getAllEmployees() in dao.");
        List<UserPojo> usrs = this.userDao.getAllEmployees();
        logger.info("Exiting getAllEmployees() in dao.");
        return usrs;
    }

    @Override
    public UserPojo validateLogin(String username, String password) throws ApplicationException {
        logger.info("Entered validateLogin() in dao.");
        UserPojo usr = this.userDao.validateLogin(username, password);
        logger.info("Exiting validateLogin() in dao.");
        return usr;
    }
}
