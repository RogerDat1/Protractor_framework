Feature: HLI_130_Client_Admin_Tab_2_Company_Survey
  As a Company Admin User, I would like to complete the Health Survey for my Company so that my Company's health score can be reviewed

  Background:
    Given User has logged in HLI as UserType "adminUser"
    And User click on cancel icon of new bookmark
    When I click the top left burger menu icon
    And User clicks on "AdminConsole" submenu from burger menu
    Then User should be re-directed to "client-admin" page

  @HLI-130:1 @HLI-130 @Regression @Smoke
  Scenario: Company Survey in Admin Console
    Then User see "CompanySurvey" tab relevant to his Company
    And Company Survey tab is listed next to Analytic


  @HLI-130:2 @HLI-130
  Scenario: Company Survey tab inclusion
    Then Tab should present five pages with mandatory questions identified in Company Survey
    And Tab should present five pages with optional questions identified in Company Survey
    And User should be able to respond to all questions from appropriate field type