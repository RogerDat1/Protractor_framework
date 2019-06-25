Feature: HLI_725_Personal_Information_Annual_Salary_Drop_down
  As a User I want to confirm my Annual income as a range versus sharing actual value so that it is easy to complete my basic information

  @HLI-725:1 @HLI-725 @Regression @Smoke
  Scenario: First Time User Journey Personal Information page Annual Salary drop-down options
    Given User has logged in HLI as UserType "UserAtPersonalDetailsPageWithProperHRData"
    When System will populate a personal details page
    Then User should see question related to "AnnualSalary" at "PersonalDetailsConfirmation" screen
    And User should see a drop down for question "AnnualSalary" at "PersonalDetailsConfirmation" screen
    And User see available options in dropdown for question "AnnualSalary" of "PersonalDetailsConfirmation"


  @HLI-725:2 @HLI-725 @Regression @Smoke
  Scenario: First Time User Journey Personal Information page Annual Salary drop-down value selection
    Given User has logged in HLI as UserType "UserAtPersonalDetailsPageWithProperHRData"
    When System will populate a personal details page
    And User selects a value from drop down for question "AnnualSalary" at "PersonalDetailsConfirmation" screen
    And User selects a value from drop down for question "Currency" at "PersonalDetailsConfirmation" screen


  @HLI-725:3 @HLI-725 @Regression @Smoke
  Scenario: Normal user Profile section Annual Salary drop-down options
    Given User has logged in HLI as UserType "basicUser"
    And User click on cancel icon of new bookmark
    When User navigates to Profile page
    And User clicks on edit icon of "JobAndEducation" section
    Then User should see question related to "AnnualSalary" at "PersonalInfo" screen
    And User should see a drop down for question "AnnualSalary" at "PersonalInfo" screen
    And User see available options in dropdown for question "AnnualSalary" of "PersonalInfo"


  @HLI-725:4 @HLI-725 @Regression @Smoke
  Scenario: Normal user Profile section Annual Salary drop-down value selection
    Given User has logged in HLI as UserType "basicUser"
    And User click on cancel icon of new bookmark
    When User navigates to Profile page
    And User clicks on edit icon of "JobAndEducation" section
    And User selects a value from drop down for question "AnnualSalary" at "PersonalInfo" screen
    And User selects a value from drop down for question "Currency" at "PersonalInfo" screen
    And User clicks on Save button of "PersonalInfo" screen
    Then User navigates to Profile page
    And User clicks on edit icon of "JobAndEducation" section
    Then User verify selected value for field "AnnualSalary" of "PersonalInfo" screen
    And User verify selected value for field "Currency" of "PersonalInfo" screen