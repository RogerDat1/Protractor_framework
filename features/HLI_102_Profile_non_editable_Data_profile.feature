Feature: HLI_102_ Profile_non_editable_HR_Data_profile

  As a User with Profile data loaded from a HR data file,
  I want my Profile section data fields to be read-only
  so that the fields cannot be edited

  @HLI-102:1 @Regression @Smoke
  Scenario: Profile Overview is non-editable
    Given User has logged in HLI as UserType "basicUser"
    And I have tapped the Profile Icon in the top right corner
    And The Personal info page is selected displayed
    When I tap the pencil icon next to 'Profile Overview'
    Then I should not be able to edit or enter First name
    Then I should not be able to edit or enter Last name
    Then I should not be able to edit or enter Date of birth
    Then I should not be able to edit or enter Address
    Then I should not be able to edit or enter Postcode
    Then I should not be able to edit or enter city
    Then I should not be able to edit or enter country
    Then I should be able to edit gender

  @HLI-102:2 @Regression @Smoke
  Scenario: Profile Overview is editable for more about you
    Given User has logged in HLI as UserType "basicUser"
    And I have tapped the Profile Icon in the top right corner
    And The Personal info page is selected displayed
    When I tap the pencil icon next to 'More about You'
    Then I should be able to edit Ethnicity Group
    Then I should be able to edit Ethnicity
    Then I should be able to edit Marital Status
    Then I should be able to edit qus 'i am carer'
    Then I should be able to edit qus 'i am pregnant'

  @HLI-102:3 @Regression @Smoke
  Scenario: Profile Overview is editable for more about you
    Given User has logged in HLI as UserType "basicUser"
    And I have tapped the Profile Icon in the top right corner
    And The Personal info page is selected displayed
    When I tap the pencil icon next to 'Job And Education'
    Then I should be able to edit Highest Level Educations
    Then I should be able to edit Job Role
    Then I should be able to edit Annual Salary
    Then I should be able to edit qus currency
    Then I should be able to edit qus Branch Location
