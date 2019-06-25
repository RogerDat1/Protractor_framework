@HLI-75
Feature: HLI_75_Health_Module_Page_Elements_Apps_webpage_Modals.feature
  As a User I would like the option to add, disconnect and view Apps that are compatible with HLI so that my data can be synced    with those Apps

  @HLI-75:1  @Regression @Smoke
  Scenario: User can see connected app List in the application
    Given User has logged in HLI as UserType "basicUser"
    And   User navigates to health Module


  @HLI-75:2 @Regression @Smoke
  Scenario: User can see connected app List in the application
    Given User has logged in HLI as UserType "basicUser"
    And   User navigates to health Module
    Then  The user clicks on Apps tab
    Then  User should see the "msgToConnect" if no app is connected
    Then  User Should see the option to add tracker

  @HLI-75:3 @Regression
  Scenario: User can see connected app List in the application
    Given User has logged in HLI as UserType "UserWithAppDetails"
    And   User navigates to health Module
    Then  The user clicks on Apps tab
    Then  User should see the list of all the app is connected
    Then  User Should see the option to add tracker

  @HLI-75:4 @Regression
  Scenario: User can see connected app List in the application
    Given User has logged in HLI as UserType "basicUser"
    And   User navigates to health Module
    Then  The user clicks on Apps tab
    Then  User clicks on tracker
    Then  User should see All the option to connect through App

  @HLI-75:5 @Regression
  Scenario: User can see connected app List in the application
    Given User has logged in HLI as UserType "UserWithAppDetails"
    And   User navigates to health Module
    And   User read the list of added App title
    Then  The user clicks on Apps tab
    And   User check the title list in App Tab


