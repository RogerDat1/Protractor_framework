Feature: HLI_142_Mandatory_Onboarding_Questionnaire_5_Heart_And_Lung_Health
  As a User completing Healthy Lives survey, I want to provide inputs about my heart & lung health so that it can be part of my overall Health score


  @HLI-142:1 @HLI-142 @Regression @Smoke
  Scenario: Heart Lung Health Screen Design
    Given User has logged in HLI as UserType "onboardingUser"
    And User click on cancel icon of new bookmark
    And User navigates to "HEART AND LUNG HEALTH" screen of Onboarding journey
    Then User see "HeartAndLungHealth" header as expected
    And User see "HeartAndLungHealth" screen number as expected
    And User see "HeartAndLungHealth" Next button
    And User see "HeartAndLungHealth" Previous button
    And User see "HeartAndLungHealth" Connect an App/Tracker button
    And User see "HeartAndLungHealth" close button


  @HLI-142:2 @HLI-142 @Regression @Smoke
  Scenario: Heart Lung Health Screen Design
    Given User has logged in HLI as UserType "onboardingUser"
    And User click on cancel icon of new bookmark
    When User opens "HeartAndLungHealth" questionnaires of "Mandatory" on-boarding journey in edit mode
    And User should see a header for question "TimerToRecordPulse" at "HeartAndLungHealth" screen
    And User see "TimerToRecordPulse" description as expected of "HeartAndLungHealth" screen
    And User should see a header for question "ShowMeHow" at "HeartAndLungHealth" screen
    And User see "ShowMeHow" description as expected of "HeartAndLungHealth" screen
    And User should see a header for question "AlreadyKnowPulse" at "HeartAndLungHealth" screen
    And User see "AlreadyKnowPulse" description as expected of "HeartAndLungHealth" screen
    And User should see a header for question "HoldingBreath" at "HeartAndLungHealth" screen
    And User see "HoldingBreath" description as expected of "HeartAndLungHealth" screen
    And User should see a button for question "pulse" at "HeartAndLungHealth" screen
    And User should see a button for question "breath" at "HeartAndLungHealth" screen
    And User should see a text box for question "beatsPerMinute" at "HeartAndLungHealth" screen
    And User see unit for question "beatsPerMinute" of "HeartAndLungHealth" screen
    And User see unit for question "minutes" of "HeartAndLungHealth" screen
    And User see unit for question "seconds" of "HeartAndLungHealth" screen
    And User see unit for question "miliseconds" of "HeartAndLungHealth" screen


  @HLI-142:3 @HLI-142 @Regression @Smoke
  Scenario: User measures pulse by counting
    Given User has logged in HLI as UserType "onboardingUser"
    And User click on cancel icon of new bookmark
    When User opens "HeartAndLungHealth" questionnaires of "Mandatory" on-boarding journey in edit mode
    When User clicks on button for question "pulse" of "HeartAndLungHealth" screen
    And User waits for "13000" seconds
    Then User should see a text box for question "beatsPerSecond" at "HeartAndLungHealth" screen
    And User see unit for question "beatsPerSecond" of "HeartAndLungHealth" screen
    When User types value for field "beatsPerSecond" of "HeartAndLungHealth" screen
    And User removes focus from textbox
    Then User verify typed value for field "beatsPerMinute" of "HeartAndLungHealth" screen
    And User should see Try Again Text for pulse start button


  @HLI-142:4 @HLI-142 @Regression @Smoke
  Scenario: User enters known pulse
    Given User has logged in HLI as UserType "onboardingUser"
    And User click on cancel icon of new bookmark
    When User opens "HeartAndLungHealth" questionnaires of "Mandatory" on-boarding journey in edit mode
    When User types value for field "beatsPerMinute" of "HeartAndLungHealth" screen


  @HLI-142:5 @HLI-142 @Regression @Smoke
  Scenario: User measures breath holding by counting
    Given User has logged in HLI as UserType "onboardingUser"
    And User click on cancel icon of new bookmark
    When User opens "HeartAndLungHealth" questionnaires of "Mandatory" on-boarding journey in edit mode
    When User clicks on button for question "breath" of "HeartAndLungHealth" screen
    And User waits for "61000" seconds
    And User clicks on button for question "breath" of "HeartAndLungHealth" screen
    Then User see non zero value for "minutes" for breath holding time at "HeartAndLungHealth" screen
    And User see non zero value for "seconds" for breath holding time at "HeartAndLungHealth" screen
    And User see non zero value for "miliseconds" for breath holding time at "HeartAndLungHealth" screen
    And User see time for hold breath at "HeartAndLungHealth" screen


  @HLI-142:6 @HLI-142 @Regression @Smoke
  Scenario: User enters invalid pulse
    Given User has logged in HLI as UserType "onboardingUser"
    And User click on cancel icon of new bookmark
    When User opens "HeartAndLungHealth" questionnaires of "Mandatory" on-boarding journey in edit mode
    When User provides "Invalid" value for question "beatsPerMinute" at "HeartAndLungHealth" screen
    Then User should see proper error message for invalid pulse value


  @HLI-142:7 @HLI-142 @Regression @Smoke
  Scenario: User answers all the questions and verify if it saved successfully
    Given User has logged in HLI as UserType "onboardingUser"
    And User click on cancel icon of new bookmark
    When User opens "HeartAndLungHealth" questionnaires of "Mandatory" on-boarding journey in edit mode
    When User types value for field "beatsPerMinute" of "HeartAndLungHealth" screen
    And User clicks on button for question "breath" of "HeartAndLungHealth" screen
    And User waits for "61000" seconds
    And User clicks on button for question "breath" of "HeartAndLungHealth" screen
    And User clicks on Save button of "HeartAndLungHealth" screen
    And User opens "HeartAndLungHealth" questionnaires of "Mandatory" on-boarding journey in edit mode
    Then User verify typed value for field "beatsPerMinute" of "HeartAndLungHealth" screen
    And User see non zero value for "minutes" for breath holding time at "HeartAndLungHealth" screen
    And User see non zero value for "seconds" for breath holding time at "HeartAndLungHealth" screen
    And User see non zero value for "miliseconds" for breath holding time at "HeartAndLungHealth" screen


  @HLI-142:8 @HLI-142 @Regression
  Scenario: User clicks on Previous button
    Given User has logged in HLI as UserType "onboardingUser"
    And User click on cancel icon of new bookmark
    And User navigates to "HEART AND LUNG HEALTH" screen of Onboarding journey
    When User clicks on Previous button of "HeartAndLungHealth" screen
    Then User should see screen with header "SUBSTANCE USAGE"


  @HLI-142:9 @HLI-142 @Regression
  Scenario: User clicks on Next button
    Given User has logged in HLI as UserType "onboardingUser"
    And User click on cancel icon of new bookmark
    And User navigates to "HEART AND LUNG HEALTH" screen of Onboarding journey
    When User clicks on Next button of "HeartAndLungHealth" screen
    Then User should see screen with header "EMOTIONAL PRIORITIES"

  @HLI-142:10 @HLI-142 @Regression
  Scenario: User clicks on Close button
    Given User has logged in HLI as UserType "onboardingUser"
    And User click on cancel icon of new bookmark
    And User navigates to "HEART AND LUNG HEALTH" screen of Onboarding journey
    When User clicks on Close button of "HeartAndLungHealth" screen
    Then User should be navigated to Health age page

  @HLI-142:11 @HLI-142
  Scenario: User clicks on Next button without answering all mandatory questions
    Then All mandatory field should be highlighted in red




