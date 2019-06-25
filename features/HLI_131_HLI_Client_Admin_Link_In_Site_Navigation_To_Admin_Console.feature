Feature: HLI_131_HLI_Client_Admin_Link_In_Site_Navigation_To_Admin_Console
  As a designated admin person representing a company using HLI, I would like to have access to an admin console via the Site navigation menu

  @HLI-131:1 @HLI-131 @Smoke
  Scenario: Navigation to Admin console from Burger menu
    Given User has logged in HLI as UserType "adminUser"
    When User clicks on burger menu of Dashboard page
    Then User should see admin console option in menu
    When User clicks on Admin Console option from burger menu
    Then User should see Admin Console dashboard

  @HLI-131:2 @HLI-131 @Regression
  Scenario: Navigation to Admin console from Burger menu
    Given User has logged in HLI as UserType "adminUser"
    When User clicks on burger menu of Dashboard page
    Then User should see admin console option in menu
    When User clicks on Admin Console option from burger menu
    Then User should see a tab for Analytics dashboard
    And User should see a tab for Company survey