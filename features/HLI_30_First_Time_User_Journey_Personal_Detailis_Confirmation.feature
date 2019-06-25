Feature: HLI_30_ First_Time_User_Journey_Personal_Detailis_Confirmation
  As a first time User I want to view and update my basic details so that I can use functionality
  in HLI platform in an informed manner


  @HLI-30:1 @HLI-30 @Regression @Smoke
  Scenario: User with proper HR data accesses First time
    Given User has logged in HLI as UserType "UserAtPersonalDetailsPageWithProperHRData"
    Then System will populate a personal details page
    And User should see "LetsGetGoing" header at "PersonalDetailsConfirmation" page
    And User should see "LetsGetGoing" header description at "PersonalDetailsConfirmation" page
    And User should see "WhatWeKnowABoutYou" header at "PersonalDetailsConfirmation" page
    And User should see "WhatWeKnowABoutYou" header description at "PersonalDetailsConfirmation" page
    And User should see "MoreAboutYou" header at "PersonalDetailsConfirmation" page
    And User should see "MoreAboutYou" header description at "PersonalDetailsConfirmation" page
    And User should see "JobAndEducation" header at "PersonalDetailsConfirmation" page
    And User should see "JobAndEducation" header description at "PersonalDetailsConfirmation" page
    And User should see a "SaveAndContinue" button at "PersonalDetailsConfirmation" page

  @HLI-30:2 @HLI-30 @Regression
  Scenario: User with proper HR data access WHAT WE KNOW ABOUT YOU section
    Given User has logged in HLI as UserType "UserAtPersonalDetailsPageWithProperHRData"
    And User should see non editable input field "FirstName" and verify its value at "PersonalDetailsConfirmation" page
    And User should see non editable input field "LastName" and verify its value at "PersonalDetailsConfirmation" page
    And User should see non editable input field "DateOfBirth" and verify its value at "PersonalDetailsConfirmation" page
    And User should see editable non select drop down field "Gender" and verify its value at "PersonalDetailsConfirmation" page
    And User should see non editable input field "Address" and verify its value at "PersonalDetailsConfirmation" page
    And User should see non editable input field "Postcode" and verify its value at "PersonalDetailsConfirmation" page
    And User should see non editable input field "City" and verify its value at "PersonalDetailsConfirmation" page
    And User should see non editable input field "Country" and verify its value at "PersonalDetailsConfirmation" page
    And User should see non editable input field "WorkEmail" and verify its value at "PersonalDetailsConfirmation" page


  @HLI-30:3 @HLI-30 @Regression
  Scenario: User with proper HR data access MORE ABOUT YOU section
    Given User has logged in HLI as UserType "UserAtPersonalDetailsPageWithProperHRData"
    And User should see editable drop down field "EthnicityGroup" at "PersonalDetailsConfirmation" page
    And User should see editable drop down field "Ethnicity" at "PersonalDetailsConfirmation" page
    And User should see editable drop down field "MaritalStatus" at "PersonalDetailsConfirmation" page
    And User should see editable input field "NumberOfChildren" at "PersonalDetailsConfirmation" page
    And User should see editable toggle button for field "AreYouACarer" at "PersonalDetailsConfirmation" page
    When User selects a value from drop down for question "Gender" at "PersonalDetailsConfirmation" screen
    And User should see editable toggle button for field "AreYouAPregnant" at "PersonalDetailsConfirmation" page


  @HLI-30:4 @HLI-30 @Regression
  Scenario: User with proper HR data access JOB & EDUCATION section
    Given User has logged in HLI as UserType "UserAtPersonalDetailsPageWithProperHRData"
    And User should see editable drop down field "HighestLevelOfEducation" at "PersonalDetailsConfirmation" page
    And User should see editable drop down field "JobRole" at "PersonalDetailsConfirmation" page
    And User should see editable drop down field "AnnualSalary" at "PersonalDetailsConfirmation" page
    And User should see editable drop down field "Currency" at "PersonalDetailsConfirmation" page
    And User should see editable drop down field "BranchWorkLocation" at "PersonalDetailsConfirmation" page


  @HLI-30:5 @HLI-30 @Regression
  Scenario: Verify presence of Are You Pregnant field based on gender
    Given User has logged in HLI as UserType "UserAtPersonalDetailsPageWithProperHRData"
    When User selects a "Female" value from drop down for question "Gender" at "PersonalDetailsConfirmation" screen
    And User should see editable toggle button for field "AreYouAPregnant" at "PersonalDetailsConfirmation" page
    When User selects a "Male" value from drop down for question "Gender" at "PersonalDetailsConfirmation" screen
    Then Are you pregnant field should not be shown under More About You section

  @HLI-30:6 @HLI-30 @Regression
  Scenario: User with proper HR data fills data in editable fields
    Given User has logged in HLI as UserType "UserAtPersonalDetailsPageWithProperHRData"
    And User selects a "Other" value from drop down for question "EthnicityGroup" at "PersonalDetailsConfirmation" screen
    And User selects a "Other ethnic group" value from drop down for question "Ethnicity" at "PersonalDetailsConfirmation" screen
    And User selects a "Other" value from drop down for question "MaritalStatus" at "PersonalDetailsConfirmation" screen
    And User types "2" in input box for question "NumberOfChildren" at "PersonalDetailsConfirmation" screen
    And User selects a "Second Stage tertiary (6)" value from drop down for question "HighestLevelOfEducation" at "PersonalDetailsConfirmation" screen
    And User selects a "Elementary Trade and Administration" value from drop down for question "JobRole" at "PersonalDetailsConfirmation" screen
    And User selects a "90,000 - 100,000" value from drop down for question "AnnualSalary" at "PersonalDetailsConfirmation" screen
    And User selects a "RUB" value from drop down for question "Currency" at "PersonalDetailsConfirmation" screen


  @HLI-30:7 @HLI-30 @Regression
  Scenario: User with proper HR data accesses First time
    Given User has logged in HLI as UserType "UserAtPersonalDetailsPageWithIncompleteHRData"
    Then System will populate a personal details page
    And User should see editable input field "EditableAddress" at "PersonalDetailsConfirmation" page
    And User should see editable input field "EditablePostcode" at "PersonalDetailsConfirmation" page
    And User should see editable input field "EditableCity" at "PersonalDetailsConfirmation" page
    And User should see editable input field "EditableCountry" at "PersonalDetailsConfirmation" page

  @HLI-30:8 @HLI-30 @OnDemand
  Scenario: User clicks on Save And Continue button
    Given User has logged in HLI as UserType "UserAtPersonalDetailsPageWithIncompleteHRData"
    When User clicks on Save And Continue button
    Then the system should direct him to the Welcome page







