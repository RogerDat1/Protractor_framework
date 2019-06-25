Feature: HLI_141_Mandatory_Onboarding_Questionnaire_4_Substance_Usage
  As a User completing Healthy Lives survey, I want to provide my activity/ exercise details so that it can be part of my overall Health score


  @HLI-141:1 @HLI-141 @Regression @Smoke
  Scenario: Substance Usage Screen Design
    Given User has logged in HLI as UserType "onboardingUser"
    And User navigates to "SUBSTANCE USAGE" screen of Onboarding journey
    Then User see "SubstanceUsage" header as expected
    And User see "SubstanceUsage" description as expected
    And User see "SubstanceUsage" screen number as expected
    And User see "SubstanceUsage" Next button
    And User see "SubstanceUsage" Previous button
    And User see "SubstanceUsage" Connect an App/Tracker button
    And User see "SubstanceUsage" close button

  @HLI-141:2 @HLI-141 @Regression
  Scenario: Substance Usage default Questionnaire Design
    Given User has logged in HLI as UserType "onboardingUser"
    And User navigates to "SUBSTANCE USAGE" screen of Onboarding journey
    Then User should see question related to "DoYouSmoke" at "SubstanceUsage" screen
    #And User should see question related to "DoYouSmokeTobaccoBefore" at "SubstanceUsage" screen
    And User should see question related to "DoYouDrink" at "SubstanceUsage" screen
    And User should see question related to "UnitsOfDrink" at "SubstanceUsage" screen
    And User should see a checkbox for question "Never" at "SubstanceUsage" screen
    And User should see a checkbox for question "Occasionally" at "SubstanceUsage" screen
    And User should see a checkbox for question "1to2TimesPerWeek" at "SubstanceUsage" screen
    And User should see a checkbox for question "3to4TimesPerWeek" at "SubstanceUsage" screen
    And User should see a checkbox for question "5PlusTimesPerWeek" at "SubstanceUsage" screen
    And User should see a checkbox for question "1to2Units" at "SubstanceUsage" screen
    And User should see a checkbox for question "2to3Units" at "SubstanceUsage" screen
    And User should see a checkbox for question "3to5Units" at "SubstanceUsage" screen
    And User should see a checkbox for question "5PlusUnits" at "SubstanceUsage" screen
    And User should see a toggle button for question "DoYouSmoke" at "SubstanceUsage" screen
    #And User should see a toggle button for question "DoYouSmokeTobaccoBefore" at "SubstanceUsage" screen


  @HLI-141:3 @HLI-141 @Regression
  Scenario: Dependent Question Based On Chosen Answer By User
    Given User has logged in HLI as UserType "onboardingUser"
    And User navigates to "SUBSTANCE USAGE" screen of Onboarding journey
    When User toggle Yes for question "DoYouSmoke" on "SubstanceUsage" screen
    Then User should see a checkbox for question "Cigarette" at "SubstanceUsage" screen
    And User should see a checkbox for question "Cigar" at "SubstanceUsage" screen
    And User should see a checkbox for question "ECigarette" at "SubstanceUsage" screen
    When User clicks on checkbox for question "Cigarette" of "SubstanceUsage" screen
    Then User should see question related to "YearsOfSmoke" at "SubstanceUsage" screen
    And User should see question related to "NoOfPacketsOfCigarette" at "SubstanceUsage" screen
    When User clicks on checkbox for question "Cigar" of "SubstanceUsage" screen
    Then User should not see question related to "YearsOfSmoke" at "SubstanceUsage" screen
    And User should not see question related to "NoOfPacketsOfCigarette" at "SubstanceUsage" screen
    When User clicks on checkbox for question "ECigarette" of "SubstanceUsage" screen
    Then User should see question related to "YearsOfSmoke" at "SubstanceUsage" screen
    And User should not see question related to "NoOfPacketsOfCigarette" at "SubstanceUsage" screen
    When User toggle No for question "DoYouSmoke" on "SubstanceUsage" screen
    Then User should not see question related to "YearsOfSmoke" at "SubstanceUsage" screen
    And User should not see question related to "NoOfPacketsOfCigarette" at "SubstanceUsage" screen
    And User should see question related to "DoYouSmokeTobaccoBefore" at "SubstanceUsage" screen
    And User should see a toggle button for question "DoYouSmokeTobaccoBefore" at "SubstanceUsage" screen
    When User toggle Yes for question "DoYouSmokeTobaccoBefore" on "SubstanceUsage" screen
    Then User should see question related to "YearsOfSmoke" at "SubstanceUsage" screen
    And User should see question related to "NoOfPacketsOfCigarette" at "SubstanceUsage" screen

  @HLI-141:4 @HLI-141 @Regression
  Scenario: User answers all Questionnaire at Substance Usage screen
    Given User has logged in HLI as UserType "onboardingUser"
    And User navigates to "SUBSTANCE USAGE" screen of Onboarding journey
    And User toggle Yes for question "DoYouSmoke" on "SubstanceUsage" screen
    And User clicks on checkbox for question "Cigarette" of "SubstanceUsage" screen
    And User types value for field "YearsOfSmoke" of "SubstanceUsage" screen
    And User types value for field "NoOfPacketsOfCigarette" of "SubstanceUsage" screen
    And User clicks on checkbox for question "1to2TimesPerWeek" of "SubstanceUsage" screen
    And User clicks on checkbox for question "2to3Units" of "SubstanceUsage" screen
    When User clicks on Next button of "SubstanceUsage" screen
    And User clicks on Previous button of "SubstanceUsage" screen
    Then User see toggled answer for question "DoYouSmoke" on "SubstanceUsage" screen
    And User verify checked checkbox for question "Cigarette" of "SubstanceUsage" screen
    And User verify typed value for field "YearsOfSmoke" of "SubstanceUsage" screen
    And User verify typed value for field "NoOfPacketsOfCigarette" of "SubstanceUsage" screen
    And User verify checked checkbox for question "1to2TimesPerWeek" of "SubstanceUsage" screen
    And User verify checked checkbox for question "2to3Units" of "SubstanceUsage" screen

  @HLI-141:5 @HLI-141 @Regression
  Scenario: User answers all Questionnaire at Substance Usage screen
    Given User has logged in HLI as UserType "onboardingUser"
    And User navigates to "SUBSTANCE USAGE" screen of Onboarding journey
    And User toggle Yes for question "DoYouSmoke" on "SubstanceUsage" screen
    And User clicks on checkbox for question "Cigar" of "SubstanceUsage" screen
    And User clicks on checkbox for question "5PlusTimesPerWeek" of "SubstanceUsage" screen
    And User clicks on checkbox for question "3to5Units" of "SubstanceUsage" screen
    When User clicks on Next button of "SubstanceUsage" screen
    And User clicks on Previous button of "SubstanceUsage" screen
    Then User see toggled answer for question "DoYouSmoke" on "SubstanceUsage" screen
    And User verify checked checkbox for question "Cigar" of "SubstanceUsage" screen
    And User verify checked checkbox for question "1to2TimesPerWeek" of "SubstanceUsage" screen
    And User verify checked checkbox for question "2to3Units" of "SubstanceUsage" screen

  @HLI-141:6 @HLI-141 @Regression
  Scenario: User answers all Questionnaire at Substance Usage screen
    Given User has logged in HLI as UserType "onboardingUser"
    And User navigates to "SUBSTANCE USAGE" screen of Onboarding journey
    And User toggle Yes for question "DoYouSmoke" on "SubstanceUsage" screen
    And User clicks on checkbox for question "ECigarette" of "SubstanceUsage" screen
    And User types value for field "YearsOfSmoke" of "SubstanceUsage" screen
    And User clicks on checkbox for question "1to2TimesPerWeek" of "SubstanceUsage" screen
    And User clicks on checkbox for question "2to3Units" of "SubstanceUsage" screen
    When User clicks on Next button of "SubstanceUsage" screen
    And User clicks on Previous button of "SubstanceUsage" screen
    Then User see toggled answer for question "DoYouSmoke" on "SubstanceUsage" screen
    And User verify checked checkbox for question "ECigarette" of "SubstanceUsage" screen
    And User verify typed value for field "YearsOfSmoke" of "SubstanceUsage" screen
    And User verify checked checkbox for question "1to2TimesPerWeek" of "SubstanceUsage" screen
    And User verify checked checkbox for question "2to3Units" of "SubstanceUsage" screen


  @HLI-141:7 @HLI-141 @Regression
  Scenario: User answers all Questionnaire at Substance Usage screen
    Given User has logged in HLI as UserType "onboardingUser"
    And User navigates to "SUBSTANCE USAGE" screen of Onboarding journey
    And User toggle No for question "DoYouSmoke" on "SubstanceUsage" screen
    And User toggle Yes for question "DoYouSmokeTobaccoBefore" on "SubstanceUsage" screen
    And User types value for field "YearsOfSmoke" of "SubstanceUsage" screen
    And User types value for field "NoOfPacketsOfCigarette" of "SubstanceUsage" screen
    And User clicks on checkbox for question "1to2TimesPerWeek" of "SubstanceUsage" screen
    And User clicks on checkbox for question "2to3Units" of "SubstanceUsage" screen
    When User clicks on Next button of "SubstanceUsage" screen
    And User clicks on Previous button of "SubstanceUsage" screen
    Then User see toggled answer for question "DoYouSmoke" on "SubstanceUsage" screen
    And User see toggled answer for question "DoYouSmokeTobaccoBefore" on "SubstanceUsage" screen
    And User verify typed value for field "YearsOfSmoke" of "SubstanceUsage" screen
    And User verify typed value for field "NoOfPacketsOfCigarette" of "SubstanceUsage" screen
    And User verify checked checkbox for question "1to2TimesPerWeek" of "SubstanceUsage" screen
    And User verify checked checkbox for question "2to3Units" of "SubstanceUsage" screen


  @HLI-141:8 @HLI-141 @Regression
  Scenario: User clicks on Previous button
    Given User has logged in HLI as UserType "onboardingUser"
    And User navigates to "SUBSTANCE USAGE" screen of Onboarding journey
    When User clicks on Previous button of "SubstanceUsage" screen
    Then User should see screen with header "ACTIVITY LEVEL"


  @HLI-141:9 @HLI-141 @Regression
  Scenario: User clicks on Next button
    Given User has logged in HLI as UserType "onboardingUser"
    And User navigates to "SUBSTANCE USAGE" screen of Onboarding journey
    When User clicks on Next button of "SubstanceUsage" screen
    Then User should see screen with header "HEART AND LUNG HEALTH"

  @HLI-141:10 @HLI-141 @Regression
  Scenario: User clicks on Close button
    Given User has logged in HLI as UserType "onboardingUser"
    And User navigates to "SUBSTANCE USAGE" screen of Onboarding journey
    When User clicks on Close button of "SubstanceUsage" screen
    Then User should be navigated to Health age page


  @HLI-141:11 @HLI-141 @Regression
  Scenario: Conditional question UnitsOfDrink
    Given User has logged in HLI as UserType "onboardingUser"
    And User navigates to "SUBSTANCE USAGE" screen of Onboarding journey
    When User clicks on checkbox for question "Never" of "SubstanceUsage" screen
    Then User should not see question related to "UnitsOfDrink" at "SubstanceUsage" screen


  @HLI-141:12 @HLI-141 @Regression
  Scenario: Conditional question UnitsOfDrink
    Given User has logged in HLI as UserType "onboardingUser"
    And User navigates to "SUBSTANCE USAGE" screen of Onboarding journey
    When User clicks on checkbox for question "Occasionally" of "SubstanceUsage" screen
    Then User should not see question related to "UnitsOfDrink" at "SubstanceUsage" screen
    And User clicks on checkbox for question "Never" of "SubstanceUsage" screen
    When User clicks on checkbox for question "3to4TimesPerWeek" of "SubstanceUsage" screen
    Then User should not see question related to "UnitsOfDrink" at "SubstanceUsage" screen
    And User clicks on checkbox for question "Never" of "SubstanceUsage" screen
    When User clicks on checkbox for question "1to2TimesPerWeek" of "SubstanceUsage" screen
    Then User should not see question related to "UnitsOfDrink" at "SubstanceUsage" screen
    And User clicks on checkbox for question "Never" of "SubstanceUsage" screen
    When User clicks on checkbox for question "5PlusTimesPerWeek" of "SubstanceUsage" screen
    Then User should not see question related to "UnitsOfDrink" at "SubstanceUsage" screen
    And User clicks on checkbox for question "Never" of "SubstanceUsage" screen


  @HLI-141:13 @HLI-141
  Scenario: User clicks on Next button without answering all mandatory questions
    Then All mandatory field should be highlighted in red