Feature: HLI_26_ B2C_ Login_Webpage_Setup
  As a HLI User I want to log in using my registered credentials from a branded Login page so that I can access the
  HLI survey and my Health score

  Background:
    Given User access HLI url

  @HLI-26:1 @HLI-26 @Regression @Smoke
  Scenario: Verify HLI brand login page design
    And User sees HLI logo
    And User sees Email address input box
    And User sees next button
    And User sees Feedback button
    And User sees about Who Is Mercer
    And User sees about What Is HLI
    And User sees about The value of HLI
    And User sees Healthy Living Index header
    And User sees Healthy Living Index paragraph
    And User sees Find Out More button
    And User sees Mercer logo
    And User sees Mercer tag line
    And User sees © 2017 MERCER LLC, ALL RIGHTS RESERVED

  @HLI-26:2 @HLI-26 @Regression @Smoke
  Scenario: Successful login on HLI platform using valid credentials
    When User enters email id of "basicUser"
    And  User clicks on Next button
    Then User sees Password text box
    When User types password of "basicUser"
    And  User clicks on Next button
    Then User should be logged in successful in HLI application and should see dashboard


  @HLI-26:3 @HLI-26 @Regression @Smoke
  Scenario: Unsuccessful login on HLI platform using valid email id and invalid password
    When User enters correct email id of "basicUser"
    And  User clicks on Next button
    Then User sees Password text box
    When User types wrong password of "basicUser"
    And  User clicks on Next button
    Then System should not authorise access for non-registered users and should see error message

  @HLI-26:4 @HLI-26 @Regression
  Scenario: Unsuccessful login on HLI platform using invalid email id and valid password
    When User enters incorrect email id of "basicUser"
    And  User clicks on Next button
    Then System should not authorise access for non-registered users and should see error message


  @HLI-26:5 @HLI-26 @Regression
  Scenario: Verify bottom color of Email text box when user provides an email id with wrong format
    When User enters wrong format email id of "basicUser"
    And  User clicks on Next button
    Then EMail text box bottom color should be red





