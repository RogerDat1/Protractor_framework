Feature: HLI_144_Mandatory_Onboarding_Questionnaire_6_emotional_Priorities
  As a User completing Healthy Lives survey, I want to priorities areas of my emotional health so that I can
  get personalized goals and recommendations in areas of my interest


  @HLI-144:1 @HLI-144 @Regression @Smoke
  Scenario: emotional Priorities Screen Design
    Given User has logged in HLI as UserType "onboardingUser"
    And User navigates to "EMOTIONAL PRIORITIES" screen of Onboarding journey
    Then User see "emotionalPriorities" header as expected
    And User see "emotionalPriorities" description as expected
    And User see "emotionalPriorities" screen number as expected
    And User see "emotionalPriorities" Next button
    And User see "emotionalPriorities" Previous button
    And User see "emotionalPriorities" Connect an App/Tracker button
    And User see "emotionalPriorities" close button

  @HLI-144:2 @HLI-144 @Regression
  Scenario: emotional Priorities Name
    Given User has logged in HLI as UserType "onboardingUser"
    And User navigates to "EMOTIONAL PRIORITIES" screen of Onboarding journey
    Then User should see "Sleep" as a emotional priority at "emotionalPriorities" screen
    And User should see "Stress" as a emotional priority at "emotionalPriorities" screen
    And User should see "MoodToday" as a emotional priority at "emotionalPriorities" screen
    And User should see "GeneralHappiness" as a emotional priority at "emotionalPriorities" screen
    And User should see "MentalWellness" as a emotional priority at "emotionalPriorities" screen

  @HLI-144:3 @HLI-144 @Regression
  Scenario: emotional Priorities Description When User Clicks On Any Priority
    Given User has logged in HLI as UserType "onboardingUser"
    And User navigates to "EMOTIONAL PRIORITIES" screen of Onboarding journey
    When User clicks on "Sleep" emotional priority at "emotionalPriorities" screen
    Then User should see emotional priority "Sleep" header below at "emotionalPriorities" screen
    And User should see emotional priority "Sleep" description below at "emotionalPriorities" screen
    When User clicks on "Stress" emotional priority at "emotionalPriorities" screen
    Then User should see emotional priority "Stress" header below at "emotionalPriorities" screen
    And User should see emotional priority "Stress" description below at "emotionalPriorities" screen
    When User clicks on "MoodToday" emotional priority at "emotionalPriorities" screen
    Then User should see emotional priority "MoodToday" header below at "emotionalPriorities" screen
    And User should see emotional priority "MoodToday" description below at "emotionalPriorities" screen
    When User clicks on "GeneralHappiness" emotional priority at "emotionalPriorities" screen
    Then User should see emotional priority "GeneralHappiness" header below at "emotionalPriorities" screen
    And User should see emotional priority "GeneralHappiness" description below at "emotionalPriorities" screen
    When User clicks on "MentalWellness" emotional priority at "emotionalPriorities" screen
    Then User should see emotional priority "MentalWellness" header below at "emotionalPriorities" screen
    And User should see emotional priority "MentalWellness" description below at "emotionalPriorities" screen


  @HLI-144:4 @HLI-144 @Regression
  Scenario: Drag And Drop emotional Priorities
    Given User has logged in HLI as UserType "onboardingUser"
    And User navigates to "EMOTIONAL PRIORITIES" screen of Onboarding journey
    Then User see existing order of emotional priorities at "emotionalPriorities" screen
    And User drags a emotional priority and drop at "emotionalPriorities" screen
    And User clicks on Next button of "emotionalPriorities" screen
    And User clicks on Previous button of "emotionalPriorities" screen
    Then User see new order of emotional priorities at "emotionalPriorities" screen
    And Existing and new order should be different at Emotional Priorities screen

  @HLI-144:5 @HLI-144 @Regression
  Scenario: User clicks on Previous button
    Given User has logged in HLI as UserType "onboardingUser"
    And User navigates to "EMOTIONAL PRIORITIES" screen of Onboarding journey
    When User clicks on Previous button of "emotionalPriorities" screen
    Then User should see screen with header "HEART AND LUNG HEALTH"


  @HLI-144:6 @HLI-144 @Regression
  Scenario: User clicks on Next button
    Given User has logged in HLI as UserType "onboardingUser"
    And User navigates to "EMOTIONAL PRIORITIES" screen of Onboarding journey
    When User clicks on Next button of "emotionalPriorities" screen
    Then User should see screen with header "EMOTIONAL LEVELS"

  @HLI-144:7 @HLI-144 @Regression
  Scenario: User clicks on Close button
    Given User has logged in HLI as UserType "onboardingUser"
    And User navigates to "EMOTIONAL PRIORITIES" screen of Onboarding journey
    When User clicks on Close button of "emotionalPriorities" screen
    Then User should be navigated to Health age page

  @HLI-144:8 @HLI-144 @Regression
  Scenario: Default order of emotional priorities
    Given User has logged in HLI as UserType "userWithDefaultPhysicalPriority"
    And User navigates to "EMOTIONAL PRIORITIES" screen of Onboarding journey
    Then User see default order of emotional priorities at "emotionalPriorities" screen

  @HLI-144:9 @HLI-144 @Regression
  Scenario: User clicks on Next button without modifying default order of emotional priorities
    Given User has logged in HLI as UserType "userWithDefaultPhysicalPriority"
    And User navigates to "EMOTIONAL PRIORITIES" screen of Onboarding journey
    When User clicks on next without modifying default order of emotional priorities at "emotionalPriorities" screen
    Then User should see screen with header "BODY MASS INDEX"
















