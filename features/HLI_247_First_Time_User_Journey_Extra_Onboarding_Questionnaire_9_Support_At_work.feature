Feature: HLI_247_First_Time_User_Journey_Extra_Onboarding_Questionnaire_9_Support_At_work
  As a User completing Healthy Lives survey, I want to provide details about a supportive work environment so that it can be part of assessing my workplace health influence


  @HLI-247:1 @HLI-247 @Regression @Smoke
  Scenario: Work Pressures Screen Design
    Given User has logged in HLI as UserType "basicUser"
    And User click on cancel icon of new bookmark
    And User navigates to "SUPPORT AT WORK" screen of Onboarding journey
    Then User see "SupportAtWork" header as expected
    And User see "SupportAtWork" description as expected
    And User see "SupportAtWork" screen number as expected
    And User see "SupportAtWork" Next button
    And User see "SupportAtWork" Previous button
    And User see "SupportAtWork" Connect an App/Tracker button
    And User see "SupportAtWork" Save & Continue button

  @HLI-247:2 @HLI-247 @Regression @Smoke
  Scenario: Work Pressures Screen Questionnaire
    Given User has logged in HLI as UserType "basicUser"
    And User click on cancel icon of new bookmark
    When User opens "SupportAtWork" questionnaires of "Optional" on-boarding journey in edit mode
    Then User should see question related to "TalkToManager" at "SupportAtWork" screen
    And User should see question related to "RelyOnColleagues" at "SupportAtWork" screen
    And User should see question related to "GoodRelationshipManager" at "SupportAtWork" screen
    And User should see question related to "RelyOnManager" at "SupportAtWork" screen
    And User should see a toggle button for question "TalkToManager" at "SupportAtWork" screen
    And User should see a toggle button for question "RelyOnColleagues" at "SupportAtWork" screen
    And User should see a toggle button for question "GoodRelationshipManager" at "SupportAtWork" screen
    And User should see a toggle button for question "RelyOnManager" at "SupportAtWork" screen

  @HLI-247:3 @HLI-247 @Regression @Smoke
  Scenario: User answers all Questionnaire at Financial Pressures screen
    Given User has logged in HLI as UserType "basicUser"
    And User click on cancel icon of new bookmark
    When User opens "SupportAtWork" questionnaires of "Optional" on-boarding journey in edit mode
    And User toggle Yes for question "TalkToManager" on "SupportAtWork" screen
    And User toggle Yes for question "RelyOnColleagues" on "SupportAtWork" screen
    And User toggle Yes for question "GoodRelationshipManager" on "SupportAtWork" screen
    And User toggle Yes for question "RelyOnManager" on "SupportAtWork" screen
    And User clicks on Save button of "SupportAtWork" screen
    When User opens "SupportAtWork" questionnaires of "Optional" on-boarding journey in edit mode
    Then User see toggled answer as Yes for question "TalkToManager" on "SupportAtWork" screen
    And User see toggled answer as Yes for question "RelyOnColleagues" on "SupportAtWork" screen
    And User see toggled answer as Yes for question "GoodRelationshipManager" on "SupportAtWork" screen
    And User see toggled answer as Yes for question "RelyOnManager" on "SupportAtWork" screen

  @HLI-247:4 @HLI-247 @Regression
  Scenario: User clicks on Previous button
    Given User has logged in HLI as UserType "basicUser"
    And User click on cancel icon of new bookmark
    And User navigates to "SUPPORT AT WORK" screen of Onboarding journey
    When User clicks on Previous button of "SupportAtWork" screen
    Then User should see screen with header "WORK RELATIONS & ENGAGEMENTS"


  @HLI-247:5 @HLI-247 @Regression
  Scenario: User clicks on Next button
    Given User has logged in HLI as UserType "basicUser"
    And User click on cancel icon of new bookmark
    And User navigates to "SUPPORT AT WORK" screen of Onboarding journey
    When User clicks on Next button of "SupportAtWork" screen
    Then User should see screen with header "FINANCIAL PRESSURES"

  @HLI-247:6 @HLI-247 @Regression
  Scenario: User clicks on Save And Continue button
    Given User has logged in HLI as UserType "basicUser"
    And User click on cancel icon of new bookmark
    And User navigates to "SUPPORT AT WORK" screen of Onboarding journey
    When User clicks on Save & Continue button of "SupportAtWork" screen
    Then User should be navigated to Health age page


  @HLI-247:7 @HLI-247 @Regression
  Scenario: Verify default answer for Questionnaire at Financial Pressure screen
    Given User has logged in HLI as UserType "userWithSkippedOptionalOnboarding"
    And User click on cancel icon of new bookmark
    When User opens "SupportAtWork" questionnaires of "Optional" on-boarding journey in edit mode
    Then User should see default answer in toggle for question "TalkToManager" at "SupportAtWork" screen
    And User should see default answer in toggle for question "RelyOnColleagues" at "SupportAtWork" screen
    And User should see default answer in toggle for question "GoodRelationshipManager" at "SupportAtWork" screen
    And User should see default answer in toggle for question "RelyOnManager" at "SupportAtWork" screen


  @HLI-247:8 @HLI-247 @Regression
  Scenario: Mandatory question validation at Financial Pressure screen
    Given User has logged in HLI as UserType "userWithSkippedOptionalOnboarding"
    And User click on cancel icon of new bookmark
    When User opens "SupportAtWork" questionnaires of "Optional" on-boarding journey in edit mode
    And User clicks on Save button of "SupportAtWork" screen
    Then User should be navigated to Health age page

