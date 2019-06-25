@HLI-113
Feature:HLI_113_Usabilla_Feedback_&_contact_support
  As a User I want to leave feedback for general or specific HLI features from an anonymous feedback mechanism so that the Product Team understands my experience.


  @HLI-113:1
  Scenario: Feedback button on all HLI pages
    Given  User accesses HLI B2C Login Page
    Then   User should see a Feedback button

  @HLI-113:2
  Scenario: Feedback button on all HLI pages
    Given User has logged in HLI as UserType "basicUser"
    Then User sees Burger menu icon
    Then  User should see a Feedback button

  @HLI-113:3
  Scenario: Feedback button on all HLI pages
    Given User has logged in HLI as UserType "basicUser"
    Then User sees Burger menu icon
    When I click the top left burger menu icon
    When User clicks on "HealthAge" submenu from burger menu
    Then User should be re-directed to "health" page
    Then  User should see a Feedback button

  @HLI-113:4
  Scenario: Feedback button on all HLI pages
    Given User has logged in HLI as UserType "basicUser"
    Then User sees Burger menu icon
    When I click the top left burger menu icon
    When User clicks on "Challenges" submenu from burger menu
    Then User should be re-directed to "goals" page
    Then  User should see a Feedback button

  @HLI-113:5
  Scenario: Feedback button on all HLI pages
    Given User has logged in HLI as UserType "basicUser"
    Then User sees Burger menu icon
    When I click the top left burger menu icon
    When User clicks on "Badges" submenu from burger menu
    Then User should be re-directed to "badges" page
    Then  User should see a Feedback button

  @HLI-113:6
  Scenario: Feedback button on all HLI pages
    Given User has logged in HLI as UserType "basicUser"
    Then User sees Burger menu icon
    When I click the top left burger menu icon
    When User clicks on "ProductAndServices" submenu from burger menu
    Then User should be re-directed to "benefits" page
    Then  User should see a Feedback button

  @HLI-113:7
  Scenario: Feedback button on all HLI pages
    Given User has logged in HLI as UserType "basicUser"
    Then User sees Burger menu icon
    When I click the top left burger menu icon
    When User clicks on "ArticlesAndVideos" submenu from burger menu
    Then User should be re-directed to "article-catalogue" page
    Then  User should see a Feedback button

  @HLI-113:8
  Scenario: Feedback button on all HLI pages
    Given User has logged in HLI as UserType "basicUser"
    Then User sees Burger menu icon
    When I click the top left burger menu icon
    When User clicks on "HelpAndContacts" submenu from burger menu
    Then User should be re-directed to "help-contacts" page
    Then  User should see a Feedback button

  @HLI-113:9
  Scenario: Feedback pop-up from button
    Given User has logged in HLI as UserType "basicUser"
    And User click on cancel icon of new bookmark
    Then User sees Burger menu icon
    When User clicks on Feedback button
    Then System should create a pop-up with Feedback options
    And Feedback options include General Feedback
    And Feedback options include Specific Feedback
    And Feedback options include link to contact Help & Contacts page

  @HLI-113:10
  Scenario: Generic Feedback submission from pop-up
    Given User has logged in HLI as UserType "basicUser"
    And   User click on cancel icon of new bookmark
    Then  User sees Burger menu icon
    When  User clicks on Feedback button
    Then  System should create a pop-up with Feedback options
    And   User clicks on Generic Feedback
    Then  User Should see the Usabella Genric Feedback form
    And   User fills all necessary feedback details
    And   User clicks on submit button of feedback form
    Then  User should see successful feedback submition message

  @HLI-113:11
  Scenario: Specific Feedback submission from pop-up
    Given User has logged in HLI as UserType "basicUser"
    And User click on cancel icon of new bookmark
    Then User sees Burger menu icon
    When User clicks on Feedback button
    Then System should create a pop-up with Feedback options
    And User clicks on Specific Feedback
    And User select area of page for which he wants to give feedback
    Then User Should see the Usabella Specific Feedback form
    And  User fills all necessary feedback details
    And User clicks on submit button of feedback form
    Then User should see successful feedback submition message

  @HLI-113:12
  Scenario: Feedback form close
    Given User has logged in HLI as UserType "basicUser"
    And User click on cancel icon of new bookmark
    When User clicks on Feedback button
    Then System should create a pop-up with Feedback options
    Then User should close Feddback form







