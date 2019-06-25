Feature: HLI_237_First_Time_User_Journey_ Extra_Onboarding_Questionnaire_1_ Overall_ Health
  As a User completing Healthy Lives survey, I want to provide details about my general health
  & sickness as optional inputs so that it can be part of my overall Health score

  @HLI-237:1 @HLI-237 @Regression
  Scenario: Overall Health Screen Design
    Given User has logged in HLI as UserType "onboardingUser"
    And User navigates to "OVERALL HEALTH" screen of "Optional" Onboarding journey
    Then User see "OptionalOverallHealth" header as expected
    And User see "OptionalOverallHealth" description as expected
    And User see "OptionalOverallHealth" screen number as expected
    And User see "OptionalOverallHealth" Next button
    And User see "OptionalOverallHealth" Previous button
    And User see "OptionalOverallHealth" Connect an App/Tracker button
    And User see "OptionalOverallHealth" Save & Continue button


  @HLI-237:2 @HLI-237 @Regression @Smoke
  Scenario: Overall Health Questionnaire Design
    Given User has logged in HLI as UserType "onboardingUser"
    And User click on cancel icon of new bookmark
    And User navigates to "OVERALL HEALTH" screen of "Optional" Onboarding journey
    Then User should see question related to "routineScreening" at "OptionalOverallHealth" screen
    And User should see question related to "NumberOfSickLeave" at "OptionalOverallHealth" screen
    And User should see question related to "areaImpactedByHealth" at "OptionalOverallHealth" screen
    And User should see a text box for question "NumberOfSickLeave" at "OptionalOverallHealth" screen
    And User should see a drop down for question "areaImpactedByHealth" at "OptionalOverallHealth" screen
    And User should see available options in drop down for question "areaImpactedByHealth" at "OptionalOverallHealth" screen
    And User should see a toggle button for question "routineScreening" at "OptionalOverallHealth" screen

  @HLI-237:3 @HLI-237 @Regression
  Scenario: User answers all Questionnaire at Overall Health screen
    Given User has logged in HLI as UserType "onboardingUser"
    And User navigates to "OVERALL HEALTH" screen of "Optional" Onboarding journey
    And User toggle Yes for question "routineScreening" on "OptionalOverallHealth" screen
    And User selects a value from drop down for question "NumberOfSickLeave" at "OptionalOverallHealth" screen
    And User selects a value from drop down for question "areaImpactedByHealth" at "OptionalOverallHealth" screen
    When User clicks on Next button of "OptionalOverallHealth" screen
    And User clicks on Previous button of "OptionalOverallHealth" screen
    And User verify selected value for field "NumberOfSickLeave" of "OptionalOverallHealth" screen
    And User verify selected value for field "areaImpactedByHealth" of "OptionalOverallHealth" screen
    And User see toggled answer as Yes for question "routineScreening" on "OptionalOverallHealth" screen

  @HLI-237:4 @HLI-237 @Regression
  Scenario: User clicks on Next button
    Given User has logged in HLI as UserType "onboardingUser"
    And User navigates to "OVERALL HEALTH" screen of "Optional" Onboarding journey
    When User clicks on Next button of "OptionalOverallHealth" screen
    Then User should see screen with header "MUSCULOSKETAL"


  @HLI-237:5 @HLI-237 @Regression
  Scenario: User clicks on Previous button
    Given User has logged in HLI as UserType "onboardingUser"
    And User navigates to "OVERALL HEALTH" screen of "Optional" Onboarding journey
    When User clicks on Previous button of "OptionalOverallHealth" screen
    Then User should see screen with header "CONGRATULATIONS"

  @HLI-237:6 @HLI-237 @Regression
  Scenario: User clicks on Save And Continue button
    Given User has logged in HLI as UserType "onboardingUser"
    And User navigates to "OVERALL HEALTH" screen of "Optional" Onboarding journey
    When User clicks on Save & Continue button of "OptionalOverallHealth" screen
    Then User should be navigated to Health age page


  @HLI-237:7 @HLI-237 @Regression
  Scenario: User clicks on Next button without answeing any question
    Given User has logged in HLI as UserType "onboardingUser"
    And User navigates to "OVERALL HEALTH" screen of "Optional" Onboarding journey
    When User clicks on Next button of "OptionalOverallHealth" screen
    Then User should see screen with header "MUSCULOSKETAL"