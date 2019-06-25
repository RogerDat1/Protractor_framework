Feature: HLI_518_HLI_Mandatory_Onboarding_Questionnaire_9_Nutrition
  As a User completing Healthy Lives survey, I want to provide details about my nutrition intake so that it can be part of my overall Health score

  Background:
    Given User has logged in HLI as UserType "basicUser"
    And User click on cancel icon of new bookmark
    And User navigates to "NUTRITION" screen of Onboarding journey

  @HLI-518:1 @Regression @Smoke
  Scenario: Nutrition Screen Design
    Then User see "Nutrition" header as expected
    And User see "Nutrition" description as expected
    And User see "Nutrition" screen number as expected
    And User see "Nutrition" Next button
    And User see "Nutrition" Previous button
    And User see "Nutrition" Connect an App/Tracker button


  @HLI-518:2 @Regression
  Scenario: Nutrition Screen Questionnaire
    Then User see question "GlucoseLevel" of "Nutrition"
    And User see answer input box for question "GlucoseLevel" of "Nutrition" screen
    And User see question "LastMeasurementForFasting" of "Nutrition"
    And User see answer dropdown box for question "LastMeasurementForFasting" of "Nutrition" screen
    And User see available options in dropdown for question "LastMeasurementForFasting" of "Nutrition"
    And User see question "FruitVegetablesPerDay" of "Nutrition"
    And User see answer dropdown box for question "FruitVegetablesPerDay" of "Nutrition" screen
    And User see available options in dropdown for question "FruitVegetablesPerDay" of "Nutrition"
    And User see question "SaltySnacksPerDay" of "Nutrition"
    And User see answer dropdown box for question "SaltySnacksPerDay" of "Nutrition" screen
    And User see available options in dropdown for question "SaltySnacksPerDay" of "Nutrition"
    And User see question "WaterPerDay" of "Nutrition"
    And User see answer input box for question "WaterPerDay" of "Nutrition" screen
    And User see question "CaloriePerDay" of "Nutrition"
    And User see answer input box for question "CaloriePerDay" of "Nutrition" screen
    And User see unit for question "GlucoseLevel" of "Nutrition" screen
    And User see unit for question "WaterPerDay" of "Nutrition" screen
    And User see unit for question "CaloriePerDay" of "Nutrition" screen
    When User clicks on "infoIconOfGlucoseLevel" of "Nutrition" screen
    Then User see "GlucoseLevel" info as expected of "Nutrition" screen
    When User clicks on "infoIconOfWaterPerDay" of "Nutrition" screen
    Then User see "WaterPerDay" info as expected of "Nutrition" screen
    When User clicks on "infoIconOfCaloriePerDay" of "Nutrition" screen
    Then User see "CaloriePerDay" info as expected of "Nutrition" screen


  @HLI-518:3 @Regression
  Scenario: User answers Nutrition Screen Questionnaire and verify
    Then User types value for field "GlucoseLevel" of "Nutrition" screen
    And User selects for field "LastMeasurementForFasting" of "Nutrition" screen
    And User selects for field "FruitVegetablesPerDay" of "Nutrition" screen
    And User selects for field "SaltySnacksPerDay" of "Nutrition" screen
    And User types value for field "WaterPerDay" of "Nutrition" screen
    And User types value for field "CaloriePerDay" of "Nutrition" screen
    When User clicks on Next button of "Nutrition" screen
    And User clicks on Previous button of "Nutrition" screen
    Then User verify typed value for field "GlucoseLevel" of "Nutrition" screen
    And User verify typed value for field "WaterPerDay" of "Nutrition" screen
    And User verify typed value for field "CaloriePerDay" of "Nutrition" screen
    And User verify selected value for field "LastMeasurementForFasting" of "Nutrition" screen
    And User verify selected value for field "FruitVegetablesPerDay" of "Nutrition" screen
    And User verify selected value for field "SaltySnacksPerDay" of "Nutrition" screen


  @HLI-518:4 @Regression
  Scenario: User clicks on Previous button
    When User clicks on Previous button of "Nutrition" screen
    Then User should see screen with header "OVERALL HEALTH"


  @HLI-518:5 @Regression
  Scenario: User clicks on Next button
    When User clicks on Next button of "Nutrition" screen
    Then User should see screen with header "BLOOD PRESSURE"

  @HLI-518:6 @Regression
  Scenario: User clicks on Close button
    When User clicks on Close button of "Nutrition" screen
    Then Popup window should be closed

  @HLI-518:7 @Regression
  Scenario: Verification of acceptable inputs for fields GlucoseLevel of Nutrition Questionnaire
    When User types value "withInRange" for field "GlucoseLevel" of "Nutrition" screen
    Then Text box bottom color for field "GlucoseLevel" of "Nutrition" screen should not be red
    And User types value "moreThanMaxValue" for field "GlucoseLevel" of "Nutrition" screen
    Then Text box bottom color should be red
    And User types value "lessThanMinValue" for field "GlucoseLevel" of "Nutrition" screen
    Then Text box bottom color should be red
    And User types value "equalToMaxValue" for field "GlucoseLevel" of "Nutrition" screen
    Then Text box bottom color should not be red
    And User types value "equalToMinValue" for field "GlucoseLevel" of "Nutrition" screen
    Then Text box bottom color should not be red
    And User types value "decimalValueInRange" for field "GlucoseLevel" of "Nutrition" screen
    Then Text box bottom color should not be red
    And User types value "justMoreThanMinBoundaryValue" for field "GlucoseLevel" of "Nutrition" screen
    Then Text box bottom color should not be red
    And User types value "justLessThanMinBoundaryValue" for field "GlucoseLevel" of "Nutrition" screen
    Then Text box bottom color should be red
    And User types value "justMoreThanMaxBoundaryValue" for field "GlucoseLevel" of "Nutrition" screen
    Then Text box bottom color should be red
    And User types value "justLessThanMaxBoundaryValue" for field "GlucoseLevel" of "Nutrition" screen
    Then Text box bottom color should not be red
    And User types value "neagtiveValue" for field "GlucoseLevel" of "Nutrition" screen
    Then Text box bottom color should be red


  @HLI-518:8 @Regression
  Scenario: Default Blood Pressure & Cholesterol screen for data from App
    Then User should see value from app for field "GlucoseLevel" of "Nutrition" screen
    And User should see value from app for field "LastMeasurementForFasting" of "Nutrition" screen
    And User should see value from app for field "FruitVegetablesPerDay" of "Nutrition" screen
    And User should see value from app for field "SaltySnacksPerDay" of "Nutrition" screen
    And User should see value from app for field "WaterPerDay" of "Nutrition" screen
    And User should see value from app for field "CaloriePerDay" of "Nutrition" screen
    And User should see Next button of "Nutrition" screen as "enabled"

  @HLI-518:9 @Regression
  Scenario: Default Blood Pressure & Cholesterol screen for no data from App
    Then User should see no value for field "GlucoseLevel" of "Nutrition" screen
    And User should see no value for field "LastMeasurementForFasting" of "Nutrition" screen
    And User should see no value for field "FruitVegetablesPerDay" of "Nutrition" screen
    And User should see no value for field "SaltySnacksPerDay" of "Nutrition" screen
    And User should see no value for field "WaterPerDay" of "Nutrition" screen
    And User should see no value for field "CaloriePerDay" of "Nutrition" screen
    And User should see Next button of "Nutrition" screen as "Nutrition"









