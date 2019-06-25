Feature: HLI_614_Personal_Detai_FTUJ_Profile_Annual_Income_Range_&_Currency
  As a User I want to indicate the range of my annual income so that I receive suitable insights from Healthy Lives

  Scenario: No Annual Income is received from HR file
    Given User has logged in HLI as UserType "UserAtPersonalDetailsPage"
    When System will populate a personal details page
    Then User should see question related to "AnnualSalary" at "PersonalDetailsConfirmation" screen
    And User should see question related to "Currency" at "PersonalDetailsConfirmation" screen
    And User should see default answer in dropdown for question "AnnualSalary" at "PersonalDetailsConfirmation" screen
    And User should see default answer in dropdown for question "Currency" at "PersonalDetailsConfirmation" screen
    And User selects a value from drop down for question "AnnualSalary" at "PersonalDetailsConfirmation" screen
    And User selects a value from drop down for question "Currency" at "PersonalDetailsConfirmation" screen


  Scenario: User enters only Annual Income Range
    Given User has logged in HLI as UserType "UserAtPersonalDetailsPage"
    When System will populate a personal details page
    And User selects a value from drop down for question "AnnualSalary" at "PersonalDetailsConfirmation" screen
    And User clicks on Save & Continue button of "PersonalDetailsConfirmation" screen
    Then User should be prompted to select associated Currency


  Scenario: User enters only Currency
    Given User has logged in HLI as UserType "UserAtPersonalDetailsPage"
    When System will populate a personal details page
    And User selects a value from drop down for question "Currency" at "PersonalDetailsConfirmation" screen
    And User clicks on Save & Continue button of "PersonalDetailsConfirmation" screen
    Then User should be prompted to select associated Annual Income Range


  Scenario: Annual Income is received from HR file
    Given User has logged in HLI as UserType "UserAtPersonalDetailsPage"
    When System will populate a personal details page
    Then User should see pre-populated non-editable field for question "AnnualSalary" at "PersonalDetailsConfirmation" screen
    And User should see pre-populated non-editable field for question "Currency" at "PersonalDetailsConfirmation" screen



