package requests;

import exception.ApplicationException;

import java.util.ArrayList;

public interface RequestService {
    RequestPojo addRequest(RequestPojo request) throws ApplicationException;
    RequestPojo updateRequest(RequestPojo request) throws ApplicationException;
    boolean deleteRequest(int requestID) throws ApplicationException;
    ArrayList<RequestPojo> getAllRequests() throws ApplicationException;
    ArrayList<RequestPojo> getAllEmployeeRequests(int employeeID) throws ApplicationException;

}
