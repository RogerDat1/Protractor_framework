Feature: HLI_109_Challenges_&_Badges_Navigation_across_website.feature
  As a User I want to be challenged to improve my Health Score and appreciated for the improvements I make on my score in Healthy Lives
  so that I am motivated to make positive changes to my health


  Background:
    Given User has logged in HLI as UserType "basicUser"

  @HLI-109:1 @HLI-109 @Smoke @Regression
  Scenario: Challenges & Badges in Burger menu
    Then User sees Burger menu icon
    When I click the top left burger menu icon
    And The task bar shows "Badges" submenu
    And The task bar shows "Challenges" submenu
    And "Challenges" submenu should be associated with appropriate icon
    And "Badges" submenu should be associated with appropriate icon

  @HLI-109:2 @HLI-109 @Regression
  Scenario: Challenges & Badges in Secondary navigation on desktop
    Then User should see secondary navigation under Header
    And Secondary navigation should include Challenges next to Health Summary module
    And Secondary navigation should include Badges next to Challenges

  @HLI-109:3 @HLI-109 @Regression
  Scenario: User navigates to Challenges from burger menu
    Then User sees Burger menu icon
    When I click the top left burger menu icon
    When User clicks on "Challenges" submenu from burger menu
    Then User should be re-directed to "goals" page

  @HLI-109:4 @HLI-109 @Regression
  Scenario: User navigates to Challenges from Secondary navigation
    When User clicks on "Challenges" submenu from Secondary navigation
    Then User should be re-directed to "goals" page


  @HLI-109:5 @HLI-109 @Regression
  Scenario: User navigates to Badges from burger menu
    Then User sees Burger menu icon
    When I click the top left burger menu icon
    When User clicks on "Badges" submenu from burger menu
    Then User should be re-directed to "badges" page

  @HLI-109:6 @HLI-109 @Regression
  Scenario: User navigates to Badges from Secondary navigation
    When User clicks on "Badges" submenu from Secondary navigation
    Then User should be re-directed to "badges" page


