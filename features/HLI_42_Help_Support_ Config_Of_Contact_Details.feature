Feature: HLI_42_Help_Support_ Config_Of_Contact_Details
  As a HLI user I want see the Help & Support Contact details relevant to my location & employer so that I can reach out to
  them for help


  @HLI-42:1 @HLI-42 @Regression @Smoke
  Scenario: User should see HLI support email address in Help & Contact page.
    Given User has logged in HLI as UserType "basicUser"
    Then User sees Burger menu icon
    When I click the top left burger menu icon
    When User clicks on "HelpAndContacts" submenu from burger menu
    Then User should be re-directed to "help-contacts" page
    Then User should see HLI support email address as "healthylives@mercer.com"
