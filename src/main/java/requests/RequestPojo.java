package requests;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;


//@JsonIgnoreProperties(ignoreUnknown = true)
public class RequestPojo {

//    @JsonProperty("requestID")
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

    public RequestPojo(int requestID, int employeeID, String description, double cost, String date, String status, String imageLink) {
        super();
        this.requestID = requestID;
        this.employeeID = employeeID;
        this.description = description;
        this.cost = cost;
        this.date = date;
        this.status = status;
        this.imageLink = imageLink;
    }


    public int getRequestID() {
        return requestID;
    }

    public void setRequestID(int requestID) {
        this.requestID = requestID;
    }

    public int getEmployeeID() {
        return employeeID;
    }

    public void setEmployeeID(int employeeID) {
        this.employeeID = employeeID;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public double getCost() {
        return cost;
    }

    public void setCost(double cost) {
        this.cost = cost;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getImageLink() {
        return imageLink;
    }

    public void setImageLink(String imageLink) {
        this.imageLink = imageLink;
    }


    @Override
    public String toString() {
        return "RequestPojo{" +
                "requestID=" + requestID +
                ", employeeID=" + employeeID +
                ", description='" + description + '\'' +
                ", cost=" + cost +
                ", date='" + date + '\'' +
                ", status='" + status + '\'' +
                ", imageLink='" + imageLink + '\'' +
                '}';
    }
}
