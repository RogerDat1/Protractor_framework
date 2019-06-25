Feature: HLI_239_First_Time_Use_Journey_ Extra_Onboarding_Questionnaire_ 2_MSK
  As a User completing Healthy Lives survey, I want to provide details about pains or discomfort
  linked with my muscles/ bones so that it can be part of my overall Health score

  @HLI-239:1 @HLI-239 @Regression @Smoke
  Scenario: Musculosketal Screen Design
    Given User has logged in HLI as UserType "onboardingUser"
    And User click on cancel icon of new bookmark
    And User navigates to "MUSCULOSKETAL" screen of Onboarding journey
    Then User see "Musculosketal" header as expected
    And User see "Musculosketal" description as expected
    And User see "Musculosketal" screen number as expected
    And User see "Musculosketal" Next button
    And User see "Musculosketal" Previous button
    And User see "Musculosketal" Connect an App/Tracker button
    And User see "Musculosketal" Save & Continue button

  @HLI-239:2 @HLI-239 @HLI-145 @Regression
  Scenario: Musculosketal Questionnaire Design
    Given User has logged in HLI as UserType "onboardingUser"
    And User click on cancel icon of new bookmark
    And User navigates to "MUSCULOSKETAL" screen of Onboarding journey
    Then User should see question related to "MuscleBonePain" at "Musculosketal" screen
    And User should see question related to "Medication" at "Musculosketal" screen
    And User should see question related to "MSKProblems" at "Musculosketal" screen
    And User should see question related to "MSKTraining" at "Musculosketal" screen
    And User should see question related to "SittomgdownTime" at "Musculosketal" screen
    And User should see question related to "RegularBreaks" at "Musculosketal" screen
    And User should see a drop down for question "MuscleBonePain" at "Musculosketal" screen
    And User should see available options in drop down for question "MuscleBonePain" at "Musculosketal" screen
    And User should see a drop down for question "Medication" at "Musculosketal" screen
    And User should see available options in drop down for question "Medication" at "Musculosketal" screen
    And User should see a drop down for question "SittomgdownTime" at "Musculosketal" screen
    And User should see available options in drop down for question "SittomgdownTime" at "Musculosketal" screen
    And User should see a toggle button for question "MSKTraining" at "Musculosketal" screen
    And User should see a toggle button for question "RegularBreaks" at "Musculosketal" screen
    And User should see a toggle button for question "MSKProblems" at "Musculosketal" screen
    When User toggle Yes for question "MSKProblems" on "Musculosketal" screen
    Then User should see question related to "WorkSupport" at "Musculosketal" screen
    And User should see a toggle button for question "WorkSupport" at "Musculosketal" screen
    When User toggle No for question "MSKProblems" on "Musculosketal" screen
    Then User should not see question related to "WorkSupport" at "Musculosketal" screen


  @HLI-239:3 @HLI-239 @Regression
  Scenario: User answers all Questionnaire at Musculosketal screen
    Given User has logged in HLI as UserType "onboardingUser"
    And User click on cancel icon of new bookmark
    And User navigates to "MUSCULOSKETAL" screen of Onboarding journey
    And User selects a value from drop down for question "MuscleBonePain" at "Musculosketal" screen
    And User selects a value from drop down for question "Medication" at "Musculosketal" screen
    And User toggle Yes for question "MSKProblems" on "Musculosketal" screen
    And User toggle Yes for question "WorkSupport" on "Musculosketal" screen
    And User toggle Yes for question "MSKTraining" on "Musculosketal" screen
    And User selects a value from drop down for question "SittomgdownTime" at "Musculosketal" screen
    And User toggle Yes for question "RegularBreaks" on "Musculosketal" screen
    When User clicks on Next button of "Musculosketal" screen
    And User clicks on Previous button of "Musculosketal" screen
    And User verify selected value for field "MuscleBonePain" of "Musculosketal" screen
    And User verify selected value for field "Medication" of "Musculosketal" screen
    And User see toggled answer as Yes for question "MSKProblems" on "Musculosketal" screen
    And User see toggled answer as Yes for question "WorkSupport" on "Musculosketal" screen
    And User see toggled answer as Yes for question "MSKTraining" on "Musculosketal" screen
    And User verify selected value for field "SittomgdownTime" of "Musculosketal" screen
    And User see toggled answer as Yes for question "RegularBreaks" on "Musculosketal" screen


  @HLI-239:4 @HLI-239 @Regression
  Scenario: User clicks on Previous button
    Given User has logged in HLI as UserType "onboardingUser"
    And User click on cancel icon of new bookmark
    And User navigates to "MUSCULOSKETAL" screen of Onboarding journey
    When User clicks on Previous button of "Musculosketal" screen
    Then User should see screen with header "OVERALL HEALTH"


  @HLI-239:5 @HLI-239 @Regression
  Scenario: User clicks on Next button
    Given User has logged in HLI as UserType "onboardingUser"
    And User click on cancel icon of new bookmark
    And User navigates to "MUSCULOSKETAL" screen of Onboarding journey
    When User clicks on Next button of "Musculosketal" screen
    Then User should see screen with header "NUTRITION"

  @HLI-239:6 @HLI-239 @Regression
  Scenario: User clicks on Save And Continue button
    Given User has logged in HLI as UserType "onboardingUser"
    And User click on cancel icon of new bookmark
    And User navigates to "MUSCULOSKETAL" screen of Onboarding journey
    When User clicks on Save & Continue button of "Musculosketal" screen
    Then User should be navigated to Health age page


  @HLI-239:7 @HLI-239 @OnDemand
  Scenario: Verify default answer for Questionnaire at Musculosketal screen
    Given User has logged in HLI as UserType "onboardingUser"
    And User click on cancel icon of new bookmark
    And User navigates to "MUSCULOSKETAL" screen of Onboarding journey
    Then User should see default answer in dropdown for question "MuscleBonePain" at "Musculosketal" screen
    And User should see default answer in dropdown for question "Medication" at "Musculosketal" screen
    And User should see default answer in toggle for question "Medication" at "Musculosketal" screen

  @HLI-239:8 @HLI-239 @OnDemand
  Scenario: Verification of mandatory fields at Musculosketal screen
    Given User has logged in HLI as UserType "onboardingUser"
    And User click on cancel icon of new bookmark
    And User navigates to "MUSCULOSKETAL" screen of Onboarding journey
    When User has not answered any question at "Musculosketal" screen
    When User clicks on Next button of "Musculosketal" screen
    Then User should see screen with header "NUTRITION"
