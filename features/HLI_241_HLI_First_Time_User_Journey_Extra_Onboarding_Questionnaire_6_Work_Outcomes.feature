Feature: HLI_241_HLI_First_Time_User_Journey_Extra_Onboarding_Questionnaire_6_Work_Outcomes
  As a User completing Healthy Lives survey, I want to provide details about my workplace environment
  so that it can be part of assessing my workplace health influence


  @HLI-241:1 @HLI-241 @Regression @Smoke
  Scenario: Work Outcomes Screen Design
    Given User has logged in HLI as UserType "basicUser"
    And User click on cancel icon of new bookmark
    And User navigates to "WORK OUTCOMES" screen of Onboarding journey
    Then User see "WorkOutcomes" header as expected
    And User see "WorkOutcomes" description as expected
    And User see "WorkOutcomes" screen number as expected
    And User see "WorkOutcomes" Next button
    And User see "WorkOutcomes" Previous button
    And User see "WorkOutcomes" Connect an App/Tracker button
    And User see "WorkOutcomes" Save & Continue button


  @HLI-241:2 @HLI-241 @Regression
  Scenario: Work Outcomes Screen Questionnaire
    Given User has logged in HLI as UserType "basicUser"
    And User click on cancel icon of new bookmark
    When User opens "WorkOutcomes" questionnaires of "Optional" on-boarding journey in edit mode
    Then User should see question related to "HelpFromColleaguesWhenStuck" at "WorkOutcomes" screen
    And User should see a toggle button for question "HelpFromColleaguesWhenStuck" at "WorkOutcomes" screen
    And User should see question related to "ExpectedFromWork" at "WorkOutcomes" screen
    And User should see a toggle button for question "ExpectedFromWork" at "WorkOutcomes" screen
    And User should see question related to "SupportiveFeedbackOnWorkDone" at "WorkOutcomes" screen
    And User should see a toggle button for question "SupportiveFeedbackOnWorkDone" at "WorkOutcomes" screen
    And User should see question related to "HelpFromColleagues" at "WorkOutcomes" screen
    And User should see a toggle button for question "HelpFromColleagues" at "WorkOutcomes" screen
    And User should see question related to "KnowHowToGetWorkDone" at "WorkOutcomes" screen
    And User should see a toggle button for question "KnowHowToGetWorkDone" at "WorkOutcomes" screen
    And User should see question related to "ClearAboutRoles" at "WorkOutcomes" screen
    And User should see a toggle button for question "ClearAboutRoles" at "WorkOutcomes" screen
    And User should see question related to "HowRoleFitsInOrganisation" at "WorkOutcomes" screen
    And User should see a toggle button for question "HowRoleFitsInOrganisation" at "WorkOutcomes" screen
    And User should see question related to "KnowGoalOfDepartment" at "WorkOutcomes" screen
    And User should see a toggle button for question "KnowGoalOfDepartment" at "WorkOutcomes" screen


  @HLI-241:3 @HLI-241 @Regression
  Scenario: Work Outcomes Screen Questionnaire Answer
    Given User has logged in HLI as UserType "basicUser"
    And User click on cancel icon of new bookmark
    When User opens "WorkOutcomes" questionnaires of "Optional" on-boarding journey in edit mode
    Then User toggle Yes for question "HelpFromColleaguesWhenStuck" on "WorkOutcomes" screen
    And User toggle Yes for question "ExpectedFromWork" on "WorkOutcomes" screen
    And User toggle Yes for question "SupportiveFeedbackOnWorkDone" on "WorkOutcomes" screen
    And User toggle Yes for question "HelpFromColleagues" on "WorkOutcomes" screen
    And User toggle Yes for question "KnowHowToGetWorkDone" on "WorkOutcomes" screen
    And User toggle Yes for question "HowRoleFitsInOrganisation" on "WorkOutcomes" screen
    And User toggle Yes for question "ClearAboutRoles" on "WorkOutcomes" screen
    And User toggle Yes for question "KnowGoalOfDepartment" on "WorkOutcomes" screen
    And User clicks on Save button of "WorkOutcomes" screen
    When User opens "WorkOutcomes" questionnaires of "Optional" on-boarding journey in edit mode
    Then User see toggled answer as Yes for question "HelpFromColleaguesWhenStuck" on "WorkOutcomes" screen
    And User see toggled answer as Yes for question "ExpectedFromWork" on "WorkOutcomes" screen
    And User see toggled answer as Yes for question "SupportiveFeedbackOnWorkDone" on "WorkOutcomes" screen
    And User see toggled answer as Yes for question "HelpFromColleagues" on "WorkOutcomes" screen
    And User see toggled answer as Yes for question "KnowHowToGetWorkDone" on "WorkOutcomes" screen
    And User see toggled answer as Yes for question "HowRoleFitsInOrganisation" on "WorkOutcomes" screen
    And User see toggled answer as Yes for question "ClearAboutRoles" on "WorkOutcomes" screen
    And User see toggled answer as Yes for question "KnowGoalOfDepartment" on "WorkOutcomes" screen

  @HLI-241:4 @HLI-241 @Regression
  Scenario: User clicks on Previous button at Work Outcomes screen
    Given User has logged in HLI as UserType "basicUser"
    And User click on cancel icon of new bookmark
    And User navigates to "WORK OUTCOMES" screen of Onboarding journey
    When User clicks on Previous button of "WorkOutcomes" screen
    Then User should see screen with header "EMPLOYMENT DETAILS"

  @HLI-241:5 @HLI-241 @Regression
  Scenario: User clicks on NEXT button at Work Outcomes screen
    Given User has logged in HLI as UserType "basicUser"
    And User click on cancel icon of new bookmark
    And User navigates to "WORK OUTCOMES" screen of Onboarding journey
    When User clicks on Next button of "WorkOutcomes" screen
    Then User should see screen with header "WORKS PRESSURES"

  @HLI-241:6 @HLI-241 @Regression
  Scenario: User clicks on Save And Continue button at Work Outcomes screen
    Given User has logged in HLI as UserType "basicUser"
    And User click on cancel icon of new bookmark
    And User navigates to "WORK OUTCOMES" screen of Onboarding journey
    When User clicks on Save & Continue button of "WorkOutcomes" screen
    Then User should be navigated to Health age page

  @HLI-241:7 @HLI-241 @Regression
  Scenario: Verify default answer for Questionnaire at Work Outcomes screen
    Given User has logged in HLI as UserType "userWithSkippedOptionalOnboarding"
    And User click on cancel icon of new bookmark
    When User opens "WorkOutcomes" questionnaires of "Optional" on-boarding journey in edit mode
    Then User should see default answer in toggle for question "HelpFromColleaguesWhenStuck" at "WorkOutcomes" screen
    And User should see default answer in toggle for question "ExpectedFromWork" at "WorkOutcomes" screen
    And User should see default answer in toggle for question "SupportiveFeedbackOnWorkDone" at "WorkOutcomes" screen
    And User should see default answer in toggle for question "HelpFromColleagues" at "WorkOutcomes" screen
    And User should see default answer in toggle for question "KnowHowToGetWorkDone" at "WorkOutcomes" screen
    And User should see default answer in toggle for question "ClearAboutRoles" at "WorkOutcomes" screen
    And User should see default answer in toggle for question "HowRoleFitsInOrganisation" at "WorkOutcomes" screen
    And User should see default answer in toggle for question "KnowGoalOfDepartment" at "WorkOutcomes" screen


  @HLI-241:8 @HLI-241 @Regression
  Scenario: Verification of mandatory fields on Work Outcomes screen
    Given User has logged in HLI as UserType "userWithSkippedOptionalOnboarding"
    And User click on cancel icon of new bookmark
    And User navigates to "WORK OUTCOMES" screen of Onboarding journey
    When User clicks on Next button of "WorkOutcomes" screen
    Then User should see screen with header "WORKS PRESSURES"
