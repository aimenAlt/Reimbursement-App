package requests;

public class RequestPojo {

    int id;
    int employeeID;
    String description;
    double cost ;
    String date ;
    String status ;
    String imageLink;

    public RequestPojo(int id, int employeeID, String description, double cost, String date, String status, String imageLink) {
        super();
        this.id = id;
        this.employeeID = employeeID;
        this.description = description;
        this.cost = cost;
        this.date = date;
        this.status = status;
        this.imageLink = imageLink;
        }

}
