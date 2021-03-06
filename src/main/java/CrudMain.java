import io.javalin.Javalin;
import io.javalin.http.staticfiles.Location;
import requests.RequestPojo;
import requests.RequestService;
import requests.RequestServiceImpl;
import users.UserPojo;
import users.UserService;
import users.UserServiceImpl;

public class CrudMain {
    public static void main(String[] args) {

        RequestService requestService = new RequestServiceImpl();
        UserService userService = new UserServiceImpl();

        Javalin server = Javalin.create((config) ->
                config.addStaticFiles("/public", Location.CLASSPATH)
        ).start(4040);

        //Try Fix error here
        server.get("api/employee-reqs/{bid}", (ctx) -> {
            ctx.json(requestService.getAllEmployeeRequests(Integer.parseInt(ctx.pathParam("bid"))));
        });

        server.post("api/employee-reqs", (ctx) -> {
            System.out.println(ctx.bodyAsClass(RequestPojo.class));
            RequestPojo returningReq = requestService.addRequest(ctx.bodyAsClass(RequestPojo.class));
        });

        server.get("api/manager-reqs", (ctx) -> {
            ctx.json(requestService.getAllRequests());
        });

        server.put("api/manager-reqs", (ctx) -> {
            RequestPojo returningReq = requestService.updateRequest(ctx.bodyAsClass(RequestPojo.class));
        });

        server.put("api/users", (ctx) -> {
            UserPojo returningUser = userService.updateUser(ctx.bodyAsClass(UserPojo.class));
        });

        server.get("api/users/login", (ctx) -> {
            ctx.json(userService.validateLogin(ctx.queryParam("userName"), ctx.queryParam("password")));
        });

        server.get("/api/users/employees", (ctx) -> {
            ctx.json(userService.getAllEmployees());
        });


    }
}
