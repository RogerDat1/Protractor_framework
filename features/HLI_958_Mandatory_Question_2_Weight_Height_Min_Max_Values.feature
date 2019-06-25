Feature: HLI_958_Mandatory_Question_2_Weight_Height_Min_Max_Values
  As a User I should be prompted when I enter an invalid value of adult Height or
  Weight so that I can correct it & see my BMI

  @HLI-958:1 @HLI-958 @Regression @Smoke
  Scenario: User provides weight less than minimum value
    Given User has logged in HLI as UserType "onboardingUser"
    And User click on cancel icon of new bookmark
    And User opens "BMI" questionnaires of "Mandatory" on-boarding journey in edit mode
    And User toggles unit types of weight to fill weight in Kgs
    When User types "30" in input box for question "Kgs" at "BMIBodyShape" screen
    Then User should see an error message to enter a valid value
    And User should not see a BMI score in BMI chart

  @HLI-958:2 @HLI-958 @Regression @Smoke
  Scenario: User provides weight more than maximum value
    Given User has logged in HLI as UserType "onboardingUser"
    And User click on cancel icon of new bookmark
    And User opens "BMI" questionnaires of "Mandatory" on-boarding journey in edit mode
    And User toggles unit types of weight to fill weight in Kgs
    When User types "300" in input box for question "Kgs" at "BMIBodyShape" screen
    Then User should see an error message to enter a valid value
    And User should not see a BMI score in BMI chart


  @HLI-958:3 @HLI-958 @Regression
  Scenario: User provides weight equal to minimum value
    Given User has logged in HLI as UserType "onboardingUser"
    And User click on cancel icon of new bookmark
    And User opens "BMI" questionnaires of "Mandatory" on-boarding journey in edit mode
    And User toggles unit types of weight to fill weight in Kgs
    When User types "40" in input box for question "Kgs" at "BMIBodyShape" screen
    Then User should not see an error message to enter a valid value
    And User should see a non zero BMI score in BMI chart

  @HLI-958:4 @HLI-958 @Regression
  Scenario: User provides weight equal to minimum value
    Given User has logged in HLI as UserType "onboardingUser"
    And User click on cancel icon of new bookmark
    And User opens "BMI" questionnaires of "Mandatory" on-boarding journey in edit mode
    And User toggles unit types of weight to fill weight in Kgs
    When User types "200" in input box for question "Kgs" at "BMIBodyShape" screen
    Then User should not see an error message to enter a valid value
    And User should see a non zero BMI score in BMI chart

  @HLI-958:5 @HLI-958 @Regression @Smoke
  Scenario: User provides height less than minimum value
    Given User has logged in HLI as UserType "onboardingUser"
    And User click on cancel icon of new bookmark
    And User opens "BMI" questionnaires of "Mandatory" on-boarding journey in edit mode
    And User toggles unit types of height to fill weight in Feet
    When User types "3" in input box for question "Feet" at "BMIBodyShape" screen
    And User types "9" in input box for question "Inches" at "BMIBodyShape" screen
    Then User should see an error message to enter a valid value
    And User should not see a BMI score in BMI chart

  @HLI-958:6 @HLI-958 @Regression @Smoke
  Scenario: User provides height more than maximum value
    Given User has logged in HLI as UserType "onboardingUser"
    And User click on cancel icon of new bookmark
    And User opens "BMI" questionnaires of "Mandatory" on-boarding journey in edit mode
    And User toggles unit types of height to fill weight in Feet
    When User types "8" in input box for question "Feet" at "BMIBodyShape" screen
    And User types "9" in input box for question "Inches" at "BMIBodyShape" screen
    Then User should see an error message to enter a valid value
    And User should not see a BMI score in BMI chart

  @HLI-958:7 @HLI-958 @Regression
  Scenario: User provides height equal to minimum value
    Given User has logged in HLI as UserType "onboardingUser"
    And User click on cancel icon of new bookmark
    And User opens "BMI" questionnaires of "Mandatory" on-boarding journey in edit mode
    And User toggles unit types of height to fill weight in Feet
    When User types "4" in input box for question "Feet" at "BMIBodyShape" screen
    And User types "0" in input box for question "Inches" at "BMIBodyShape" screen
    Then User should not see an error message to enter a valid value
    And User should see a non zero BMI score in BMI chart

  @HLI-958:8 @HLI-958 @Regression
  Scenario: User provides height equal to minimum value
    Given User has logged in HLI as UserType "onboardingUser"
    And User click on cancel icon of new bookmark
    And User opens "BMI" questionnaires of "Mandatory" on-boarding journey in edit mode
    And User toggles unit types of height to fill weight in Feet
    When User types "7" in input box for question "Feet" at "BMIBodyShape" screen
    And User types "0" in input box for question "Inches" at "BMIBodyShape" screen
    Then User should not see an error message to enter a valid value
    And User should see a non zero BMI score in BMI chart