Feature: HLI_29_Site_Menu_Footers_ Site_Menu_Setup
  As an HLI User I would like there to be a site menu on the website so I can seamlessly navigate
  around the site pages


  @HLI-29:1 @HLI-29 @Smoke @Regression
  Scenario: Burger menu displays site pages
    Given User has logged in HLI as UserType "basicUser"
    Then User sees Burger menu icon
    When I click the top left burger menu icon
    Then The task bar shows "Home" submenu
    And The task bar shows "HealthAge" submenu
    And The task bar shows "Badges" submenu
    And The task bar shows "Challenges" submenu
    And The task bar shows "ProductAndServices" submenu
    And The task bar shows "ArticlesAndVideos" submenu
    And The task bar shows "DigitalFilingCabinet" submenu
    And The task bar shows "HelpAndContacts" submenu


  @HLI-29:2 @HLI-29 @Smoke @Regression
  Scenario: User clicks on Home submenu
    Given User has logged in HLI as UserType "basicUser"
    Then User sees Burger menu icon
    When I click the top left burger menu icon
    When User clicks on "Home" submenu from burger menu
    Then User should be re-directed to "dashboard" page

  @HLI-29:3 @HLI-29 @Smoke @Regression
  Scenario: User clicks on Health Age submenu
    Given User has logged in HLI as UserType "basicUser"
    Then User sees Burger menu icon
    When I click the top left burger menu icon
    When User clicks on "HealthAge" submenu from burger menu
    Then User should be re-directed to "health" page

  @HLI-29:4 @HLI-29 @Smoke @Regression
  Scenario: User clicks on Challenges submenu
    Given User has logged in HLI as UserType "basicUser"
    Then User sees Burger menu icon
    When I click the top left burger menu icon
    When User clicks on "Challenges" submenu from burger menu
    Then User should be re-directed to "goals" page

  @HLI-29:5 @HLI-29 @Smoke @Regression
  Scenario: User clicks on Badges submenu
    Given User has logged in HLI as UserType "basicUser"
    Then User sees Burger menu icon
    When I click the top left burger menu icon
    When User clicks on "Badges" submenu from burger menu
    Then User should be re-directed to "badges" page

  @HLI-29:6 @HLI-29 @Smoke @Regression
  Scenario: User clicks on ProductsAndServices submenu
    Given User has logged in HLI as UserType "basicUser"
    Then User sees Burger menu icon
    When I click the top left burger menu icon
    When User clicks on "ProductAndServices" submenu from burger menu
    Then User should be re-directed to "benefits" page

  @HLI-29:7 @HLI-29 @Smoke @Regression
  Scenario: User clicks on ArticlesAndVideos submenu
    Given User has logged in HLI as UserType "basicUser"
    Then User sees Burger menu icon
    When I click the top left burger menu icon
    When User clicks on "ArticlesAndVideos" submenu from burger menu
    Then User should be re-directed to "article-catalogue" page

  @HLI-29:8 @HLI-29 @Smoke @Regression
  Scenario: User clicks on DigitalFilingCabinet submenu
    Given User has logged in HLI as UserType "basicUser"
    Then User sees Burger menu icon
    When I click the top left burger menu icon
    When User clicks on "DigitalFilingCabinet" submenu from burger menu
    Then User should be re-directed to "Mercer Account Center" page in new tab

  @HLI-29:9 @HLI-29 @Smoke @Regression
  Scenario: User clicks on HelpAndContacts submenu
    Given User has logged in HLI as UserType "basicUser"
    Then User sees Burger menu icon
    When I click the top left burger menu icon
    When User clicks on "HelpAndContacts" submenu from burger menu
    Then User should be re-directed to "help-contacts" page


  @HLI-29:10 @HLI-29 @Smoke @Regression
  Scenario: Burger menu displays site pages for admin user
    Given User has logged in HLI as UserType "adminUser"
    Then User sees Burger menu icon
    When I click the top left burger menu icon
    Then The task bar shows "Home" submenu
    And The task bar shows "HealthAge" submenu
    And The task bar shows "Badges" submenu
    And The task bar shows "Challenges" submenu
    And The task bar shows "ProductAndServices" submenu
    And The task bar shows "ArticlesAndVideos" submenu
    And The task bar shows "DigitalFilingCabinet" submenu
    And The task bar shows "HelpAndContacts" submenu
    And The task bar shows "AdminConsole" submenu

  @HLI-29:11 @HLI-29 @Smoke @Regression
  Scenario: User clicks on Admin submenu as an admin user
    Given User has logged in HLI as UserType "adminUser"
    Then User sees Burger menu icon
    When I click the top left burger menu icon
    When User clicks on "AdminConsole" submenu from burger menu
    Then User should be re-directed to "client-admin" page










