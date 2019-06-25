Feature: HLI_815_Overall_Health_&_Employment_Change_Dropdown_Fields_To_Allow_User_Input
  The key fields driving productivity calculation on Analytics screen are currently drop-down based. These fields need to allow the user to
  enter an accurate value so the calculations are more real

  @HLI-815:1 @HLI-815 @Regression
  Scenario: Drop down changes to input box at Overall Health Screen
    Given User has logged in HLI as UserType "onboardingUser"
    And User click on cancel icon of new bookmark
    And User navigates to "OVERALL HEALTH" screen of "Optional" Onboarding journey
    And User should see question related to "NumberOfSickLeave" at "OptionalOverallHealth" screen
    And User should see a text box for question "NumberOfSickLeave" at "OptionalOverallHealth" screen

  @HLI-815:2 @HLI-815 @Regression
  Scenario: Drop down changes to input box at Employment details Screen
    Given User has logged in HLI as UserType "onboardingUser"
    And User click on cancel icon of new bookmark
    And User navigates to "EMPLOYMENT DETAILS" screen of Onboarding journey
    And User see question "HoursPerWeekContract" of "EmploymentDetails"
    And User see question "HoursPerWeekPerformed" of "EmploymentDetails"
    And User should see a text box for question "HoursPerWeekContract" at "EmploymentDetails" screen
    And User should see a text box for question "HoursPerWeekPerformed" at "EmploymentDetails" screen

  @HLI-815:3 @HLI-815 @Regression
  Scenario: Validation of values for input box at Overall Health Screen
    Given User has logged in HLI as UserType "onboardingUser"
    And User click on cancel icon of new bookmark
    And User navigates to "OVERALL HEALTH" screen of "Optional" Onboarding journey
    When User types "10" in input box for question "NumberOfSickLeave" at "OptionalOverallHealth" screen
    Then Text box bottom color for field "NumberOfSickLeave" of "OptionalOverallHealth" screen should not be red
    When User types "10.20" in input box for question "NumberOfSickLeave" at "OptionalOverallHealth" screen
    Then Text box bottom color for field "NumberOfSickLeave" of "OptionalOverallHealth" screen should be red
    When User types "100" in input box for question "NumberOfSickLeave" at "OptionalOverallHealth" screen
    Then Text box bottom color for field "NumberOfSickLeave" of "OptionalOverallHealth" screen should be red
    When User types "-12" in input box for question "NumberOfSickLeave" at "OptionalOverallHealth" screen
    Then Text box bottom color for field "NumberOfSickLeave" of "OptionalOverallHealth" screen should be red
    When User types "abc" in input box for question "NumberOfSickLeave" at "OptionalOverallHealth" screen
    Then User should not be able to type alphabets in input box for question "NumberOfSickLeave" at "OptionalOverallHealth" screen


  @HLI-815:4 @HLI-815 @Regression
  Scenario: Validation of values for input box at Employment details Screen
    Given User has logged in HLI as UserType "onboardingUser"
    And User click on cancel icon of new bookmark
    And User navigates to "EMPLOYMENT DETAILS" screen of Onboarding journey
    When User types "10" in input box for question "HoursPerWeekContract" at "EmploymentDetails" screen
    Then Text box bottom color for field "HoursPerWeekContract" of "EmploymentDetails" screen should not be red
    When User types "10.20" in input box for question "HoursPerWeekContract" at "EmploymentDetails" screen
    Then Text box bottom color for field "HoursPerWeekContract" of "EmploymentDetails" screen should be red
    When User types "100" in input box for question "HoursPerWeekContract" at "EmploymentDetails" screen
    Then Text box bottom color for field "HoursPerWeekContract" of "EmploymentDetails" screen should be red
    When User types "-12" in input box for question "HoursPerWeekContract" at "EmploymentDetails" screen
    Then Text box bottom color for field "HoursPerWeekContract" of "EmploymentDetails" screen should be red
    When User types "abc" in input box for question "HoursPerWeekContract" at "EmploymentDetails" screen
    Then User should not be able to type alphabets in input box for question "HoursPerWeekContract" at "EmploymentDetails" screen


  @HLI-815:5 @HLI-815 @Regression
  Scenario: Validation of values for input box at Employment details Screen
    Given User has logged in HLI as UserType "onboardingUser"
    And User click on cancel icon of new bookmark
    And User navigates to "EMPLOYMENT DETAILS" screen of Onboarding journey
    When User types "10" in input box for question "HoursPerWeekPerformed" at "EmploymentDetails" screen
    Then Text box bottom color for field "HoursPerWeekPerformed" of "EmploymentDetails" screen should not be red
    When User types "10.20" in input box for question "HoursPerWeekPerformed" at "EmploymentDetails" screen
    Then Text box bottom color for field "HoursPerWeekPerformed" of "EmploymentDetails" screen should be red
    When User types "100" in input box for question "HoursPerWeekPerformed" at "EmploymentDetails" screen
    Then Text box bottom color for field "HoursPerWeekPerformed" of "EmploymentDetails" screen should be red
    When User types "-12" in input box for question "HoursPerWeekPerformed" at "EmploymentDetails" screen
    Then Text box bottom color for field "HoursPerWeekPerformed" of "EmploymentDetails" screen should be red
    When User types "abc" in input box for question "HoursPerWeekPerformed" at "EmploymentDetails" screen
    Then User should not be able to type alphabets in input box for question "HoursPerWeekPerformed" at "EmploymentDetails" screen


