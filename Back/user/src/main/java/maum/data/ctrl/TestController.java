package maum.data.ctrl;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value="/api", method = RequestMethod.GET)
public class TestController {

    @GetMapping(value="/test")
    public String apiTest() {
        return "dfdsfdfzdfd";
    }
}
