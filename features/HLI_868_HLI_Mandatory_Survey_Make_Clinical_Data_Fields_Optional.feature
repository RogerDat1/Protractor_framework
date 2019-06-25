Feature: HLI_868_HLI_Mandatory_Survey_Make_Clinical_Data_Fields_Optional
  As a User I may not have the clinical data required for HealthyLives mandatory survey
  readily and would prefer to skip such questions to get to my Health score


  @HLI-868:1 @HLI-868 @Underdev
  Scenario: Blood Pressure fields as optional on BLOOD PRESSURE screen
    Given User has logged in HLI as UserType "onboardingUser"
    And User click on cancel icon of new bookmark
    And User navigates to "BLOOD PRESSURE" screen of Onboarding journey
    Then User see answer input box for question "systolic" of "BloodPressure" screen
    When User clears text box for field "systolic" of "BloodPressure" screen
    And Text box bottom color for field "systolic" of "BloodPressure" screen should be blue (Non-mandatory field)
    And User see answer input box for question "diastolic" of "BloodPressure" screen
    When User clears text box for field "diastolic" of "BloodPressure" screen
    And Text box bottom color for field "diastolic" of "BloodPressure" screen should be blue (Non-mandatory field)


  @HLI-868:2 @HLI-868 @Underdev
  Scenario: Cholesterol fields fields as optional on BLOOD PRESSURE screen
    Given User has logged in HLI as UserType "onboardingUser"
    And User click on cancel icon of new bookmark
    And User navigates to "BLOOD PRESSURE" screen of Onboarding journey
    Then User see answer input box for question "Triglycerides" of "BloodPressure" screen
    When User clears text box for field "Triglycerides" of "BloodPressure" screen
    Then Text box bottom color for field "Triglycerides" of "BloodPressure" screen should be blue (Non-mandatory field)
    And User see answer input box for question "LDLCholesterol" of "BloodPressure" screen
    When User clears text box for field "LDLCholesterol" of "BloodPressure" screen
    Then Text box bottom color for field "LDLCholesterol" of "BloodPressure" screen should be blue (Non-mandatory field)
    And User see answer input box for question "HDLCholesterol" of "BloodPressure" screen
    When User clears text box for field "HDLCholesterol" of "BloodPressure" screen
    Then Text box bottom color for field "HDLCholesterol" of "BloodPressure" screen should be blue (Non-mandatory field)
    And User see answer input box for question "TotalCholesterol" of "BloodPressure" screen
    When User clears text box for field "TotalCholesterol" of "BloodPressure" screen
    Then Text box bottom color for field "TotalCholesterol" of "BloodPressure" screen should be blue (Non-mandatory field)


  @HLI-868:3 @HLI-868 @Underdev
  Scenario: Verify status of Next button on BLOOD PRESSURE screen
    Given User has logged in HLI as UserType "onboardingUser"
    And User click on cancel icon of new bookmark
    And User navigates to "BLOOD PRESSURE" screen of Onboarding journey
    When User clears text box for field "Triglycerides" of "BloodPressure" screen
    And User clears text box for field "systolic" of "BloodPressure" screen
    And User clears text box for field "diastolic" of "BloodPressure" screen
    And User clears text box for field "LDLCholesterol" of "BloodPressure" screen
    And User clears text box for field "HDLCholesterol" of "BloodPressure" screen
    And User clears text box for field "TotalCholesterol" of "BloodPressure" screen
    Then Next button at "BloodPressure" screen should be enable


  @HLI-868:4 @HLI-868 @Underdev
  Scenario: Fasting Glucose fields as optional on BLOOD PRESSURE screen
    Given User has logged in HLI as UserType "onboardingUser"
    And User click on cancel icon of new bookmark
    And User navigates to "NUTRITION" screen of Onboarding journey
    Then User see answer input box for question "GlucoseLevel" of "Nutrition" screen
    When User clears text box for field "GlucoseLevel" of "Nutrition" screen
    And Text box bottom color for field "GlucoseLevel" of "Nutrition" screen should be blue (Non-mandatory field)

  @HLI-868:5 @HLI-868 @Underdev
  Scenario: Fasting Glucose fields as optional on BLOOD PRESSURE screen
    Given User has logged in HLI as UserType "onboardingUser"
    And User click on cancel icon of new bookmark
    And User navigates to "NUTRITION" screen of Onboarding journey
    When User clears text box for field "GlucoseLevel" of "Nutrition" screen
    Then Next button at "BloodPressure" screen should be enable
