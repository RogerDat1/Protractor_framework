Feature: HLI_137_ First_Time_User_Journey_ Optional_ Congratulations_Message
  As a User I want to view a Congratulations message at the end of the optional on boarding journey in case when I complete it for the first time

  Background:
    Given User has logged in HLI as UserType "OptionalOnboardingCompletedUser"
    And User clicks on Complete Manually button

  @HLI-137 @Regression
  Scenario: User completes optional Health survey screens
    Then User should see a Congratulation Page
    And User should see text as "You’ve earned the Complete Health Nut Badge for completing the health survey."
    And User should see "Complete Health" badge
    And User should see "My Dashboard" button
    And User should see a "Close" icon at header

  @OnDemand
  Scenario: User clicks on "Close" button
    When User clicks Close button
    Then User should be navigated to the HLI main Dashboard


  @OnDemand
  Scenario: User clicks on "My Dashboard" button
    When User clicks My Dashboard button
    Then User should be navigated to the HLI main Dashboard


