Feature: HLI_664_Extra_Onboarding_Screens_Save_And_Continue_Later
  As a HLI User, I would like to step out of the optional survey screens at any time so I can continue later


  @HLI-664:1 @HLI-664 @Regression @Smoke
  Scenario:  "Save and continue later" button on OVERALL HEALTH screen
    Given User has logged in HLI as UserType "onboardingUser"
    And User click on cancel icon of new bookmark
    And User navigates to "OVERALL HEALTH" screen of "Optional" Onboarding journey
    And User see "OptionalOverallHealth" Save & Continue button
    And User toggle Yes for question "routineScreening" on "OptionalOverallHealth" screen
    And User types value for field "NumberOfSickLeave" of "OptionalOverallHealth" screen
    And User selects a value from drop down for question "areaImpactedByHealth" at "OptionalOverallHealth" screen
    When User clicks on Save & Continue button of "OptionalOverallHealth" screen
    Then User should be navigated to Health age page
    When User navigates to "OVERALL HEALTH" screen of "Optional" Onboarding journey
    Then User verify typed value for field "NumberOfSickLeave" of "OptionalOverallHealth" screen
    And User verify selected value for field "areaImpactedByHealth" of "OptionalOverallHealth" screen
    And User see toggled answer as Yes for question "routineScreening" on "OptionalOverallHealth" screen


  @HLI-664:2 @HLI-664 @Regression
  Scenario: "Save and continue later" button on MUSCULOSKETAL screen
    Given User has logged in HLI as UserType "onboardingUser"
    And User click on cancel icon of new bookmark
    And User navigates to "MUSCULOSKETAL" screen of Onboarding journey
    And User see "Musculosketal" Save & Continue button
    When User clicks on Save & Continue button of "Musculosketal" screen
    Then User should be navigated to Health age page

  @HLI-664:3 @HLI-664 @Regression
  Scenario: "Save and continue later" button on NUTRITION screen
    Given User has logged in HLI as UserType "onboardingUser"
    And User click on cancel icon of new bookmark
    And User navigates to "NUTRITION" screen of "Optional" Onboarding journey
    And User see "OptionalNutrition" Save & Continue button
    When User clicks on Save & Continue button of "OptionalNutrition" screen
    Then User should be navigated to Health age page

  @HLI-664:4 @HLI-664 @Regression
  Scenario: "Save and continue later" button on SUBSTANCE & ACTIVITY LEVEL screen
    Given User has logged in HLI as UserType "onboardingUser"
    And User click on cancel icon of new bookmark
    And User navigates to "SUBSTANCE & ACTIVITY LEVEL" screen of Onboarding journey
    And User see "SubstanceActivityLevel" Save & Continue button
    When User clicks on Save & Continue button of "SubstanceActivityLevel" screen
    Then User should be navigated to Health age page

  @HLI-664:5 @HLI-664 @Regression
  Scenario: "Save and continue later" button on EMPLOYMENT DETAILS screen
    Given User has logged in HLI as UserType "onboardingUser"
    And User click on cancel icon of new bookmark
    And User navigates to "EMPLOYMENT DETAILS" screen of Onboarding journey
    And User see "EmploymentDetails" Save & Continue button
    When User clicks on Save & Continue button of "EmploymentDetails" screen
    Then User should be navigated to Health age page

  @HLI-664:6 @HLI-664 @Regression
  Scenario: "Save and continue later" button on WORK OUTCOMES screen
    Given User has logged in HLI as UserType "onboardingUser"
    And User click on cancel icon of new bookmark
    And User navigates to "WORK OUTCOMES" screen of Onboarding journey
    And User see "WorkOutcomes" Save & Continue button
    When User clicks on Save & Continue button of "WorkOutcomes" screen
    Then User should be navigated to Health age page


  @HLI-664:7 @HLI-664 @Regression
  Scenario: "Save and continue later" button on WORKS PRESSURES screen
    Given User has logged in HLI as UserType "onboardingUser"
    And User click on cancel icon of new bookmark
    And User navigates to "WORKS PRESSURES" screen of Onboarding journey
    And User see "WorkPressures" Save & Continue button
    When User clicks on Save & Continue button of "WorkPressures" screen
    Then User should be navigated to Health age page

  @HLI-664:8 @HLI-664 @Regression
  Scenario: "Save and continue later" button on WORK RELATIONS & ENGAGEMENTS screen
    Given User has logged in HLI as UserType "onboardingUser"
    And User click on cancel icon of new bookmark
    And User navigates to "WORK RELATIONS & ENGAGEMENTS" screen of Onboarding journey
    And User see "WorkRelationsEngagement" Save & Continue button
    When User clicks on Save & Continue button of "WorkRelationsEngagement" screen
    Then User should be navigated to Health age page

  @HLI-664:9 @HLI-664 @Regression
  Scenario: "Save and continue later" button on SUPPORT AT WORK screen
    Given User has logged in HLI as UserType "onboardingUser"
    And User click on cancel icon of new bookmark
    And User navigates to "SUPPORT AT WORK" screen of Onboarding journey
    And User see "SupportAtWork" Save & Continue button
    When User clicks on Save & Continue button of "SupportAtWork" screen
    Then User should be navigated to Health age page


  @HLI-664:10 @HLI-664 @Regression
  Scenario: "Save and continue later" button on FINANCIAL PRESSURES screen
    Given User has logged in HLI as UserType "onboardingUser"
    And User click on cancel icon of new bookmark
    And User navigates to "FINANCIAL PRESSURES" screen of Onboarding journey
    And User see "FinancialPressures" Save & Continue button
    When User clicks on Save & Continue button of "FinancialPressures" screen
    Then User should be navigated to Health age page





