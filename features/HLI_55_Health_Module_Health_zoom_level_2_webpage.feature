Feature: HLI_55_Health_Module_Health_zoom_level_2_webpage.feature
  As a User I want a zoom functionality on my Health Chart So that I can zoom into details of particular categories and view my health against the norms

  Feature: HLI_896_Health_ModuleNew_Wellness_Wheel_design

  @HLI-55:1
  Scenario: Users Health module design for BIOMETRICS zoom level 2
    Given User has logged in HLI as UserType "basicUser"
    And   User navigates to health Module
    Then  User clicks on "Biometrics" in zoom level one
    And   User should see  "BMI" in zoom level two
    And   User should see  "Body_Temperature" in zoom level two
    And   User should see  "Heart_Rate" in zoom level two
    And   User should see  "Waist_Measurement" in zoom level two
    And   User should see  "Weight" in zoom level two


  @HLI-55:2
  Scenario: Users Health module design for CLINICAL zoom level 2
    Given User has logged in HLI as UserType "basicUser"
    And   User navigates to health Module
    And   User click on cancel icon of new bookmark
    Then  User clicks on "Clinical" in zoom level one
    And   User should see  "Blood_Pressure" in zoom level two


  @HLI-55:3
  Scenario: Users Health module design for FITNESS zoom level 2
    Given User has logged in HLI as UserType "basicUser"
    And   User navigates to health Module
    And   User click on cancel icon of new bookmark
    Then  User clicks on "Fitness" in zoom level one
    And   User should see  "Steps" in zoom level two
    And   User should see  "Distance" in zoom level two
    And   User should see  "Stairs_Climbed" in zoom level two
    And   User should see  "Calories_Burned" in zoom level two
    And   User should see  "Breath_Holding" in zoom level two
    And   User should see  "Activity_Frequency" in zoom level two
    And   User should see  "Activity_Duration" in zoom level two


  @HLI-55:4
  Scenario: Users Health module design for MENTAL WELLNESS zoom level 2
    Given User has logged in HLI as UserType "basicUser"
    And   User navigates to health Module
    Then  User clicks on "MentalWellness" in zoom level one
    And   User should see  "Strees" in zoom level two
    And   User should see  "Sleep_Durations" in zoom level two
    And   User should see  "Happines" in zoom level two


  @HLI-55:5
  Scenario: Users Health module design for NUTRITION zoom level 2
    Given User has logged in HLI as UserType "basicUser"
    And   User navigates to health Module
    Then  User clicks on "Nutrition" in zoom level one
    And   User should see  "Water_Intake" in zoom level two
    And   User should see  "Unhealthy_Snacks" in zoom level two
    And   User should see  "Fruit_Veg_Intake" in zoom level two
    And   User should see  "Cooking_Frequency" in zoom level two
    And   User should see  "Cholesterol" in zoom level two
    And   User should see  "Calories_Intake" in zoom level two
    And   User should see  "Blood_Sugar_Fasting" in zoom level two


  @HLI-55:6
  Scenario: Users Health module design for OVERALL WELLBEING zoom level 2
    Given User has logged in HLI as UserType "basicUser"
    And   User navigates to health Module
    Then  User clicks on "OverallWellbeing" in zoom level one
    And   User should see  "Mental_Health_Self_Assessment" in zoom level two
    And   User should see  "Health_Self_Assessment" in zoom level two


  @HLI-55:7
  Scenario: Users Health module design for SUBSTANCES zoom level 2
    Given User has logged in HLI as UserType "basicUser"
    And   User navigates to health Module
    Then  User clicks on "Substances" in zoom level one
    And   User should see  "Alcohol" in zoom level two
    And   User should see  "Smoking" in zoom level two

  @HLI-55:8
  Scenario: Users health module design in zoom level 1
    Given User has logged in HLI as UserType "basicUser"
    And   User navigates to health Module
    And   User should see key value box
    Then  User should see above in green color in key value box
    Then  User should see below in red color in key value box
    Then  User should see avrage in white color in key value box


