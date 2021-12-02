package requests;

import exception.ApplicationException;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;


import java.util.ArrayList;

public class RequestServiceImpl implements RequestService{

    private static final Logger logger = LogManager.getLogger(RequestServiceImpl.class);


    RequestDao requestDao;

    public RequestServiceImpl() {
        this.requestDao = new RequestDaoImpl();
    }

    @Override
    public RequestPojo addRequest(RequestPojo request) throws ApplicationException {
        logger.info("Entered addRequest() in service.");
        RequestPojo req = this.requestDao.addRequest(request);
        logger.info("Exiting addRequest() in service.");
        return req;
    }

    @Override
    public RequestPojo updateRequest(RequestPojo request) throws ApplicationException {
        logger.info("Entered updateRequest() in service.");
        RequestPojo req = this.requestDao.updateRequest(request);
        logger.info("Exiting updateRequest() in service.");
        return req;
    }

    @Override
    public boolean deleteRequest(int requestID) throws ApplicationException {
        return false;
    }

    @Override
    public ArrayList<RequestPojo> getAllRequests() throws ApplicationException {
        logger.info("Entered getAllRequests() in service.");
        ArrayList<RequestPojo> reqs = this.requestDao.getAllRequests();
        logger.info("Exiting getAllRequests() in service.");
        return reqs;
    }

    @Override
    public ArrayList<RequestPojo> getAllEmployeeRequests(int employeeID) throws ApplicationException {
        logger.info("Entered getAllEmployeeRequests() in service.");
        ArrayList<RequestPojo> reqs = this.requestDao.getAllEmployeeRequests(employeeID);
        logger.info("Exiting getAllEmployeeRequests() in service.");
        return reqs;
    }
}

