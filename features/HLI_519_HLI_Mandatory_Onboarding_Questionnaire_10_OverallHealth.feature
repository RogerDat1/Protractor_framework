Feature: HLI_519_HLI_Mandatory_Onboarding_Questionnaire_10_OverallHealth
  As a User completing Healthy Lives survey, I want to provide details about my Overall Health & Illness so that it can be part of my overall Health score

  Background:
    Given User has logged in HLI as UserType "onboardingUser"
    And User click on cancel icon of new bookmark
    And User navigates to "OVERALL HEALTH" screen of Onboarding journey


  @HLI-519:1 @HLI-519 @Regression @Smoke
  Scenario: MandatoryOverallHealth Screen Design
    Then User see "MandatoryOverallHealth" header as expected
    And User see "MandatoryOverallHealth" description as expected
    And User see "MandatoryOverallHealth" screen number as expected
    And User see "MandatoryOverallHealth" Next button
    And User see "MandatoryOverallHealth" Previous button
    And User see "MandatoryOverallHealth" Connect an App/Tracker button


  @HLI-519:2 @HLI-519 @Regression
  Scenario: MandatoryOverallHealth Screen Questionnaire
    Then User see question "RateOverallHealth" of "MandatoryOverallHealth"
    And User see answer dropdown box for question "RateOverallHealth" of "MandatoryOverallHealth" screen
    And User see available options in dropdown for question "RateOverallHealth" of "MandatoryOverallHealth"
    And User see question "RateMentalHealth" of "MandatoryOverallHealth"
    And User see answer dropdown box for question "RateMentalHealth" of "MandatoryOverallHealth" screen
    And User see available options in dropdown for question "RateMentalHealth" of "MandatoryOverallHealth"
    And User see question "TimesConsultGP" of "MandatoryOverallHealth"
    And User see answer dropdown box for question "TimesConsultGP" of "MandatoryOverallHealth" screen
    And User see available options in dropdown for question "TimesConsultGP" of "MandatoryOverallHealth"
    And User see question "DiagnosedConditions" of "MandatoryOverallHealth"
    And User see answer checkbox for question "Cancer" of "MandatoryOverallHealth" screen
    And User see answer checkbox for question "Hypertension" of "MandatoryOverallHealth" screen
    And User see answer checkbox for question "HeartCirculatoryDisease" of "MandatoryOverallHealth" screen
    And User see answer checkbox for question "ChronicObstructivePulmonaryDisease" of "MandatoryOverallHealth" screen
    And User see answer checkbox for question "Diabetes" of "MandatoryOverallHealth" screen
    And User see answer checkbox for question "RheumatoidArthritis" of "MandatoryOverallHealth" screen
    And User see answer checkbox for question "Osteoporosis" of "MandatoryOverallHealth" screen
    And User see answer checkbox for question "AnyOtherChroniConditionPleaseState" of "MandatoryOverallHealth" screen
    And User see question "MusclePain" of "MandatoryOverallHealth"
    And User see answer toggle for question "MusclePain" of "MandatoryOverallHealth" screen
    And User see question "MSKDiscomfort" of "MandatoryOverallHealth"
    And User see answer toggle for question "MSKDiscomfort" of "MandatoryOverallHealth" screen

  @HLI-519:3 @HLI-519 @Regression
  Scenario: MandatoryOverallHealth Screen Conditional Questionnaire
    When User clicks on checkbox for question "AnyOtherChroniConditionPleaseState" of "MandatoryOverallHealth" screen
    Then User see answer input box for question "AnyOtherChroniConditionPleaseState" of "MandatoryOverallHealth" screen
    When User uncheck checkbox for question "AnyOtherChroniConditionPleaseState" of "MandatoryOverallHealth" screen
    Then User should not see question "txtbox_AnyOtherChroniConditionPleaseState" of "MandatoryOverallHealth"
    When User toggle Yes for question "MSKDiscomfort" on "MandatoryOverallHealth" screen
    And User see question "MSKProblemAffecting" of "MandatoryOverallHealth"
    And User see answer toggle for question "MSKProblemAffecting" of "MandatoryOverallHealth" screen
    When User toggle No for question "MSKDiscomfort" on "MandatoryOverallHealth" screen
    Then User should not see question "question_MSKProblemAffecting" of "MandatoryOverallHealth"


  @HLI-519:4 @HLI-519 @Regression
  Scenario: User answers MandatoryOverallHealth Screen Questionnaire and verify
    Then User selects for field "RateOverallHealth" of "MandatoryOverallHealth" screen
    And User selects for field "RateMentalHealth" of "MandatoryOverallHealth" screen
    And User selects for field "TimesConsultGP" of "MandatoryOverallHealth" screen
    And User clicks on checkbox for question "Cancer" of "MandatoryOverallHealth" screen
    And User clicks on checkbox for question "Hypertension" of "MandatoryOverallHealth" screen
    And User clicks on checkbox for question "HeartCirculatoryDisease" of "MandatoryOverallHealth" screen
    And User clicks on checkbox for question "ChronicObstructivePulmonaryDisease" of "MandatoryOverallHealth" screen
    And User clicks on checkbox for question "Diabetes" of "MandatoryOverallHealth" screen
    And User clicks on checkbox for question "RheumatoidArthritis" of "MandatoryOverallHealth" screen
    And User clicks on checkbox for question "Osteoporosis" of "MandatoryOverallHealth" screen
    And User clicks on checkbox for question "AnyOtherChroniConditionPleaseState" of "MandatoryOverallHealth" screen
    And User types value for field "AnyOtherChroniConditionPleaseState" of "MandatoryOverallHealth" screen
    And User toggle Yes for question "MusclePain" on "MandatoryOverallHealth" screen
    And User toggle Yes for question "MSKDiscomfort" on "MandatoryOverallHealth" screen
    And User toggle Yes for question "MSKProblemAffecting" on "MandatoryOverallHealth" screen
    And User clicks on Next button of "MandatoryOverallHealth" screen
    And User clicks on "btn_CompleteLater" of "Mandatory_Congratulation_Message" screen
    And User reloads the page
    And User navigates to "OVERALL HEALTH" screen of Onboarding journey
    And User verify selected value for field "RateOverallHealth" of "MandatoryOverallHealth" screen
    And User verify selected value for field "RateMentalHealth" of "MandatoryOverallHealth" screen
    And User verify selected value for field "TimesConsultGP" of "MandatoryOverallHealth" screen
    And User verify status of checkbox for question "Cancer" of "MandatoryOverallHealth" screen
    And User verify status of checkbox for question "Hypertension" of "MandatoryOverallHealth" screen
    And User verify status of checkbox for question "HeartCirculatoryDisease" of "MandatoryOverallHealth" screen
    And User verify status of checkbox for question "ChronicObstructivePulmonaryDisease" of "MandatoryOverallHealth" screen
    And User verify status of checkbox for question "Diabetes" of "MandatoryOverallHealth" screen
    And User verify status of checkbox for question "RheumatoidArthritis" of "MandatoryOverallHealth" screen
    And User verify status of checkbox for question "Osteoporosis" of "MandatoryOverallHealth" screen
    And User verify status of checkbox for question "AnyOtherChroniConditionPleaseState" of "MandatoryOverallHealth" screen
    And User see toggled answer for question "MusclePain" on "MandatoryOverallHealth" screen
    And User see toggled answer for question "MSKDiscomfort" on "MandatoryOverallHealth" screen
    And User see toggled answer for question "MSKProblemAffecting" on "MandatoryOverallHealth" screen


  @HLI-519:5 @HLI-519 @Regression
  Scenario: User clicks on Previous button
    When User clicks on Previous button of "MandatoryOverallHealth" screen
    Then User should see screen with header "NUTRITION"


  @HLI-519:6 @HLI-519 @Regression
  Scenario: User clicks on Next button
    When User clicks on Next button of "MandatoryOverallHealth" screen
    Then User should see screen with header "CONGRATULATIONS"

  @HLI-519:7 @HLI-519 @Regression
  Scenario: User clicks on Close button
    When User clicks on Close button of "MandatoryOverallHealth" screen
    Then Popup window should be closed

  @HLI-519:8 @HLI-519: @OnDemand
  Scenario: Default value for fields of MandatoryOverallHealth screen
    Then User see default toggle answer for question "MusclePain" of "MandatoryOverallHealth" screen
    And User see default toggle answer for question "MSKDiscomfort" of "MandatoryOverallHealth" screen
    And User see default toggle answer for question "MSKProblemAffecting" of "MandatoryOverallHealth" screen
    And User see default selected answer in dropdown for question "RateOverallHealth" of "MandatoryOverallHealth" screen
    And User see default selected answer in dropdown for question "RateMentalHealth" of "MandatoryOverallHealth" screen
    And User see default selected answer in dropdown for question "TimesConsultGP" of "MandatoryOverallHealth" screen
















