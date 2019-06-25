Feature: HLI_520_First_Time_User_Journey_Extra_Onboarding_Questionnaire_4_Substance_&_Activity
  As a User completing Healthy Lives survey, I want to provide my activity/ exercise details so that it can be part of my overall Health score


  @HLI-520:1 @HLI-520 @Regression @Smoke
  Scenario: Substance Usage Screen Design
    Given User has logged in HLI as UserType "onboardingUser"
    And User click on cancel icon of new bookmark
    And User navigates to "SUBSTANCE & ACTIVITY LEVEL" screen of Onboarding journey
    Then User see "SubstanceAndActivityLevel" header as expected
    And User see "SubstanceAndActivityLevel" description as expected
    And User see "SubstanceAndActivityLevel" screen number as expected
    And User see "SubstanceAndActivityLevel" Next button
    And User see "SubstanceAndActivityLevel" Previous button
    And User see "SubstanceAndActivityLevel" Connect an App/Tracker button
    And User see "SubstanceAndActivityLevel" Save & Continue button


  @HLI-520:2 @HLI-520 @Regression @Smoke
  Scenario: Substance Usage Screen Questionnaire For User who does not smoke and drink
    Given User has logged in HLI as UserType "onboardingUser"
    And User click on cancel icon of new bookmark
    When User navigates to mandatory screen of substance usage
    And User toggle No for question "DoYouSmoke" on "SubstanceUsage" screen
    And User clicks on checkbox for question "Never" of "SubstanceUsage" screen
    And User clicks on Save button of "SubstanceUsage" screen
    When User navigates "SubstanceAndActivityLevel" screen of "Optional" onboarding survey
    Then User should see question related to "DoYouTrackCaloriesBurnt" at "SubstanceAndActivityLevel" screen
    And User should see a toggle button for question "DoYouTrackCaloriesBurnt" at "SubstanceAndActivityLevel" screen
    And User should see question related to "AccessToExerciseAtWork" at "SubstanceAndActivityLevel" screen
    And User should see a toggle button for question "DoYouTrackCaloriesBurnt" at "SubstanceAndActivityLevel" screen
    And User should see question related to "DoYouTakeLegalHighs" at "SubstanceAndActivityLevel" screen
    And User should see a toggle button for question "DoYouTrackCaloriesBurnt" at "SubstanceAndActivityLevel" screen


  @HLI-520:3 @HLI-520 @Regression @Smoke
  Scenario: Substance Usage Screen Questionnaire For User who drinks and smokes cigarette
    Given User has logged in HLI as UserType "onboardingUser"
    And User click on cancel icon of new bookmark
    When User navigates to mandatory screen of substance usage
    And User toggle Yes for question "DoYouSmoke" on "SubstanceUsage" screen
    And User clicks on checkbox for question "Cigarette" of "SubstanceUsage" screen
    And User types value for field "YearsOfSmoke" of "SubstanceUsage" screen
    And User types value for field "NoOfPacketsOfCigarette" of "SubstanceUsage" screen
    And User clicks on checkbox for question "Occasionally" of "SubstanceUsage" screen
    And User clicks on checkbox for question "2to3Units" of "SubstanceUsage" screen
    And User clicks on Save button of "SubstanceUsage" screen
    When User navigates "SubstanceAndActivityLevel" screen of "Optional" onboarding survey
    Then User should see question related to "IntendToStopSmoking" at "SubstanceAndActivityLevel" screen
    And User should see a toggle button for question "IntendToStopSmoking" at "SubstanceAndActivityLevel" screen
    When User toggle Yes for question "IntendToStopSmoking" on "SubstanceAndActivityLevel" screen
    Then User should see question related to "HadAssisatnce" at "SubstanceAndActivityLevel" screen
    And User should see a toggle button for question "HadAssisatnce" at "SubstanceAndActivityLevel" screen
    And User should see question related to "WhatAreTheBiggestBarriers" at "SubstanceAndActivityLevel" screen
    And User should see a text box for question "WhatAreTheBiggestBarriers" at "SubstanceAndActivityLevel" screen
    And User should see question related to "LevelOfonsumptionOfAlcohol" at "SubstanceAndActivityLevel" screen
    And User should see a drop down for question "LevelOfonsumptionOfAlcohol" at "SubstanceAndActivityLevel" screen
    And User see available options in dropdown for question "LevelOfonsumptionOfAlcohol" of "SubstanceAndActivityLevel"


  @HLI-520:4 @HLI-520 @Regression @Smoke
  Scenario: Substance Usage Screen Questionnaire For User who drinks and smokes E-cigarette
    Given User has logged in HLI as UserType "onboardingUser"
    And User click on cancel icon of new bookmark
    When User navigates to mandatory screen of substance usage
    And User toggle Yes for question "DoYouSmoke" on "SubstanceUsage" screen
    And User clicks on checkbox for question "ECigarette" of "SubstanceUsage" screen
    And User clicks on Save button of "SubstanceUsage" screen
    When User navigates "SubstanceAndActivityLevel" screen of "Optional" onboarding survey
    Then User should see question related to "SmokedTobaccoBefore" at "SubstanceAndActivityLevel" screen
    And User should see a toggle button for question "SmokedTobaccoBefore" at "SubstanceAndActivityLevel" screen


  @HLI-520:5 @HLI-520 @Regression @Smoke
  Scenario: Substance Usage Screen Questionnaire For Exercise
    Given User has logged in HLI as UserType "onboardingUser"
    And User click on cancel icon of new bookmark
    When User navigates "SubstanceAndActivityLevel" screen of "Optional" onboarding survey
    Then User should see question related to "AccessToExerciseAtWork" at "SubstanceAndActivityLevel" screen
    And User should see a toggle button for question "AccessToExerciseAtWork" at "SubstanceAndActivityLevel" screen
    When User toggle Yes for question "AccessToExerciseAtWork" on "SubstanceAndActivityLevel" screen
    Then User should see question related to "DoExerciseAtWork" at "SubstanceAndActivityLevel" screen
    And User should see a toggle button for question "DoExerciseAtWork" at "SubstanceAndActivityLevel" screen
    And User toggle No for question "DoExerciseAtWork" on "SubstanceAndActivityLevel" screen
    And User should see question related to "WhatFactorsWouldInfluence" at "SubstanceAndActivityLevel" screen
    When  User toggle Yes for question "DoExerciseAtWork" on "SubstanceAndActivityLevel" screen
    Then User should not see question related to "WhatFactorsWouldInfluence" at "SubstanceAndActivityLevel" screen


  @HLI-520:6 @HLI-520 @Regression
  Scenario: Substance Usage default Questionnaire Design
    Given User has logged in HLI as UserType "onboardingUser"
    And User click on cancel icon of new bookmark
    When User navigates to mandatory screen of substance usage
    And User toggle Yes for question "DoYouSmoke" on "SubstanceUsage" screen
    And User clicks on checkbox for question "Cigarette" of "SubstanceUsage" screen
    And User clicks on checkbox for question "Occasionally" of "SubstanceUsage" screen
    And User clicks on checkbox for question "2to3Units" of "SubstanceUsage" screen
    And User clicks on Save button of "SubstanceUsage" screen
    When User navigates to "SUBSTANCE & ACTIVITY LEVEL" screen of Onboarding journey
    Then User toggle Yes for question "DoYouTrackCaloriesBurnt" on "SubstanceAndActivityLevel" screen
    And User toggle Yes for question "AccessToExerciseAtWork" on "SubstanceAndActivityLevel" screen
    And User toggle Yes for question "DoExerciseAtWork" on "SubstanceAndActivityLevel" screen
    And User toggle Yes for question "IntendToStopSmoking" on "SubstanceAndActivityLevel" screen
    And User toggle Yes for question "HadAssisatnce" on "SubstanceAndActivityLevel" screen
    And User types value for field "WhatAreTheBiggestBarriers" of "SubstanceAndActivityLevel" screen
    And User selects a value from drop down for question "LevelOfonsumptionOfAlcohol" at "SubstanceAndActivityLevel" screen
    And User toggle Yes for question "DoYouTakeLegalHighs" on "SubstanceAndActivityLevel" screen
    When User clicks on Next button of "SubstanceUsage" screen
    And User clicks on Previous button of "SubstanceUsage" screen
    Then User see toggled answer as Yes for question "DoYouTrackCaloriesBurnt" on "SubstanceAndActivityLevel" screen
    And User see toggled answer as Yes for question "AccessToExerciseAtWork" on "SubstanceAndActivityLevel" screen
    And User see toggled answer as Yes for question "DoExerciseAtWork" on "SubstanceAndActivityLevel" screen
    And User see toggled answer as Yes for question "IntendToStopSmoking" on "SubstanceAndActivityLevel" screen
    And User see toggled answer as Yes for question "HadAssisatnce" on "SubstanceAndActivityLevel" screen
    And User verify typed value for field "WhatAreTheBiggestBarriers" of "SubstanceAndActivityLevel" screen
    And User verify selected value for field "LevelOfonsumptionOfAlcohol" of "SubstanceAndActivityLevel" screen
    And User see toggled answer as Yes for question "DoYouTakeLegalHighs" on "SubstanceAndActivityLevel" screen


  @HLI-520:7 @HLI-520 @Regression
  Scenario: User clicks on Previous button
    Given User has logged in HLI as UserType "onboardingUser"
    And User navigates to "SUBSTANCE & ACTIVITY LEVEL" screen of Onboarding journey
    When User clicks on Previous button of "SubstanceAndActivityLevel" screen
    Then User should see screen with header "ACTIVITY LEVEL"


  @HLI-520:8 @HLI-520 @Regression
  Scenario: User clicks on Next button
    Given User has logged in HLI as UserType "onboardingUser"
    And User navigates to "SUBSTANCE & ACTIVITY LEVEL" screen of Onboarding journey
    When User clicks on Next button of "SubstanceUsage" screen
    Then User should see screen with header "HEART AND LUNG HEALTH"

  @HLI-520:9 @HLI-520 @Regression
  Scenario: User clicks on Close button
    Given User has logged in HLI as UserType "onboardingUser"
    And User navigates to "SUBSTANCE & ACTIVITY LEVEL" screen of Onboarding journey
    When User clicks on Close button of "SubstanceUsage" screen
    Then User should be navigated to Health age page


  @HLI-520:10 @HLI-520
  Scenario: User clicks on Next button without answering all mandatory questions
    Then All mandatory field should be highlighted in red