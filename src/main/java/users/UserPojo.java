package users;

public class UserPojo {

    public int userID;
    public String userPassword;
    public String userName;
    public String userAddress;
    public String userType;
    public String userEmail;

    UserPojo(int userID, String userPassword, String userName, String userAddress, String userType, String userEmail) {
        this.userID = userID;
        this.userPassword = userPassword;
        this.userName = userName;
        this.userAddress = userAddress;
        this.userType = userType;
        this.userEmail = userEmail;
    }

}

