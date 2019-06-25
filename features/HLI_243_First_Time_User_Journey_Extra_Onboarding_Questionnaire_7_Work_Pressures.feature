Feature: HLI_243_First_Time_User_Journey_Extra_Onboarding_Questionnaire_7_Work_Pressures
  As a User completing Healthy Lives survey, I want to provide details about my work pressures
  so that it can be part of assessing my workplace health influence


  @HLI-243:1 @HLI-243 @Regression @Smoke
  Scenario: Work Pressures Screen Design
    Given User has logged in HLI as UserType "basicUser"
    And User click on cancel icon of new bookmark
    And User navigates to "WORKS PRESSURES" screen of Onboarding journey
    Then User see "WorkPressures" header as expected
    And User see "WorkPressures" description as expected
    And User see "WorkPressures" screen number as expected
    And User see "WorkPressures" Next button
    And User see "WorkPressures" Previous button
    And User see "WorkPressures" Connect an App/Tracker button
    And User see "WorkPressures" Save & Continue button

  @HLI-243:2 @HLI-243 @Regression
  Scenario: Work Pressures Screen Questionnaire
    Given User has logged in HLI as UserType "basicUser"
    And User click on cancel icon of new bookmark
    When User opens "WorkPressures" questionnaires of "Optional" on-boarding journey in edit mode
    Then User should see question related to "LongHours" at "WorkPressures" screen
    And User should see a drop down for question "LongHours" at "WorkPressures" screen
    And User should see available options in drop down for question "LongHours" at "WorkPressures" screen
    And User should see question related to "NeglectTasks" at "WorkPressures" screen
    And User should see a drop down for question "NeglectTasks" at "WorkPressures" screen
    And User should see available options in drop down for question "NeglectTasks" at "WorkPressures" screen
    And User should see question related to "DifferentDemand" at "WorkPressures" screen
    And User should see a drop down for question "DifferentDemand" at "WorkPressures" screen
    And User should see available options in drop down for question "DifferentDemand" at "WorkPressures" screen
    And User should see question related to "SufficientBreaks" at "WorkPressures" screen
    And User should see a drop down for question "SufficientBreaks" at "WorkPressures" screen
    And User should see available options in drop down for question "SufficientBreaks" at "WorkPressures" screen
    And User should see question related to "TightDeadlines" at "WorkPressures" screen
    And User should see a drop down for question "TightDeadlines" at "WorkPressures" screen
    And User should see available options in drop down for question "TightDeadlines" at "WorkPressures" screen


  @HLI-243:3 @HLI-243 @Regression
  Scenario: Work Pressures Screen Questionnaire Answer
    Given User has logged in HLI as UserType "basicUser"
    And User click on cancel icon of new bookmark
    When User opens "WorkPressures" questionnaires of "Optional" on-boarding journey in edit mode
    Then User selects a value from drop down for question "LongHours" at "WorkPressures" screen
    And User selects a value from drop down for question "NeglectTasks" at "WorkPressures" screen
    And User selects a value from drop down for question "DifferentDemand" at "WorkPressures" screen
    And User selects a value from drop down for question "SufficientBreaks" at "WorkPressures" screen
    And User selects a value from drop down for question "TightDeadlines" at "WorkPressures" screen
    And User clicks on Save button of "WorkPressures" screen
    When User opens "WorkPressures" questionnaires of "Optional" on-boarding journey in edit mode
    Then User verify selected value for field "LongHours" of "WorkPressures" screen
    And User verify selected value for field "NeglectTasks" of "WorkPressures" screen
    And User verify selected value for field "DifferentDemand" of "WorkPressures" screen
    And User verify selected value for field "SufficientBreaks" of "WorkPressures" screen
    And User verify selected value for field "TightDeadlines" of "WorkPressures" screen


  @HLI-243:4 @HLI-243 @Regression
  Scenario: User clicks on Previous button at Work Pressures screen
    Given User has logged in HLI as UserType "basicUser"
    And User click on cancel icon of new bookmark
    And User navigates to "WORKS PRESSURES" screen of Onboarding journey
    When User clicks on Previous button of "WorkPressures" screen
    Then User should see screen with header "WORK OUTCOMES"

  @HLI-243:5 @HLI-243 @Regression
  Scenario: User clicks on NEXT button at Work Pressures screen
    Given User has logged in HLI as UserType "basicUser"
    And User click on cancel icon of new bookmark
    And User navigates to "WORKS PRESSURES" screen of Onboarding journey
    When User clicks on Next button of "WorkPressures" screen
    Then User should see screen with header "WORK RELATIONS & ENGAGEMENTS"

  @HLI-243:6 @HLI-243 @Regression
  Scenario: User clicks on Save And Continue button at Work Pressures screen
    Given User has logged in HLI as UserType "basicUser"
    And User click on cancel icon of new bookmark
    And User navigates to "WORKS PRESSURES" screen of Onboarding journey
    When User clicks on Save & Continue button of "WorkPressures" screen
    Then User should be navigated to Health age page

  @HLI-243:7 @HLI-243 @Regression
  Scenario: Verify default answer for Questionnaire at Work Pressures screen
    Given User has logged in HLI as UserType "userWithSkippedOptionalOnboarding"
    And User click on cancel icon of new bookmark
    When User opens "WorkPressures" questionnaires of "Optional" on-boarding journey in edit mode
    Then User should see default answer in dropdown for question "LongHours" at "WorkPressures" screen
    And User should see default answer in dropdown for question "NeglectTasks" at "WorkPressures" screen
    And User should see default answer in dropdown for question "DifferentDemand" at "WorkPressures" screen
    And User should see default answer in dropdown for question "SufficientBreaks" at "WorkPressures" screen
    And User should see default answer in dropdown for question "TightDeadlines" at "WorkPressures" screen


  @HLI-243:8 @HLI-243 @Regression
  Scenario: Verification of mandatory fields on Work Pressures screen
    Given User has logged in HLI as UserType "userWithSkippedOptionalOnboarding"
    And User click on cancel icon of new bookmark
    And User navigates to "WORKS PRESSURES" screen of Onboarding journey
    When User clicks on Next button of "WorkPressures" screen
    Then User should see screen with header "WORK RELATIONS & ENGAGEMENTS"










