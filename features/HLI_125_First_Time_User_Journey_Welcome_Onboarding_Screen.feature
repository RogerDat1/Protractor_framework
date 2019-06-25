Feature: HLI_125_First_Time_User_Journey_Welcome_Onboarding_Screen
  As a New User I want to view an introduction screen so that I can receive some context for the Health Screens consisting of the points of value


  @HLI-125:1 @HLI-125 @Regression @Smoke
  Scenario: First time user sees Welcome on boarding screen
    Given User has logged in HLI as UserType "UserAtWelcomeOnboardingScreen"
    And User clicks on Save And Continue button
    Then the system should direct him to the Welcome page
    And User should see header Welcome To Wellness
    And User can view the points of value of the Health Module
    And User should see Accept & Activate button


  @HLI-125:2 @HLI-125 @Regression
  Scenario: User clicks on Accept & Activate button
    Given User has logged in HLI as UserType "UserAtWelcomeSecondScreen"
    Then User should see Connect A Tracker button
    And User should see Connect Manually button

  @HLI-125:3 @HLI-125 @Regression
  Scenario: Returning user who has not completed on boarding
    Given User has logged in HLI as UserType "UserInBetweenOnboarding"
    Then the system should direct him to the Second Welcome page
    Then User should see Connect A Tracker button
    And User should see Connect Manually button






