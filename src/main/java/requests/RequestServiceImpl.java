package requests;

import exception.ApplicationException;

import java.util.ArrayList;

public class RequestServiceImpl implements RequestService{

    RequestDao requestDao;

    public RequestServiceImpl() {
        this.requestDao = new RequestDaoImpl();
    }

    @Override
    public RequestPojo addRequest(RequestPojo request) throws ApplicationException {
        return this.requestDao.addRequest(request);
    }

    @Override
    public RequestPojo updateRequest(RequestPojo request) throws ApplicationException {
        return this.requestDao.updateRequest(request);
    }

    @Override
    public boolean deleteRequest(int requestID) throws ApplicationException {
        return false;
    }

    @Override
    public ArrayList<RequestPojo> getAllRequests() throws ApplicationException {
        return this.requestDao.getAllRequests();
    }

    @Override
    public ArrayList<RequestPojo> getAllEmployeeRequests(int employeeID) throws ApplicationException {
        return this.requestDao.getAllEmployeeRequests(employeeID);
    }
}
