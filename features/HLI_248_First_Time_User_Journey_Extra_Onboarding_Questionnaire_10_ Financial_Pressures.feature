Feature: HLI_248_ First_Time_User_Journey_Extra_Onboarding_Questionnaire_10_ Financial_Pressures
  As a User completing Healthy Lives survey, I want to provide details about any other financial pressures
  experienced so that it can be part of assessing other influence to my health


  @HLI-248:1 @HLI-248 @Regression @Smoke
  Scenario: Financial Pressures Screen Design
    Given User has logged in HLI as UserType "basicUser"
    And User click on cancel icon of new bookmark
    And User navigates to "FINANCIAL PRESSURES" screen of Onboarding journey
    Then User see "FinancialPressures" header as expected
    And User see "FinancialPressures" description as expected
    And User see "FinancialPressures" screen number as expected
    And User see "FinancialPressures" Next button
    And User see "FinancialPressures" Previous button
    And User see "FinancialPressures" Connect an App/Tracker button
    And User see "FinancialPressures" Save & Continue button

  @HLI-248:2 @HLI-248 @Regression @Smoke
  Scenario: Financial Pressures Screen Questionnaire
    Given User has logged in HLI as UserType "basicUser"
    And User click on cancel icon of new bookmark
    When User opens "FinancialPressure" questionnaires of "Optional" on-boarding journey in edit mode
    Then User should see question related to "financialPressureImpact" at "FinancialPressures" screen
    And User should see question related to "financialPressureConcern" at "FinancialPressures" screen
    And User should see question related to "householdIncome" at "FinancialPressures" screen
    And User should see a toggle button for question "financialPressureImpact" at "FinancialPressures" screen
    And User should see a toggle button for question "financialPressureConcern" at "FinancialPressures" screen
    And User should see a drop down for question "householdIncome" at "FinancialPressures" screen
    And User see available options in dropdown for question "householdIncome" of "FinancialPressures"

  @HLI-248:3 @HLI-248 @Regression @Smoke
  Scenario: User answers all Questionnaire at Financial Pressures screen
    Given User has logged in HLI as UserType "basicUser"
    And User click on cancel icon of new bookmark
    When User opens "FinancialPressure" questionnaires of "Optional" on-boarding journey in edit mode
    And User toggle Yes for question "financialPressureImpact" on "FinancialPressures" screen
    And User toggle Yes for question "financialPressureConcern" on "FinancialPressures" screen
    And User selects a value from drop down for question "householdIncome" at "FinancialPressures" screen
    And User clicks on Save button of "FinancialPressures" screen
    When User opens "FinancialPressure" questionnaires of "Optional" on-boarding journey in edit mode
    Then User see toggled answer as Yes for question "financialPressureImpact" on "FinancialPressures" screen
    Then User see toggled answer as Yes for question "financialPressureConcern" on "FinancialPressures" screen
    And User verify selected value for field "householdIncome" of "FinancialPressures" screen

  @HLI-248:4 @HLI-248 @Regression
  Scenario: User clicks on Previous button
    Given User has logged in HLI as UserType "basicUser"
    And User click on cancel icon of new bookmark
    And User navigates to "FINANCIAL PRESSURES" screen of Onboarding journey
    When User clicks on Previous button of "FinancialPressures" screen
    Then User should see screen with header "SUPPORT AT WORK"


  @HLI-248:5 @HLI-248 @Regression
  Scenario: User clicks on Next button
    Given User has logged in HLI as UserType "basicUser"
    And User click on cancel icon of new bookmark
    And User navigates to "FINANCIAL PRESSURES" screen of Onboarding journey
    When User clicks on Next button of "FinancialPressures" screen
    Then User should see screen with header "CONGRATULATIONS"

  @HLI-248:6 @HLI-248 @Regression
  Scenario: User clicks on Save And Continue button
    Given User has logged in HLI as UserType "basicUser"
    And User click on cancel icon of new bookmark
    And User navigates to "FINANCIAL PRESSURES" screen of Onboarding journey
    When User clicks on Save & Continue button of "FinancialPressures" screen
    Then User should be navigated to Health age page


  @HLI-248:7 @HLI-248 @Regression
  Scenario: Verify default answer for Questionnaire at Financial Pressure screen
    Given User has logged in HLI as UserType "basicUser"
    And User click on cancel icon of new bookmark
    When User opens "FinancialPressure" questionnaires of "Optional" on-boarding journey in edit mode
    Then User should see default answer in toggle for question "financialPressureImpact" at "FinancialPressures" screen
    And User should see default answer in toggle for question "financialPressureConcern" at "FinancialPressures" screen
    And User should see default answer in dropdown for question "householdIncome" at "FinancialPressures" screen


  @HLI-248:8 @HLI-248 @Regression
  Scenario: Mandatory question validation at Financial Pressure screen
    Given User has logged in HLI as UserType "basicUser"
    And User click on cancel icon of new bookmark
    When User opens "FinancialPressure" questionnaires of "Optional" on-boarding journey in edit mode
    And User clicks on Save button of "FinancialPressures" screen
    Then User should be navigated to Health age page

