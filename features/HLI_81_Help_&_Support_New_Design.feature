Feature: HLI_81_Help_&_Support_New_Design
  As a HLI User I want to view the frequently asked questions on Help & Support screen so that
  I can find answers to my questions before contacting a support agent

  Background:
    Given User has logged in HLI as UserType "basicUser"

  @HLI-81:1 @Regression @Smoke
  Scenario: User navigates to Help & Contact page through Navigation Menu
    When User clicks on navigation menu
    Then User should see link to Help & Contacts module
    And  User clicks on Help & Contacts module
    Then User should see Help & Contact page loaded

  @HLI-81:2 @Regression @Smoke
  Scenario: User navigates to Help & Contact page through site footer
    Then User should see link to Help & Contacts module in site footer
    And  User clicks on Help & Contacts module in the site footer
    Then User should see Help & Contact page loaded in new tab

  @HLI-81:3 @Regression @Smoke
  Scenario: User views Help & Contacts page
    When User clicks on navigation menu
    Then User should see link to Help & Contacts module
    And User clicks on Help & Contacts module
    And User should see Help & Contact page loaded
    And User should see Q&A section
    And User should see Contact Help & Support section
    And User should see NEED HELP OR WANT TO GIVE FEEDBACK section

  @HLI-81:4 @Regression @Smoke
  Scenario: User views Help & Contacts Q&A section
    When User clicks on navigation menu
    Then User should see link to Help & Contacts module
    And  User clicks on Help & Contacts module
    And User should see Help & Contact page loaded
    And User views Frequently asked Q&A section
    And User should be able to collapse an question detail


