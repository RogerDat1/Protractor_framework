Feature: HLI_132_First_Time_User_Journey_ Skip_Screen
  As a New User I want to view a SKIP screen so that I can choose whether to continue with the optional on-boarding
  screens or skip straight to the dashboard

  Background:
    Given User has logged in HLI as UserType "onboardingUser"
    And User click on cancel icon of new bookmark
    And User navigates to "CONGRATULATIONS" screen of Onboarding journey

  @HLI-132:1 @HLI-132 @Regression @Smoke
  Scenario: Verify congratulation page on completion of mandatory on-boarding screens
    Then User sees Congratulation page
    And page should include text explaining value of continuing with the optional survey screens
    And User sees Continue Survey button
    And User sees Complete Later button

  @HLI-132:2 @HLI-132 @Regression
  Scenario: User clicks on "Continue Survey" on Congratulations/Skip page
    When User clicks Continue Survey button
    Then User should be navigated to the OVERALL HEALTH Survey screen


  @HLI-132:3 @HLI-132 @Regression
  Scenario: User clicks on "Complete Later" on Congratulations/Skip page
    When User clicks Go to Dashboard button
    Then User should be navigated to the HLI main Dashboard



