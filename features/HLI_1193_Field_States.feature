Feature: HLI_987_Action_Goals_Challenges
  As a User I want easy cues to enter my data in HealthyLives on required fields so that I can save my inputs successfully

  @HLI-1193:1 @HLI-1193 @Smoke @Regression
  Scenario: Verify field state for mandatory text box input field
    Given User has logged in HLI as UserType "onboardingUser"
    And User click on cancel icon of new bookmark
    When User navigates to "HealthAge" page from burger menu
    Then User should view "RecordDataManually" button at "Health_Age" screen
    And User clicks on "RecordDataManually" button at "Health_Age" screen
    And User selects a "Fitness" value from drop down for question "Category" at "RecordData" screen
    And User selects a "Steps" value from drop down for question "Metric" at "RecordData" screen
    And User clicks on "Next" button at "Screen_RecordData" screen
    And User clicks on "RecordManually" button at "Screen_RecordData" screen
    And Field "textbox_Steps" at "RecordData" screen should be underlined in Yellow color representing mandatory field

  @HLI-1193:2 @HLI-1193 @Smoke @Regression
  Scenario: Verify field state for non-mandatory text box input field
    Given User has logged in HLI as UserType "userWithSkippedOptionalOnboarding"
    And User click on cancel icon of new bookmark
    When User opens "EmploymentDetails" questionnaires of "Optional" on-boarding journey in edit mode
    And Field "textbox_HoursPerWeekContract" at "EmploymentDetails" screen should be underlined in Blue color representing non mandatory field

  @HLI-1193:3 @HLI-1193 @Regression
  Scenario: Verify field state for mandatory text box input field for valid value
    Given User has logged in HLI as UserType "onboardingUser"
    And User click on cancel icon of new bookmark
    When User navigates to "HealthAge" page from burger menu
    Then User should view "RecordDataManually" button at "Health_Age" screen
    And User clicks on "RecordDataManually" button at "Health_Age" screen
    And User selects a "Fitness" value from drop down for question "Category" at "RecordData" screen
    And User selects a "Steps" value from drop down for question "Metric" at "RecordData" screen
    And User clicks on "Next" button at "Screen_RecordData" screen
    And User clicks on "RecordManually" button at "Screen_RecordData" screen
    When User types "1000" in input box for question "Steps" at "RecordData" screen
    And Field "textbox_Steps" at "RecordData" screen should be underlined in Blue color representing valid value


  @HLI-1193:4 @HLI-1193  @Regression
  Scenario: Verify field state for mandatory text box input field for invalid value
    Given User has logged in HLI as UserType "onboardingUser"
    And User click on cancel icon of new bookmark
    When User navigates to "HealthAge" page from burger menu
    Then User should view "RecordDataManually" button at "Health_Age" screen
    And User clicks on "RecordDataManually" button at "Health_Age" screen
    And User selects a "Fitness" value from drop down for question "Category" at "RecordData" screen
    And User selects a "Steps" value from drop down for question "Metric" at "RecordData" screen
    And User clicks on "Next" button at "Screen_RecordData" screen
    And User clicks on "RecordManually" button at "Screen_RecordData" screen
    When User types "Alphanumeric" in input box for question "Steps" at "RecordData" screen
    And Field "textbox_Steps" at "RecordData" screen should be underlined in Red color representing invalid value


  @HLI-1193:5 @HLI-1193 @Smoke @Regression
  Scenario: Verify field state for mandatory dropdown input field
    Given User has logged in HLI as UserType "onboardingUser"
    And User click on cancel icon of new bookmark
    When User navigates to "HealthAge" page from burger menu
    Then User should view "RecordDataManually" button at "Health_Age" screen
    And User clicks on "RecordDataManually" button at "Health_Age" screen
    And User selects a "Substances" value from drop down for question "Category" at "RecordData" screen
    And User selects a "Alcohol" value from drop down for question "Metric" at "RecordData" screen
    And User clicks on "Next" button at "Screen_RecordData" screen
    And User clicks on "RecordManually" button at "Screen_RecordData" screen
    And Field "dropdownField_Alcohol" at "RecordData" screen should be underlined in Yellow color representing mandatory field

  @HLI-1193:6 @HLI-1193 @Smoke @Regression
  Scenario: Verify field state for non-mandatory drop down input field
    Given User has logged in HLI as UserType "userWithSkippedOptionalOnboarding"
    And User click on cancel icon of new bookmark
    When User opens "EmploymentDetails" questionnaires of "Optional" on-boarding journey in edit mode
    And Field "dropdownField_EmploymentType" at "EmploymentDetails" screen should be underlined in Blue color representing non mandatory field


  @HLI-1193:7 @HLI-1193 @Regression
  Scenario: Verify field state for mandatory drop down input field for valid value
    Given User has logged in HLI as UserType "onboardingUser"
    And User click on cancel icon of new bookmark
    When User navigates to "HealthAge" page from burger menu
    Then User should view "RecordDataManually" button at "Health_Age" screen
    And User clicks on "RecordDataManually" button at "Health_Age" screen
    And User selects a "Substances" value from drop down for question "Category" at "RecordData" screen
    And User selects a "Alcohol" value from drop down for question "Metric" at "RecordData" screen
    And User clicks on "Next" button at "Screen_RecordData" screen
    And User clicks on "RecordManually" button at "Screen_RecordData" screen
    When User selects a "1-2 Units" value from drop down for question "Alcohol" at "RecordData" screen
    And Field "dropdownField_Alcohol" at "RecordData" screen should be underlined in Blue color representing valid value

  @HLI-1193:8 @HLI-1193  @Regression
  Scenario: Verify field state for mandatory text box input field for invalid value
    Given User has logged in HLI as UserType "onboardingUser"
    And User click on cancel icon of new bookmark
    When User opens "BMI" questionnaires of "Mandatory" on-boarding journey in edit mode
    And User selects a "" value from drop down for question "WaistCircumference" at "BMIBodyShape" screen
    And Field "dropdownField_WaistCircumference" at "BMIBodyShape" screen should be underlined in Red color representing invalid value

  @HLI-1193:9 @HLI-1193 @Smoke @Regression
  Scenario: Verify field state for mandatory checkbox input field
    Given User has logged in HLI as UserType "NewUserAtAubstanceUsageOnboarding"
    And User clicks on "ContinueManually" button at "Welcome_Screens" screen
    And Field checkbox "checkboxField_Never" at "SubstanceUsage" screen should be underlined in Yellow color representing mandatory field

  @HLI-1193:10 @HLI-1193 @Smoke @Regression
  Scenario: Verify field state for mandatory checkbox input field
    Given User has logged in HLI as UserType "userWithSkippedOptionalOnboarding"
    And User click on cancel icon of new bookmark
    When User opens "EmploymentDetails" questionnaires of "Optional" on-boarding journey in edit mode
    And Field checkbox "checkboxField_Walk" at "EmploymentDetails" screen should be underlined in Blue color representing non mandatory field


  @HLI-1193:11 @HLI-1193 @Smoke @Regression
  Scenario: Verify field state for mandatory checkbox input field when not ticked
    Given User has logged in HLI as UserType "userWithSkippedOptionalOnboarding"
    And User click on cancel icon of new bookmark
    When User opens "SubstanceUsage" questionnaires of "Mandatory" on-boarding journey in edit mode
    And User toggle No for question "DoYouSmoke" on "SubstanceUsage" screen
    And User toggle Yes for question "DoYouSmoke" on "SubstanceUsage" screen
    And Field checkbox "checkboxField_Cigarette" at "SubstanceUsage" screen should be underlined in Red color representing unchecked mandatory field

  @HLI-1193:12 @HLI-1193 @Smoke @Regression
  Scenario: Verify field state for mandatory checkbox input field when checked
    Given User has logged in HLI as UserType "userWithSkippedOptionalOnboarding"
    And User click on cancel icon of new bookmark
    When User opens "SubstanceUsage" questionnaires of "Mandatory" on-boarding journey in edit mode
    And User toggle Yes for question "DoYouSmoke" on "SubstanceUsage" screen
    And User clicks on checkbox for question "Cigarette" of "SubstanceUsage" screen
    And Field checkbox "checkboxField_Cigarette" at "SubstanceUsage" screen should be filed by blue color


  @HLI-1193:13 @HLI-1193 @Smoke @Regression
  Scenario: Verify field state for non editable field
    Given User has logged in HLI as UserType "onboardingUser"
    And User click on cancel icon of new bookmark
    And I have tapped the Profile Icon in the top right corner
    And The Personal info page is selected displayed
    When I tap the pencil icon next to 'Profile Overview'
    Then Field "profile_Fisrt_Name" at "View_Profile" screen should be grey in color represnting non editable data





