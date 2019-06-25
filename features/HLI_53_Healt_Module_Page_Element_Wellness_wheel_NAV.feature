Feature: HLI_53_Healt_Module_Page_Element_Wellness_wheel_NAV
  As a User I would like to view a Homepage for Health wherein I can view an overall status of all the categories that affect my health and the goals set by me

  Background:
    Given User has logged in HLI as UserType "basicUser"

  @HLI-53:1
  Scenario: User complete the on boarding journey for health
    When  User clicks on navigation menu
    Then  User should see link to Health & Age Contacts module
    And   User clicks on Health & Age module
    Then  The User can view the Homepage for Health

  @HLI-53:2
  Scenario: User graph ploating against the country norm
    And   User can view the graph plotting all the parameters for health against the country norm
    And   The User can map Apps to refresh their data

  @HLI-53:3
  Scenario: User can see and Record Data
    And   The User can Record Data
    And   User can view articles recommended to him based on the data entered by him
    And   User can view his Goals based on the data entered by him

  @HLI-53:4
  Scenario: User can view list of connected App
    And   User can view the list of his connected Apps
    And   User can view the summary of the data entered by him