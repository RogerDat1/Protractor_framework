Feature:HLI_129_Health_Module_Chart_for_plotting_Health_Parameters

  As a User I would like to view a graph on the Homepage for Wellness wherein
  I can view an overall status of all the categories that affect my health

  Background:
    Given User has logged in HLI as UserType "basicUser"


  @HLI-129:1
  Scenario: User Data Sources based
    When  User clicks on navigation menu
    Then  User should see link to Health & Age Contacts module
    And   User clicks on Health & Age module
    Then  The User can view the Homepage for Health
    Then  User should view HealthyLives circular graph on page
    And   User graph should capture overall Health Age Score
    And   User can view the graph plotting parameters Biometrics
    And   User can view the graph plotting parameters Mood
    And   User can view the graph plotting parameters Sleep
    And   User can view the graph plotting parameters Stress
    And   User can view the graph plotting parameters Clinical
    And   User can view the graph plotting parameters Mental Wellness
    And   User can view the graph plotting parameters Substances
    And   User can view the graph plotting parameters Nutrition
    And   User can view the graph plotting parameters Fitness


  @HLI-129:2
  Scenario: User Data Sources based
    When  User clicks on navigation menu
    Then  User should see link to Health & Age Contacts module
    And   User clicks on Health & Age module
    Then  The User can view the Homepage for Health
    Then  The Overall status will be determined as Green
    And   The category dot will be plotted in the chart on the side
    And   Icons for apps connected
    Then  Icon for Manual data



