package domain;


import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(features = ("src/test/resources/demo.feature")
        , monochrome = false
        , glue = { "classpath:" })

public class StandardRunner {
}
