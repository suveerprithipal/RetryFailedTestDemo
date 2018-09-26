$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/suveerp/Documents/GitHub/RetryFailedTestDemo/./src/test/resources/demo.feature");
formatter.feature({
  "line": 2,
  "name": "Retry a test that has failed",
  "description": "",
  "id": "retry-a-test-that-has-failed",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@demo"
    }
  ]
});
formatter.scenario({
  "line": 4,
  "name": "When this test fails retry",
  "description": "",
  "id": "retry-a-test-that-has-failed;when-this-test-fails-retry",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "I have two numbers",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I add them together",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "The expected answer does not match the actual answer",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.iHaveTwoNumbers()"
});
formatter.result({
  "duration": 100241400,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iAddThemTogether()"
});
formatter.result({
  "duration": 18100,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.theExpectedAnswerDoesNotMatchTheActualAnswer()"
});
formatter.result({
  "duration": 1491200,
  "error_message": "java.lang.AssertionError: expected:\u003c7\u003e but was:\u003c5\u003e\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.failNotEquals(Assert.java:834)\r\n\tat org.junit.Assert.assertEquals(Assert.java:645)\r\n\tat org.junit.Assert.assertEquals(Assert.java:631)\r\n\tat domain.MyStepdefs.theExpectedAnswerDoesNotMatchTheActualAnswer(MyStepdefs.java:14)\r\n\tat ✽.Then The expected answer does not match the actual answer(C:/Users/suveerp/Documents/GitHub/RetryFailedTestDemo/./src/test/resources/demo.feature:7)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 4,
  "name": "When this test fails retry",
  "description": "",
  "id": "retry-a-test-that-has-failed;when-this-test-fails-retry",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "I have two numbers",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I add them together",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "The expected answer does not match the actual answer",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.iHaveTwoNumbers()"
});
formatter.result({
  "duration": 23800,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iAddThemTogether()"
});
formatter.result({
  "duration": 14000,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.theExpectedAnswerDoesNotMatchTheActualAnswer()"
});
formatter.result({
  "duration": 134800,
  "error_message": "java.lang.AssertionError: expected:\u003c7\u003e but was:\u003c5\u003e\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.failNotEquals(Assert.java:834)\r\n\tat org.junit.Assert.assertEquals(Assert.java:645)\r\n\tat org.junit.Assert.assertEquals(Assert.java:631)\r\n\tat domain.MyStepdefs.theExpectedAnswerDoesNotMatchTheActualAnswer(MyStepdefs.java:14)\r\n\tat ✽.Then The expected answer does not match the actual answer(C:/Users/suveerp/Documents/GitHub/RetryFailedTestDemo/./src/test/resources/demo.feature:7)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 4,
  "name": "When this test fails retry",
  "description": "",
  "id": "retry-a-test-that-has-failed;when-this-test-fails-retry",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "I have two numbers",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I add them together",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "The expected answer does not match the actual answer",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.iHaveTwoNumbers()"
});
formatter.result({
  "duration": 40600,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iAddThemTogether()"
});
formatter.result({
  "duration": 48600,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.theExpectedAnswerDoesNotMatchTheActualAnswer()"
});
formatter.result({
  "duration": 222100,
  "error_message": "java.lang.AssertionError: expected:\u003c7\u003e but was:\u003c5\u003e\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.failNotEquals(Assert.java:834)\r\n\tat org.junit.Assert.assertEquals(Assert.java:645)\r\n\tat org.junit.Assert.assertEquals(Assert.java:631)\r\n\tat domain.MyStepdefs.theExpectedAnswerDoesNotMatchTheActualAnswer(MyStepdefs.java:14)\r\n\tat ✽.Then The expected answer does not match the actual answer(C:/Users/suveerp/Documents/GitHub/RetryFailedTestDemo/./src/test/resources/demo.feature:7)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 9,
  "name": "This test should pass and only run once",
  "description": "",
  "id": "retry-a-test-that-has-failed;this-test-should-pass-and-only-run-once",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 10,
  "name": "I have two numbers",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I add them together",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "The expected answer does not match the actual answer again",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.iHaveTwoNumbers()"
});
formatter.result({
  "duration": 72000,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iAddThemTogether()"
});
formatter.result({
  "duration": 41700,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.theExpectedAnswerDoesNotMatchTheActualAnswerAgain()"
});
formatter.result({
  "duration": 20000,
  "status": "passed"
});
});