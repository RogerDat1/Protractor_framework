Feature: HLI_896_Health_ModuleNew_Wellness_Wheel_design

  @HLI-896:1
  Scenario: Users Health module design for BIOMETRICS zoom level 2
    Given User has logged in HLI as UserType "basicUser"
    And   User navigates to health Module
    Then  User clicks on "Biometrics" in zoom level one

  @HLI-896:2
  Scenario: Users Health module design for CLINICAL zoom level 2
    Given User has logged in HLI as UserType "basicUser"
    And   User navigates to health Module
    Then  User clicks on "Clinical" in zoom level one


  @HLI-896:3
  Scenario: Users Health module design for FITNESS zoom level 2
    Given User has logged in HLI as UserType "basicUser"
    And   User navigates to health Module
    Then  User clicks on "Fitness" in zoom level one

  @HLI-896:4
  Scenario: Users Health module design for MENTAL WELLNESS zoom level 2
    Given User has logged in HLI as UserType "basicUser"
    And   User navigates to health Module
    Then  User clicks on "MentalWellness" in zoom level one


  @HLI-896:5
  Scenario: Users Health module design for NUTRITION zoom level 2
    Given User has logged in HLI as UserType "basicUser"
    And   User navigates to health Module
    Then  User clicks on "Nutrition" in zoom level one


  @HLI-896:6
  Scenario: Users Health module design for OVERALL WELLBEING zoom level 2
    Given User has logged in HLI as UserType "basicUser"
    And   User navigates to health Module
    Then  User clicks on "OverallWellbeing" in zoom level one


  @HLI-896:7
  Scenario: Users Health module design for SUBSTANCES zoom level 2
    Given User has logged in HLI as UserType "basicUser"
    And   User navigates to health Module
    Then  User clicks on "Substances" in zoom level one

  @HLI-896:8

  Scenario: Users health module design in zoom level 1
    Given User has logged in HLI as UserType "basicUser"
    And   User navigates to health Module
    And   User should see key value box
    Then  User should see above in green color in key value box
    Then  User should see below in red color in key value box
    Then  User should see avrage in white color in key value box


  @HLI-896:9
  Scenario: Users health module design in zoom level 1
    Given User has logged in HLI as UserType "basicUser"
    And   User navigates to health Module
    And   User should see what does this mean


  @HLI-896:10
  Scenario: Users health module design in zoom level 1
    Given User has logged in HLI as UserType "basicUser"
    And   User navigates to health Module
    And   User should see article related to inprove your health score