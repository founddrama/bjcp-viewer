package bjcp;

import java.io.IOException;
import java.io.InputStream;
import java.lang.StringBuilder;
import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.PostConstruct;
import org.springframework.stereotype.Service;

@Service
public class StyleService {

  private List styles = new ArrayList<>();

  public StyleService() {}

  @PostConstruct
  public void init() {
    try {
      ClassLoader classLoader = getClass().getClassLoader();
      InputStream stream = classLoader.getResourceAsStream("/2015-bjcp-styleguide.json");
      String data = readFromInputStream(stream);

      System.out.println(data);

    } catch (IOException e) {
      e.printStackTrace();
    }
  }

  private String readFromInputStream(InputStream inputStream) throws IOException {
      StringBuilder resultStringBuilder = new StringBuilder();
      try (BufferedReader br = new BufferedReader(new InputStreamReader(inputStream))) {
          String line;
          while ((line = br.readLine()) != null) {
              resultStringBuilder.append(line).append("\n");
          }
      }
    return resultStringBuilder.toString();
  }
}
