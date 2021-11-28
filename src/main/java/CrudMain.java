import io.javalin.Javalin;
import io.javalin.http.staticfiles.Location;

public class CrudMain {
    public static void main(String[] args) {
        Javalin server = Javalin.create((config) ->
                config.addStaticFiles("/public", Location.CLASSPATH)
        ).start(4040);
    }
}
