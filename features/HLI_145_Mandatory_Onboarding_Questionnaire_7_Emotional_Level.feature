Feature: HLI_145_Mandatory_Onboarding_Questionnaire_7_Emotional_Level
  As a User completing Healthy Lives survey, I want to share inputs about my mental health so that my emotional wellbeing can be part of my overall Health score


  @HLI-145:1 @HLI-145 @Regression @Smoke
  Scenario: Emotional Level Screen Design
    Given User has logged in HLI as UserType "onboardingUser"
    And User navigates to "EMOTIONAL LEVELS" screen of Onboarding journey
    Then User see "EmotionalLevels" header as expected
    And User see "EmotionalLevels" description as expected
    And User see "EmotionalLevels" screen number as expected
    And User see "EmotionalLevels" Next button
    And User see "EmotionalLevels" Previous button
    And User see "EmotionalLevels" Connect an App/Tracker button
    And User see "EmotionalLevels" close button

  @HLI-145:2 @HLI-145 @Regression
  Scenario: Emotional Level Questionnaire Design
    Given User has logged in HLI as UserType "onboardingUser"
    And User navigates to "EMOTIONAL LEVELS" screen of Onboarding journey
    Then User should see question related to "HowHappyAreYouGenerally" at "EmotionalLevels" screen
    And User should see question related to "HowStressedAreYou" at "EmotionalLevels" screen
    And User should see question related to "QualityOfSleep" at "EmotionalLevels" screen
    And User should see question related to "HoursOfSleep" at "EmotionalLevels" screen
    And User should see question related to "trackSleep" at "EmotionalLevels" screen
    And User should see question related to "feelLethargic" at "EmotionalLevels" screen
    And User should see question related to "DifficultInSleeping" at "EmotionalLevels" screen
    And User should see question related to "DifficultyInGettingUpEarly" at "EmotionalLevels" screen
    And User should see a slider for question "HowHappyAreYouGenerally" at "EmotionalLevels" screen
    And User should see a slider for question "HowStressedAreYou" at "EmotionalLevels" screen
    And User should see a slider for question "QualityOfSleep" at "EmotionalLevels" screen
    And User should see a slider for question "HoursOfSleep" at "EmotionalLevels" screen
    And User should see a drop down for question "feelLethargic" at "EmotionalLevels" screen
    And User should see available options in drop down for question "feelLethargic" at "EmotionalLevels" screen
    And User should see a toggle button for question "trackSleep" at "EmotionalLevels" screen
    And User should see a toggle button for question "DifficultInSleeping" at "EmotionalLevels" screen
    And User should see a toggle button for question "DifficultyInGettingUpEarly" at "EmotionalLevels" screen


  @HLI-145:3 @HLI-145 @Regression
  Scenario: User answers all Questionnaire at Emotional Level screen
    Given User has logged in HLI as UserType "onboardingUser"
    And User navigates to "EMOTIONAL LEVELS" screen of Onboarding journey
    And User slides to select answer for question "HowHappyAreYouGenerally" at "EmotionalLevels" screen
    And User slides to select answer for question "HowStressedAreYou" at "EmotionalLevels" screen
    And User slides to select answer for question "QualityOfSleep" at "EmotionalLevels" screen
    And User slides to select answer for question "HoursOfSleep" at "EmotionalLevels" screen
    And User toggle Yes for question "trackSleep" on "EmotionalLevels" screen
    And User selects a value from drop down for question "feelLethargic" at "EmotionalLevels" screen
    And User toggle Yes for question "DifficultInSleeping" on "EmotionalLevels" screen
    And User toggle Yes for question "DifficultyInGettingUpEarly" on "EmotionalLevels" screen
    When User clicks on Next button of "EmotionalLevels" screen
    And User clicks on Previous button of "EmotionalLevels" screen
    Then User should see selected answer on slider for "HowHappyAreYouGenerally" at "EmotionalLevels" screen
    And User should see selected answer on slider for "HowStressedAreYou" at "EmotionalLevels" screen
    And User should see selected answer on slider for "QualityOfSleep" at "EmotionalLevels" screen
    And User should see selected answer on slider for "HoursOfSleep" at "EmotionalLevels" screen
    And User verify selected value for field "feelLethargic" of "EmotionalLevels" screen
    And User see toggled answer as Yes for question "trackSleep" on "EmotionalLevels" screen
    And User see toggled answer as Yes for question "DifficultInSleeping" on "EmotionalLevels" screen
    And User see toggled answer as Yes for question "DifficultyInGettingUpEarly" on "EmotionalLevels" screen


  @HLI-145:4 @HLI-145 @Regression
  Scenario: User clicks on Previous button
    Given User has logged in HLI as UserType "onboardingUser"
    And User navigates to "EMOTIONAL LEVELS" screen of Onboarding journey
    When User clicks on Previous button of "EmotionalLevels" screen
    Then User should see screen with header "EMOTIONAL PRIORITIES"


  @HLI-145:5 @HLI-145 @Regression
  Scenario: User clicks on Next button
    Given User has logged in HLI as UserType "onboardingUser"
    And User navigates to "EMOTIONAL LEVELS" screen of Onboarding journey
    When User clicks on Next button of "EmotionalLevels" screen
    Then User should see screen with header "BLOOD PRESSURE"

  @HLI-145:6 @HLI-145 @Regression
  Scenario: User clicks on Close button
    Given User has logged in HLI as UserType "onboardingUser"
    And User navigates to "EMOTIONAL LEVELS" screen of Onboarding journey
    When User clicks on Close button of "EmotionalLevels" screen
    Then User should be navigated to Health age page


  @HLI-145:7 @HLI-145
  Scenario: User see Save button as disabled when he has not answered all mandatory questions