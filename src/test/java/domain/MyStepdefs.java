package domain;

import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

import static org.junit.Assert.assertEquals;

public class MyStepdefs {
    @Then("^The expected answer does not match the actual answer$")
    public void theExpectedAnswerDoesNotMatchTheActualAnswer(){
        // Write code here that turns the phrase above into concrete actions
        assertEquals(7,5);
    }

    @Given("^I have two numbers$")
    public void iHaveTwoNumbers(){
        // Write code here that turns the phrase above into concrete actions
          }

    @When("^I add them together$")
    public void iAddThemTogether(){
        // Write code here that turns the phrase above into concrete actions

    }

    @Then("^The expected answer does not match the actual answer again$")
    public void theExpectedAnswerDoesNotMatchTheActualAnswerAgain() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        assertEquals(5,5);
    }
}
