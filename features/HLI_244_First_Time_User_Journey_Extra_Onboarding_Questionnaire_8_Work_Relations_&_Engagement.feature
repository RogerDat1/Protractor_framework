Feature: HLI_244_First_Time_User_Journey_Extra_Onboarding_Questionnaire_8_Work_Relations_&_Engagement
  As a User completing Healthy Lives survey, I want to provide details about work relations so that it can be part of assessing my workplace health influence


  @HLI-244:1 @Regression @Smoke
  Scenario: WORK RELATIONS & ENGAGEMENT Screen Design
    Given User has logged in HLI as UserType "basicUser"
    And User click on cancel icon of new bookmark
    And User navigates to "WORK RELATIONS & ENGAGEMENTS" screen of Onboarding journey
    Then User see "WorkRelationsEngagement" header as expected
    And User see "WorkRelationsEngagement" description as expected
    And User see "WorkRelationsEngagement" screen number as expected
    And User see "WorkRelationsEngagement" Next button
    And User see "WorkRelationsEngagement" Previous button
    And User see "WorkRelationsEngagement" Connect an App/Tracker button
    And User see "WorkRelationsEngagement" Save & Continue button

  @HLI-244:2 @HLI-244 @Regression @Smoke
  Scenario: Work Pressures Screen Questionnaire
    Given User has logged in HLI as UserType "basicUser"
    And User click on cancel icon of new bookmark
    When User opens "WorkRelationsEngagement" questionnaires of "Optional" on-boarding journey in edit mode
    Then User should see question related to "PersonalHarassment" at "WorkRelationsEngagement" screen
    And User should see question related to "FrictionWithColleagues" at "WorkRelationsEngagement" screen
    And User should see question related to "DiversityInclusion" at "WorkRelationsEngagement" screen
    And User should see question related to "QuestionManager" at "WorkRelationsEngagement" screen
    And User should see question related to "EngagesStaff" at "WorkRelationsEngagement" screen
    And User should see a drop down for question "PersonalHarassment" at "WorkRelationsEngagement" screen
    And User should see a drop down for question "FrictionWithColleagues" at "WorkRelationsEngagement" screen
    And User should see a drop down for question "DiversityInclusion" at "WorkRelationsEngagement" screen
    And User should see a toggle button for question "QuestionManager" at "WorkRelationsEngagement" screen
    And User should see a drop down for question "EngagesStaff" at "WorkRelationsEngagement" screen
    And User see available options in dropdown for question "PersonalHarassment" of "WorkRelationsEngagement"
    And User see available options in dropdown for question "FrictionWithColleagues" of "WorkRelationsEngagement"
    And User see available options in dropdown for question "DiversityInclusion" of "WorkRelationsEngagement"
    And User see available options in dropdown for question "EngagesStaff" of "WorkRelationsEngagement"


  @HLI-244:3 @HLI-244 @Regression @Smoke
  Scenario: User answers all Questionnaire at Financial Pressures screen
    Given User has logged in HLI as UserType "basicUser"
    And User click on cancel icon of new bookmark
    When User opens "WorkRelationsEngagement" questionnaires of "Optional" on-boarding journey in edit mode
    And User selects a value from drop down for question "PersonalHarassment" at "WorkRelationsEngagement" screen
    And User selects a value from drop down for question "FrictionWithColleagues" at "WorkRelationsEngagement" screen
    And User selects a value from drop down for question "DiversityInclusion" at "WorkRelationsEngagement" screen
    And User toggle Yes for question "QuestionManager" on "WorkRelationsEngagement" screen
    And User selects a value from drop down for question "EngagesStaff" at "WorkRelationsEngagement" screen
    And User clicks on Save button of "WorkRelationsEngagement" screen
    When User opens "WorkRelationsEngagement" questionnaires of "Optional" on-boarding journey in edit mode
    Then User verify selected value for field "PersonalHarassment" of "WorkRelationsEngagement" screen
    And User verify selected value for field "FrictionWithColleagues" of "WorkRelationsEngagement" screen
    And User verify selected value for field "DiversityInclusion" of "WorkRelationsEngagement" screen
    And User see toggled answer as Yes for question "QuestionManager" on "WorkRelationsEngagement" screen
    And User verify selected value for field "EngagesStaff" of "WorkRelationsEngagement" screen

  @HLI-244:4 @HLI-244 @Regression
  Scenario: User clicks on Previous button
    Given User has logged in HLI as UserType "basicUser"
    And User click on cancel icon of new bookmark
    And User navigates to "WORK RELATIONS & ENGAGEMENTS" screen of Onboarding journey
    When User clicks on Previous button of "WorkRelationsEngagement" screen
    Then User should see screen with header "WORKS PRESSURES"


  @HLI-244:5 @HLI-244 @Regression
  Scenario: User clicks on Next button
    Given User has logged in HLI as UserType "basicUser"
    And User click on cancel icon of new bookmark
    And User navigates to "WORK RELATIONS & ENGAGEMENTS" screen of Onboarding journey
    When User clicks on Next button of "WorkRelationsEngagement" screen
    Then User should see screen with header "SUPPORT AT WORK"

  @HLI-244:6 @HLI-244 @Regression
  Scenario: User clicks on Save And Continue button
    Given User has logged in HLI as UserType "basicUser"
    And User click on cancel icon of new bookmark
    And User navigates to "WORK RELATIONS & ENGAGEMENTS" screen of Onboarding journey
    When User clicks on Save & Continue button of "WorkRelationsEngagement" screen
    Then User should be navigated to Health age page


  @HLI-244:7 @HLI-244 @Regression
  Scenario: Verify default answer for Questionnaire at Financial Pressure screen
    Given User has logged in HLI as UserType "userWithSkippedOptionalOnboarding"
    And User click on cancel icon of new bookmark
    When User opens "WorkRelationsEngagement" questionnaires of "Optional" on-boarding journey in edit mode
    Then User should see default answer in dropdown for question "PersonalHarassment" at "WorkRelationsEngagement" screen
    And User should see default answer in dropdown for question "FrictionWithColleagues" at "WorkRelationsEngagement" screen
    And User should see default answer in dropdown for question "DiversityInclusion" at "WorkRelationsEngagement" screen
    And User should see default answer in toggle for question "QuestionManager" at "WorkRelationsEngagement" screen
    And User should see default answer in dropdown for question "EngagesStaff" at "WorkRelationsEngagement" screen


  @HLI-244:8 @HLI-244 @Regression
  Scenario: Mandatory question validation at Financial Pressure screen
    Given User has logged in HLI as UserType "userWithSkippedOptionalOnboarding"
    And User click on cancel icon of new bookmark
    When User opens "WorkRelationsEngagement" questionnaires of "Optional" on-boarding journey in edit mode
    And User clicks on Save button of "WorkRelationsEngagement" screen
    Then User should be navigated to Health age page

