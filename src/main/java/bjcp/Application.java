package bjcp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

// ./gradlew build && java -cp $(pwd)/src/bjcp -jar build/libs/bjcp-spring-boot-0.1.0.jar

@SpringBootApplication
public class Application {

    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }

}
