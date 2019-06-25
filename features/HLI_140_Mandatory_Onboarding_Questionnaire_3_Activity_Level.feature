Feature: HLI_140_Mandatory_Onboarding_Questionnaire_3_Activity_Level
  As a User completing Healthy Lives survey, I want to provide my activity/ exercise details so that it can be part of my overall Health score


  @HLI-140:1 @HLI-140 @Regression @Smoke
  Scenario: Activity_Level Screen Design
    Given User has logged in HLI as UserType "onboardingUser"
    And User navigates to "ACTIVITY LEVEL" screen of Onboarding journey
    Then User see "ActivityLevel" header as expected
    And User see "ActivityLevel" description as expected
    And User see "ActivityLevel" screen number as expected
    And User see "ActivityLevel" Next button
    And User see "ActivityLevel" Previous button
    And User see "ActivityLevel" Connect an App/Tracker button
    And User see "ActivityLevel" close button

  @HLI-140:2 @HLI-140 @Regression
  Scenario: Activity_Level Questionnaire Design
    Given User has logged in HLI as UserType "onboardingUser"
    And User navigates to "ACTIVITY LEVEL" screen of Onboarding journey
    Then User should see question related to "SelfReportFitness" at "ActivityLevel" screen
    And User should see question related to "ExerciseInWeek" at "ActivityLevel" screen
    And User should see question related to "HowLongExercise" at "ActivityLevel" screen
    And User should see question related to "frequentActivityTypes" at "ActivityLevel" screen
    And User should see question related to "intensiveExercise" at "ActivityLevel" screen
    And User should see question related to "trackActivityLevel" at "ActivityLevel" screen
    And User should see a slider for question "SelfReportFitness" at "ActivityLevel" screen
    And User should see a slider for question "ExerciseInWeek" at "ActivityLevel" screen
    And User should see a slider for question "HowLongExercise" at "ActivityLevel" screen
    And User should see a checkbox for question "Walk" at "ActivityLevel" screen
    And User should see a checkbox for question "Run" at "ActivityLevel" screen
    And User should see a checkbox for question "Cycle" at "ActivityLevel" screen
    And User should see a checkbox for question "Swim" at "ActivityLevel" screen
    And User should see a checkbox for question "Strength" at "ActivityLevel" screen
    And User should see a drop down for question "intensiveExercise" at "ActivityLevel" screen
    And User should see available options in drop down for question "intensiveExercise" at "ActivityLevel" screen
    And User should see a toggle button for question "trackActivityLevel" at "ActivityLevel" screen


  @HLI-140:3 @HLI-140 @Regression
  Scenario: User answers all Questionnaire at Activity Level screen
    Given User has logged in HLI as UserType "onboardingUser"
    And User navigates to "ACTIVITY LEVEL" screen of Onboarding journey
    And User slides to select answer for question "SelfReportFitness" at "ActivityLevel" screen
    And User slides to select answer for question "ExerciseInWeek" at "ActivityLevel" screen
    And User slides to select answer for question "HowLongExercise" at "ActivityLevel" screen
    And User clears all existing selected options at "ActivityLevel" screen
    #And User clicks on checkboxes for question "frequentActivityTypes" of "ActivityLevel" screen
    And User clicks on checkbox for question "Swim" of "ActivityLevel" screen
    And User clicks on checkbox for question "Cycle" of "ActivityLevel" screen
    And User clicks on checkbox for question "Run" of "ActivityLevel" screen
    And User selects a value from drop down for question "intensiveExercise" at "ActivityLevel" screen
    And User toggle for question "trackActivityLevel" on "ActivityLevel" screen
    When User clicks on Next button of "BMIBodyShape" screen
    And User clicks on Previous button of "BMIBodyShape" screen
    Then User should see selected answer on slider for "SelfReportFitness" at "ActivityLevel" screen
    And User should see selected answer on slider for "ExerciseInWeek" at "ActivityLevel" screen
    And User should see selected answer on slider for "HowLongExercise" at "ActivityLevel" screen
    And User verify status of checkbox for question "Swim" of "ActivityLevel" screen
    And User verify status of checkbox for question "Cycle" of "ActivityLevel" screen
    And User verify status of checkbox for question "Run" of "ActivityLevel" screen
    And User verify selected value for field "intensiveExercise" of "ActivityLevel" screen
    And User see toggled answer for question "trackActivityLevel" on "ActivityLevel" screen

  @HLI-140:4 @HLI-140 @Regression
  Scenario: User clicks on Previous button
    Given User has logged in HLI as UserType "onboardingUser"
    And User navigates to "ACTIVITY LEVEL" screen of Onboarding journey
    When User clicks on Previous button of "ActivityLevel" screen
    Then User should see screen with header "BMI"


  @HLI-140:5 @HLI-140 @Regression
  Scenario: User clicks on Next button
    Given User has logged in HLI as UserType "onboardingUser"
    And User navigates to "ACTIVITY LEVEL" screen of Onboarding journey
    When User clicks on Next button of "ActivityLevel" screen
    Then User should see screen with header "SUBSTANCE USAGE"

  @HLI-140:6 @HLI-140 @Regression
  Scenario: User clicks on Close button
    Given User has logged in HLI as UserType "onboardingUser"
    And User navigates to "ACTIVITY LEVEL" screen of Onboarding journey
    When User clicks on Close button of "ActivityLevel" screen
    Then User should be navigated to Health age page

  @HLI-140:7 @HLI-140 @Regression
  Scenario: User answer Hardly Ever for question 'How frequent are you usually active?'
    Given User has logged in HLI as UserType "onboardingUser"
    And User navigates to "ACTIVITY LEVEL" screen of Onboarding journey
    When User slides to select "Hardly Ever" for question "ExerciseInWeek" at "ActivityLevel" screen
    Then User should not see question related to "HowLongExercise" at "ActivityLevel" screen

  @HLI-140:7 @HLI-140
  Scenario: User see Save button as disabled when he has not answered all mandatory questions