Feature: HLI_240_First_Time_User_Journey_Extra_Onboarding_Questionnaire_5_Employment_Details
  As a User completing Healthy Lives survey, I want to provide general details about my employment
  so that it can be part of assessing my workplace health influence


  @HLI-240:1 @HLI-240 @Regression @Smoke
  Scenario: Employment Details Screen Design
    Given User has logged in HLI as UserType "basicUser"
    And User click on cancel icon of new bookmark
    And User navigates to "EMPLOYMENT DETAILS" screen of Onboarding journey
    Then User see "EmploymentDetails" header as expected
    And User see "EmploymentDetails" description as expected
    And User see "EmploymentDetails" screen number as expected
    And User see "EmploymentDetails" Next button
    And User see "EmploymentDetails" Previous button
    And User see "EmploymentDetails" Connect an App/Tracker button
    And User see "EmploymentDetails" Save & Continue button

  @HLI-240:2 @HLI-240 @Regression
  Scenario: Employment Details Screen Questionnaire
    Given User has logged in HLI as UserType "basicUser"
    And User click on cancel icon of new bookmark
    When User opens "EmploymentDetails" questionnaires of "Optional" on-boarding journey in edit mode
    Then User should see question related to "EmploymentType" at "EmploymentDetails" screen
    And User should see a drop down for question "EmploymentType" at "EmploymentDetails" screen
    And User should see available options in drop down for question "EmploymentType" at "EmploymentDetails" screen
    And User should see question related to "HowLongEmployedToCompany" at "EmploymentDetails" screen
    And User should see a drop down for question "HowLongEmployedToCompany" at "EmploymentDetails" screen
    And User should see available options in drop down for question "HowLongEmployedToCompany" at "EmploymentDetails" screen
    And User should see question related to "HoursPerWeekContract" at "EmploymentDetails" screen
    And User should see a text box for question "HoursPerWeekContract" at "EmploymentDetails" screen
    And User should see question related to "HoursPerWeekPerformed" at "EmploymentDetails" screen
    And User should see a text box for question "HoursPerWeekPerformed" at "EmploymentDetails" screen
    And User should see question related to "ExpectToRemain" at "EmploymentDetails" screen
    And User should see a drop down for question "ExpectToRemain" at "EmploymentDetails" screen
    And User should see available options in drop down for question "ExpectToRemain" at "EmploymentDetails" screen
    And User should see question related to "UnsociableHours" at "EmploymentDetails" screen
    And User should see a toggle button for question "UnsociableHours" at "EmploymentDetails" screen
    And User should see question related to "CommutingType" at "EmploymentDetails" screen
    And User should see a checkbox for question "CommutingTypeDrive" at "EmploymentDetails" screen
    And User should see a checkbox for question "CommutingTypeWalk" at "EmploymentDetails" screen
    And User should see a checkbox for question "CommutingTypeTrain" at "EmploymentDetails" screen
    And User should see a checkbox for question "CommutingTypeBus" at "EmploymentDetails" screen
    And User should see question related to "CommutingTime" at "EmploymentDetails" screen
    And User should see a text box for question "CommutingTime" at "EmploymentDetails" screen
    And User should see question related to "FlexibleWorkingHours" at "EmploymentDetails" screen
    And User should see a toggle button for question "FlexibleWorkingHours" at "EmploymentDetails" screen
    And User should see question related to "AbleToWFH" at "EmploymentDetails" screen
    And User should see a toggle button for question "AbleToWFH" at "EmploymentDetails" screen
    And User should see question related to "HowOften" at "EmploymentDetails" screen
    And User should see a drop down for question "HowOften" at "EmploymentDetails" screen
    And User should see available options in drop down for question "HowOften" at "EmploymentDetails" screen
    And User should see question related to "DecideWhatIDo" at "EmploymentDetails" screen
    And User should see a toggle button for question "DecideWhatIDo" at "EmploymentDetails" screen
    And User should see question related to "DecideWhenToTakBreak" at "EmploymentDetails" screen
    And User should see a toggle button for question "DecideWhenToTakBreak" at "EmploymentDetails" screen
    And User should see question related to "FlexibleTime" at "EmploymentDetails" screen
    And User should see a toggle button for question "FlexibleTime" at "EmploymentDetails" screen
    And User should see question related to "WorkSpeed" at "EmploymentDetails" screen
    And User should see a toggle button for question "WorkSpeed" at "EmploymentDetails" screen


  @HLI-240:3 @HLI-240 @Regression
  Scenario: Employment Details Screen Questionnaire Answer
    Given User has logged in HLI as UserType "basicUser"
    And User click on cancel icon of new bookmark
    When User opens "EmploymentDetails" questionnaires of "Optional" on-boarding journey in edit mode
    Then User selects a value from drop down for question "EmploymentType" at "EmploymentDetails" screen
    And User selects a value from drop down for question "HowLongEmployedToCompany" at "EmploymentDetails" screen
    And User types value for field "HoursPerWeekContract" of "EmploymentDetails" screen
    And User types value for field "HoursPerWeekPerformed" of "EmploymentDetails" screen
    And User selects a value from drop down for question "ExpectToRemain" at "EmploymentDetails" screen
    And User toggle Yes for question "UnsociableHours" on "EmploymentDetails" screen
    And User clicks on checkbox for question "CommutingTypeDrive" of "EmploymentDetails" screen
    And User types value for field "CommutingTime" of "EmploymentDetails" screen
    And User toggle Yes for question "FlexibleWorkingHours" on "EmploymentDetails" screen
    And User toggle Yes for question "AbleToWFH" on "EmploymentDetails" screen
    And User selects a value from drop down for question "HowOften" at "EmploymentDetails" screen
    And User toggle Yes for question "DecideWhatIDo" on "EmploymentDetails" screen
    And User toggle Yes for question "DecideWhenToTakBreak" on "EmploymentDetails" screen
    And User toggle Yes for question "FlexibleTime" on "EmploymentDetails" screen
    And User toggle Yes for question "WorkSpeed" on "EmploymentDetails" screen
    And User clicks on Save button of "EmploymentDetails" screen
    When User opens "EmploymentDetails" questionnaires of "Optional" on-boarding journey in edit mode
    Then User verify selected value for field "EmploymentType" of "EmploymentDetails" screen
    And User verify selected value for field "HowLongEmployedToCompany" of "EmploymentDetails" screen
    And User verify typed value for field "HoursPerWeekContract" of "EmploymentDetails" screen
    And User verify typed value for field "HoursPerWeekPerformed" of "EmploymentDetails" screen
    And User verify selected value for field "ExpectToRemain" of "EmploymentDetails" screen
    And User see toggled answer as Yes for question "UnsociableHours" on "EmploymentDetails" screen
    And User verify checked checkbox for question "CommutingTypeDrive" of "EmploymentDetails" screen
    And User verify typed value for field "CommutingTime" of "EmploymentDetails" screen
    And User see toggled answer as Yes for question "FlexibleWorkingHours" on "EmploymentDetails" screen
    And User see toggled answer as Yes for question "AbleToWFH" on "EmploymentDetails" screen
    And User verify selected value for field "HowOften" of "EmploymentDetails" screen
    And User see toggled answer as Yes for question "DecideWhatIDo" on "EmploymentDetails" screen
    And User see toggled answer as Yes for question "DecideWhatIDo" on "EmploymentDetails" screen
    And User see toggled answer as Yes for question "FlexibleTime" on "EmploymentDetails" screen
    And User see toggled answer as Yes for question "WorkSpeed" on "EmploymentDetails" screen


  @HLI-240:4 @HLI-240 @Regression
  Scenario: User clicks on Previous button at Employment Details screen
    Given User has logged in HLI as UserType "basicUser"
    And User click on cancel icon of new bookmark
    And User navigates to "EMPLOYMENT DETAILS" screen of Onboarding journey
    When User clicks on Previous button of "EmploymentDetails" screen
    Then User should see screen with header "WORK OUTCOMES"

  @HLI-240:5 @HLI-240 @Regression
  Scenario: User clicks on NEXT button at Employment Details screen
    Given User has logged in HLI as UserType "basicUser"
    And User click on cancel icon of new bookmark
    And User navigates to "EMPLOYMENT DETAILS" screen of Onboarding journey
    When User clicks on Next button of "EmploymentDetails" screen
    Then User should see screen with header "SUBSTANCE & ACTIVITY LEVEL"

  @HLI-240:6 @HLI-240 @Regression
  Scenario: User clicks on Save And Continue button at Employment Details screen
    Given User has logged in HLI as UserType "basicUser"
    And User click on cancel icon of new bookmark
    And User navigates to "EMPLOYMENT DETAILS" screen of Onboarding journey
    When User clicks on Save & Continue button of "EmploymentDetails" screen
    Then User should be navigated to Health age page

  @HLI-240:7 @HLI-240 @Regression
  Scenario: Verify default answer for Questionnaire at Employment Details screen
    Given User has logged in HLI as UserType "userWithSkippedOptionalOnboarding"
    And User click on cancel icon of new bookmark
    When User opens "EmploymentDetails" questionnaires of "Optional" on-boarding journey in edit mode
    Then User should see default answer in dropdown for question "EmploymentType" at "EmploymentDetails" screen
    And User should see default answer in dropdown for question "HowLongEmployedToCompany" at "EmploymentDetails" screen
    And User see default value for input field for "HoursPerWeekContract" of "EmploymentDetails" screen
    And User see default value for input field for "HoursPerWeekPerformed" of "EmploymentDetails" screen
    And User should see default answer in dropdown for question "ExpectToRemain" at "EmploymentDetails" screen
    And User should see default answer in toggle for question "UnsociableHours" at "EmploymentDetails" screen
    And User see unchecked checkbox for question "CommutingTypeDrive" at "EmploymentDetails" screen
    And User see unchecked checkbox for question "CommutingTypeDrive" at "EmploymentDetails" screen
    And User see unchecked checkbox for question "CommutingTypeDrive" at "EmploymentDetails" screen
    And User see unchecked checkbox for question "CommutingTypeDrive" at "EmploymentDetails" screen
    And User see default value for input field for "CommutingTime" of "EmploymentDetails" screen
    And User should see default answer in toggle for question "FlexibleWorkingHours" at "EmploymentDetails" screen
    And User should see default answer in toggle for question "AbleToWFH" at "EmploymentDetails" screen
    And User should see default answer in dropdown for question "HowOften" at "EmploymentDetails" screen
    And User should see default answer in toggle for question "DecideWhatIDo" at "EmploymentDetails" screen
    And User should see default answer in toggle for question "DecideWhenToTakBreak" at "EmploymentDetails" screen
    And User should see default answer in toggle for question "FlexibleTime" at "EmploymentDetails" screen
    And User should see default answer in toggle for question "WorkSpeed" at "EmploymentDetails" screen


  @HLI-240:8 @HLI-240 @Regression
  Scenario: Verification of mandatory fields on Employment Details screen
    Given User has logged in HLI as UserType "userWithSkippedOptionalOnboarding"
    And User click on cancel icon of new bookmark
    And User navigates to "EMPLOYMENT DETAILS" screen of Onboarding journey
    When User clicks on Next button of "EmploymentDetails" screen
    Then User should see screen with header "SUBSTANCE & ACTIVITY LEVEL"


















