@demo
Feature: Retry a test that has failed

  Scenario: When this test fails retry
    Given I have two numbers
    When I add them together
    Then The expected answer does not match the actual answer

  Scenario: This test should pass and only run once
    Given I have two numbers
    When I add them together
    Then The expected answer does not match the actual answer again