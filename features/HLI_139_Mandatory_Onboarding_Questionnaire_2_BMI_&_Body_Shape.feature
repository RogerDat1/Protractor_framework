Feature: HLI_139_Mandatory_Onboarding_Questionnaire_2_BMI_&_Body_Shape
  As a User completing Healthy Lives survey, I want to provide my height, weight & other body shape data so that my BMI can be part of my overall Health score


  @HLI-139:1 @HLI-139 @Regression @Smoke
  Scenario: BODY MASS INDEX Screen Design
    Given User has logged in HLI as UserType "onboardingUser"
    And User click on cancel icon of new bookmark
    And User navigates to "BMI" screen of Onboarding journey
    Then User see "BMIBodyShape" header as expected
    And User see "BMIBodyShape" description as expected
    And User see "BMIBodyShape" screen number as expected
    And User see "BMIBodyShape" Next button
    And User see "BMIBodyShape" Previous button
    And User see "BMIBodyShape" Connect an App/Tracker button
    And User see "BMIBodyShape" close button

  @HLI-139:2 @HLI-139 @Regression
  Scenario: BODY MASS INDEX Questionnaire Design
    Given User has logged in HLI as UserType "onboardingUser"
    And User click on cancel icon of new bookmark
    And User navigates to "BMI" screen of Onboarding journey
    Then User should see question related to "Weight" at "BMIBodyShape" screen
    And User should see question related to "Height" at "BMIBodyShape" screen
    And User should see question related to "WaistCircumference" at "BMIBodyShape" screen
    And User should see question related to "BodyShape" at "BMIBodyShape" screen
    And User should see question related to "ChangeBodyShape" at "BMIBodyShape" screen
    And User should see a text box for question "Stones" at "BMIBodyShape" screen
    And User should see a text box for question "Lbs" at "BMIBodyShape" screen
    And User should see a text box for question "Feet" at "BMIBodyShape" screen
    And User should see a text box for question "Inches" at "BMIBodyShape" screen
    And User should see a drop down for question "WaistCircumference" at "BMIBodyShape" screen
    And User should see available options in drop down for question "WaistCircumference" at "BMIBodyShape" screen
    And User should see a toggle button for question "ChangeBodyShape" at "BMIBodyShape" screen
    And User should see a toggle button for question "WeightUnits" at "BMIBodyShape" screen
    And User should see a toggle button for question "HeightUnits" at "BMIBodyShape" screen
    And User should see a header for question "BodyShape" at "BMIBodyShape" screen


  @HLI-139:3 @HLI-139 @Regression
  Scenario: BODY MASS INDEX Questionnaire For Body Shape For Female
    Given User has logged in HLI as UserType "onboardingUserFemale"
    And User click on cancel icon of new bookmark
    And User navigates to "BMI" screen of Onboarding journey
    Then User should see body shape as "Triangle" at "BMIBodyShape" screen
    And User should see body shape as "Square" at "BMIBodyShape" screen
    And User should see body shape as "Rectangle" at "BMIBodyShape" screen
    And User should see body shape as "Hourglass" at "BMIBodyShape" screen
    And User should see body shape as "Pear" at "BMIBodyShape" screen
    When User clicks on body shape as "Triangle" at "BMIBodyShape" screen
    Then User should see header info about body shape as "Triangle" at "BMIBodyShape" screen
    And User should see description info about body shape as "Triangle" at "BMIBodyShape" screen
    When User clicks on body shape as "Square" at "BMIBodyShape" screen
    Then User should see header info about body shape as "Square" at "BMIBodyShape" screen
    And User should see description info about body shape as "Square" at "BMIBodyShape" screen
    When User clicks on body shape as "Rectangle" at "BMIBodyShape" screen
    Then User should see header info about body shape as "Rectangle" at "BMIBodyShape" screen
    And User should see description info about body shape as "Rectangle" at "BMIBodyShape" screen
    When User clicks on body shape as "Hourglass" at "BMIBodyShape" screen
    Then User should see header info about body shape as "Hourglass" at "BMIBodyShape" screen
    And User should see description info about body shape as "Hourglass" at "BMIBodyShape" screen
    When User clicks on body shape as "Pear" at "BMIBodyShape" screen
    Then User should see header info about body shape as "Pear" at "BMIBodyShape" screen
    And User should see description info about body shape as "Pear" at "BMIBodyShape" screen


  @HLI-139:4 @HLI-139 @Regression
  Scenario: BODY MASS INDEX Questionnaire For Body Shape For Male
    Given User has logged in HLI as UserType "onboardingUserMale"
    And User click on cancel icon of new bookmark
    And User navigates to "BMI" screen of Onboarding journey
    Then User should see body shape as "Triangle" at "BMIBodyShape" screen
    And User should see body shape as "Square" at "BMIBodyShape" screen
    And User should see body shape as "Rectangle" at "BMIBodyShape" screen
    And User should see body shape as "Oval" at "BMIBodyShape" screen
    When User clicks on body shape as "Triangle" at "BMIBodyShape" screen
    Then User should see header info about body shape as "Triangle" at "BMIBodyShape" screen
    And User should see description info about body shape as "Triangle" at "BMIBodyShape" screen
    When User clicks on body shape as "Square" at "BMIBodyShape" screen
    Then User should see header info about body shape as "Square" at "BMIBodyShape" screen
    And User should see description info about body shape as "Square" at "BMIBodyShape" screen
    When User clicks on body shape as "Rectangle" at "BMIBodyShape" screen
    Then User should see header info about body shape as "Rectangle" at "BMIBodyShape" screen
    And User should see description info about body shape as "Rectangle" at "BMIBodyShape" screen
    When User clicks on body shape as "Oval" at "BMIBodyShape" screen
    Then User should see header info about body shape as "Oval" at "BMIBodyShape" screen
    And User should see description info about body shape as "Oval" at "BMIBodyShape" screen


  @HLI-139:5 @HLI-139 @Regression
  Scenario: BMI Calculation For Obese
    Given User has logged in HLI as UserType "onboardingUser"
    And User click on cancel icon of new bookmark
    And User navigates to "BMI" screen of Onboarding journey
    When User provides "Obese" value for field "Stones" at "BMIBodyShape" screen
    And User provides "Obese" value for field "Lbs" at "BMIBodyShape" screen
    And User provides "Obese" value for field "Feet" at "BMIBodyShape" screen
    And User provides "Obese" value for field "Inches" at "BMIBodyShape" screen
    Then User should see BMI Result value for "Obese" at "BMIBodyShape" screen
    And User should see label as "BmiScore" at "BMIBodyShape" screen
    And User should see BMI SCORE as "Obese" at "BMIBodyShape" screen
    And User should see BMI SCORE as "Obese" color at "BMIBodyShape" screen

  @HLI-139:6 @HLI-139 @Regression
  Scenario: BMI Calculation For Overweight
    Given User has logged in HLI as UserType "onboardingUser"
    And User click on cancel icon of new bookmark
    And User navigates to "BMI" screen of Onboarding journey
    When User provides "Overweight" value for field "Stones" at "BMIBodyShape" screen
    And User provides "Overweight" value for field "Lbs" at "BMIBodyShape" screen
    And User provides "Overweight" value for field "Feet" at "BMIBodyShape" screen
    And User provides "Overweight" value for field "Inches" at "BMIBodyShape" screen
    Then User should see BMI Result value for "Overweight" at "BMIBodyShape" screen
    And User should see label as "BmiScore" at "BMIBodyShape" screen
    And User should see BMI SCORE as "Overweight" at "BMIBodyShape" screen
    And User should see BMI SCORE as "Overweight" color at "BMIBodyShape" screen

  @HLI-139:7 @HLI-139 @Regression
  Scenario: BMI Calculation For Overweight
    Given User has logged in HLI as UserType "onboardingUser"
    And User click on cancel icon of new bookmark
    And User navigates to "BMI" screen of Onboarding journey
    When User provides "HealthyWeight" value for field "Stones" at "BMIBodyShape" screen
    And User provides "HealthyWeight" value for field "Lbs" at "BMIBodyShape" screen
    And User provides "HealthyWeight" value for field "Feet" at "BMIBodyShape" screen
    And User provides "HealthyWeight" value for field "Inches" at "BMIBodyShape" screen
    Then User should see BMI Result value for "HealthyWeight" at "BMIBodyShape" screen
    And User should see label as "BmiScore" at "BMIBodyShape" screen
    And User should see BMI SCORE as "HealthyWeight" at "BMIBodyShape" screen
    And User should see BMI SCORE as "HealthyWeight" color at "BMIBodyShape" screen


  @HLI-139:8 @HLI-139 @Regression
  Scenario: BMI Calculation For Overweight
    Given User has logged in HLI as UserType "onboardingUser"
    And User click on cancel icon of new bookmark
    And User navigates to "BMI" screen of Onboarding journey
    When User provides "UnderWeight" value for field "Stones" at "BMIBodyShape" screen
    And User provides "UnderWeight" value for field "Lbs" at "BMIBodyShape" screen
    And User provides "UnderWeight" value for field "Feet" at "BMIBodyShape" screen
    And User provides "UnderWeight" value for field "Inches" at "BMIBodyShape" screen
    Then User should see BMI Result value for "UnderWeight" at "BMIBodyShape" screen
    And User should see label as "BmiScore" at "BMIBodyShape" screen
    And User should see BMI SCORE as "UnderWeight" at "BMIBodyShape" screen
    And User should see BMI SCORE as "UnderWeight" color at "BMIBodyShape" screen

  @HLI-139:9 @HLI-139 @Regression
  Scenario: BMI Calculation For Overweight
    Given User has logged in HLI as UserType "onboardingUser"
    And User click on cancel icon of new bookmark
    And User navigates to "BMI" screen of Onboarding journey
    When User provides "MoreThanUnderWeight" value for field "Stones" at "BMIBodyShape" screen
    And User provides "MoreThanUnderWeight" value for field "Lbs" at "BMIBodyShape" screen
    And User provides "MoreThanUnderWeight" value for field "Feet" at "BMIBodyShape" screen
    And User provides "MoreThanUnderWeight" value for field "Inches" at "BMIBodyShape" screen
    Then User should see BMI Result value for "MoreThanUnderWeight" at "BMIBodyShape" screen
    And User should see label as "BmiScore" at "BMIBodyShape" screen
    And User should see BMI SCORE as "MoreThanUnderWeight" at "BMIBodyShape" screen
    And User should see BMI SCORE as "MoreThanUnderWeight" color at "BMIBodyShape" screen

  @HLI-139:10 @HLI-139 @Regression
  Scenario: User answers all Questionnaire at BMI screen
    Given User has logged in HLI as UserType "onboardingUser"
    And User click on cancel icon of new bookmark
    And User navigates to "BMI" screen of Onboarding journey
    And User types value for field "Stones" of "BMIBodyShape" screen
    And User types value for field "Lbs" of "BMIBodyShape" screen
    And User types value for field "Feet" of "BMIBodyShape" screen
    And User types value for field "Inches" of "BMIBodyShape" screen
    And User selects a value from drop down for question "WaistCircumference" at "BMIBodyShape" screen
    And User selects a body shape for question "BodyShape" at "BMIBodyShape" screen
    #And User toggle Yes for question "ChangeBodyShape" on "ChangeBodyShape" screen
    And User clicks on Next button of "BMIBodyShape" screen
    And User clicks on Previous button of "BMIBodyShape" screen
    Then User verify typed value for field "Stones" of "BMIBodyShape" screen
    And User verify typed value for field "Lbs" of "BMIBodyShape" screen
    And User verify typed value for field "Feet" of "BMIBodyShape" screen
    And User verify typed value for field "Inches" of "BMIBodyShape" screen
    And User verify selected value for field "WaistCircumference" of "BMIBodyShape" screen
    And User see selected body shape for question "BodyShape" at "BMIBodyShape" screen
    #And User see toggled answer for question "ChangeBodyShape" on "ChangeBodyShape" screen

  @HLI-139:11 @HLI-139 @Regression
  Scenario: User verify height and weight preference
    Given User has logged in HLI as UserType "onboardingUser"
    And User click on cancel icon of new bookmark
    And User navigates to "BMI" screen of Onboarding journey
    When User toggles on "WeightUnits" at "BMIBodyShape" screen
    Then User see answer input box for question "Kgs" of "BMIBodyShape" screen
    When User toggles on "HeightUnits" at "BMIBodyShape" screen
    Then User see answer input box for question "Cms" of "BMIBodyShape" screen

  @HLI-139:12 @HLI-139 @Regression
  Scenario: User clicks on Previous button
    Given User has logged in HLI as UserType "onboardingUser"
    And User click on cancel icon of new bookmark
    And User navigates to "BMI" screen of Onboarding journey
    When User clicks on Previous button of "BMIBodyShape" screen
    Then User should see screen with header "PHYSICAL PRIORITIES"


  @HLI-139:13 @HLI-139 @Regression
  Scenario: User clicks on Next button
    Given User has logged in HLI as UserType "onboardingUser"
    And User click on cancel icon of new bookmark
    And User navigates to "BMI" screen of Onboarding journey
    When User clicks on Next button of "BMIBodyShape" screen
    Then User should see screen with header "ACTIVITY LEVEL"

  @HLI-139:14 @HLI-139 @Regression
  Scenario: User clicks on Close button
    Given User has logged in HLI as UserType "onboardingUser"
    And User click on cancel icon of new bookmark
    And User navigates to "BMI" screen of Onboarding journey
    When User clicks on Close button of "BMIBodyShape" screen
    Then User should be navigated to Health age page














