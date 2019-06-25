Feature: HLI_517_HLI_Mandatory_Onboarding_Questionnaire_8_Blood_Pressure
  As a User completing Healthy Lives survey, I want to provide details about a supportive work environment so that it can be part of assessing my workplace health influence

  Background:
    Given User has logged in HLI as UserType "basicUser"
    And User click on cancel icon of new bookmark
    And User navigates to "BLOOD PRESSURE" screen of Onboarding journey


  @HLI-517:1 @Regression @Smoke
  Scenario: Blood Pressure Screen Design
    Then User see "BloodPressure" header as expected
    And User see "BloodPressure" description as expected
    And User see "BloodPressure" screen number as expected
    And User see "BloodPressure" Next button
    And User see "BloodPressure" Previous button
    And User see "BloodPressure" Connect an App/Tracker button


  @HLI-517:2 @Regression
  Scenario: Blood Pressure Screen Questionnaire
    Then User see question "BloodPressure" of "BloodPressure"
    And User see answer input box for question "systolic" of "BloodPressure" screen
    And User see answer input box for question "diastolic" of "BloodPressure" screen
    And User see question "Cholesterol" of "BloodPressure"
    And User see answer input box for question "Triglycerides" of "BloodPressure" screen
    And User see answer input box for question "LDLCholesterol" of "BloodPressure" screen
    And User see answer input box for question "HDLCholesterol" of "BloodPressure" screen
    And User see answer input box for question "TotalCholesterol" of "BloodPressure" screen
    And User see unit for question "Triglycerides" of "BloodPressure" screen
    And User see unit for question "LDLCholesterol" of "BloodPressure" screen
    And User see unit for question "HDLCholesterol" of "BloodPressure" screen
    And User see unit for question "TotalCholesterol" of "BloodPressure" screen
    And User see question "LastMeasurementForBloodPressure" of "BloodPressure"
    And User see answer dropdown box for question "LastMeasurementForBloodPressure" of "BloodPressure" screen
    And User see question "LastMeasurementForCholesterol" of "BloodPressure"
    And User see answer dropdown box for question "LastMeasurementForCholesterol" of "BloodPressure" screen


  @HLI-517:3 @Regression
  Scenario: User answers Blood Pressure Screen Questionnaire and verify
    Then User types value for field "systolic" of "BloodPressure" screen
    And User types value for field "diastolic" of "BloodPressure" screen
    And User types value for field "Triglycerides" of "BloodPressure" screen
    And User types value for field "LDLCholesterol" of "BloodPressure" screen
    And User types value for field "HDLCholesterol" of "BloodPressure" screen
    And User types value for field "TotalCholesterol" of "BloodPressure" screen
    And User selects for field "LastMeasurementForBloodPressure" of "BloodPressure" screen
    And User selects for field "LastMeasurementForCholesterol" of "BloodPressure" screen
    When User clicks on Next button of "BloodPressure" screen
    And User clicks on Previous button of "BloodPressure" screen
    Then User verify typed value for field "systolic" of "BloodPressure" screen
    And User verify typed value for field "diastolic" of "BloodPressure" screen
    And User verify typed value for field "Triglycerides" of "BloodPressure" screen
    And User verify typed value for field "LDLCholesterol" of "BloodPressure" screen
    And User verify typed value for field "HDLCholesterol" of "BloodPressure" screen
    And User verify typed value for field "TotalCholesterol" of "BloodPressure" screen
    And User verify selected value for field "LastMeasurementForBloodPressure" of "BloodPressure" screen
    And User verify selected value for field "LastMeasurementForCholesterol" of "BloodPressure" screen


  @HLI-517:4 @Regression
  Scenario: User clicks on Previous button
    When User clicks on Previous button of "BloodPressure" screen
    Then User should see screen with header "EMOTIONAL PRIORITIES"


  @HLI-517:5 @Regression
  Scenario: User clicks on Next button
    When User clicks on Next button of "BloodPressure" screen
    Then User should see screen with header "NUTRITION"

  @HLI-517:6 @Regression
  Scenario: User clicks on Close button
    When User clicks on Close button of "BloodPressure" screen
    Then Popup window should be closed

  @HLI-517:7 @Regression
  Scenario: Verify maximum value for input fields
    Then User types value "moreThanMaxValue" for field "systolic" of "BloodPressure" screen
    And User types value "moreThanMaxValue" for field "diastolic" of "BloodPressure" screen
    And User types value "moreThanMaxValue" for field "Triglycerides" of "BloodPressure" screen
    And User types value "moreThanMaxValue" for field "LDLCholesterol" of "BloodPressure" screen
    And User types value "moreThanMaxValue" for field "HDLCholesterol" of "BloodPressure" screen
    And User types value "moreThanMaxValue" for field "TotalCholesterol" of "BloodPressure" screen
    Then User should see error message on "BloodPressure" screen


  @HLI-517:8 @Regression
  Scenario: Verify minimum value for input fields
    Then User types value "lessThanMinValue" for field "systolic" of "BloodPressure" screen
    And User types value "lessThanMinValue" for field "diastolic" of "BloodPressure" screen
    And User types value "lessThanMinValue" for field "Triglycerides" of "BloodPressure" screen
    And User types value "lessThanMinValue" for field "LDLCholesterol" of "BloodPressure" screen
    And User types value "lessThanMinValue" for field "HDLCholesterol" of "BloodPressure" screen
    And User types value "lessThanMinValue" for field "TotalCholesterol" of "BloodPressure" screen
    Then User should see error message on "BloodPressure" screen

  @HLI-517:9 @Regression
  Scenario: Default Blood Pressure & Cholesterol screen for data from App
    Then User should see value from app for field "systolic" of "BloodPressure" screen
    And User should see value from app for field "diastolic" of "BloodPressure" screen
    And User should see value from app for field "Triglycerides" of "BloodPressure" screen
    And User should see value from app for field "LDLCholesterol" of "BloodPressure" screen
    And User should see value from app for field "HDLCholesterol" of "BloodPressure" screen
    And User should see value from app for field "TotalCholesterol" of "BloodPressure" screen
    And User should see Next button of "BloodPressure" screen as "enabled"

  @HLI-517:10 @Regression
  Scenario: Default Blood Pressure & Cholesterol screen for no data from App
    Then User should see no value for field "systolic" of "BloodPressure" screen
    And User should see no value for field "diastolic" of "BloodPressure" screen
    And User should see no value for field "Triglycerides" of "BloodPressure" screen
    And User should see no value for field "LDLCholesterol" of "BloodPressure" screen
    And User should see no value for field "HDLCholesterol" of "BloodPressure" screen
    And User should see no value for field "TotalCholesterol" of "BloodPressure" screen
    And User should see Next button of "BloodPressure" screen as "disabled"


  @HLI-517:11 @Regression
  Scenario: Verify (i) accordion for Cholesterol
    When User clicks on "infoIconOfCholesterol" of "BloodPressure" screen
    Then And User see "Cholesterol" info as expected of "BloodPressure" screen






