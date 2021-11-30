package users;

public class UserPojo {

    int userID;
    String userPassword;
    String userName;
    String userAddress;
    String userType;
    String userEmail;

    UserPojo(int userID, String userPassword, String userName, String userAddress, String userType, String userEmail) {
        this.userID = userID;
        this.userPassword = userPassword;
        this.userName = userName;
        this.userAddress = userAddress;
        this.userType = userType;
        this.userEmail = userEmail;
    }

}

