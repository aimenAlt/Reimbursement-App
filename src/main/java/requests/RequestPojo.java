package requests;

public class RequestPojo {

    int requestID;
    int employeeID;
    String description;
    double cost ;
    String date ;
    String status ;
    String imageLink;

    public RequestPojo() {
        super();
    }

    public RequestPojo(int userID, int employeeID, String description, double cost, String date, String status, String imageLink) {
        super();
        this.requestID = userID;
        this.employeeID = employeeID;
        this.description = description;
        this.cost = cost;
        this.date = date;
        this.status = status;
        this.imageLink = imageLink;
        }

}
