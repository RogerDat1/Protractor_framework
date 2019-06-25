Feature: HLI_233_First_Time_User_Journey_ Extra_Onboarding_Questionnaire_3_ Nutrition
  As a User completing Healthy Lives survey, I want to provide details about my eating habits so that it can be
  part of my overall Health score

  @HLI-233:1 @HLI-233 @Regression @Smoke
  Scenario: Nutrition Screen Design
    Given User has logged in HLI as UserType "onboardingUser"
    And User click on cancel icon of new bookmark
    And User navigates to "NUTRITION" screen of "Optional" Onboarding journey
    Then User see "OptionalNutrition" header as expected
    And User see "OptionalNutrition" description as expected
    And User see "OptionalNutrition" screen number as expected
    And User see "OptionalNutrition" Next button
    And User see "OptionalNutrition" Previous button
    And User see "OptionalNutrition" Connect an App/Tracker button
    And User see "OptionalNutrition" Save & Continue button

  @HLI-233:2 @HLI-233 @Regression
  Scenario: Nutrition Questionnaire Design
    Given User has logged in HLI as UserType "onboardingUser"
    And User click on cancel icon of new bookmark
    And User navigates to "NUTRITION" screen of "Optional" Onboarding journey
    Then User should see question related to "RateYourDiet" at "OptionalNutrition" screen
    And User should see question related to "DietSatisfied" at "OptionalNutrition" screen
    And User should see question related to "AdviceOnDiet" at "OptionalNutrition" screen
    And User should see question related to "AdviceOnBalancedMeal" at "OptionalNutrition" screen
    And User should see question related to "FoodIntolerancesAllergies" at "OptionalNutrition" screen
    And User should see question related to "ObserveRestrictedDiet" at "OptionalNutrition" screen
    And User should see question related to "TrackCalorieIntake" at "OptionalNutrition" screen
    And User should see question related to "HealthySnacksAtOffice" at "OptionalNutrition" screen
    And User should see question related to "CookUsingMainBaseIngredients" at "OptionalNutrition" screen
    And User should see question related to "EatPackagedConvenienceMeals" at "OptionalNutrition" screen
    And User should see question related to "EatPrepackagedStoreBoughtMeals" at "OptionalNutrition" screen
    And User should see a drop down for question "RateYourDiet" at "OptionalNutrition" screen
    And User should see available options in drop down for question "RateYourDiet" at "OptionalNutrition" screen
    And User should see a drop down for question "CookUsingMainBaseIngredients" at "OptionalNutrition" screen
    And User should see available options in below drop down for question "CookUsingMainBaseIngredients" at "OptionalNutrition" screen
    And User should see a drop down for question "EatPackagedConvenienceMeals" at "OptionalNutrition" screen
    And User should see available options in below drop down for question "EatPackagedConvenienceMeals" at "OptionalNutrition" screen
    And User should see a drop down for question "EatPrepackagedStoreBoughtMeals" at "OptionalNutrition" screen
    And User should see available options in below drop down for question "EatPrepackagedStoreBoughtMeals" at "OptionalNutrition" screen
    And User should see a toggle button for question "DietSatisfied" at "OptionalNutrition" screen
    And User should see a toggle button for question "AdviceOnDiet" at "OptionalNutrition" screen
    And User should see a toggle button for question "AdviceOnBalancedMeal" at "OptionalNutrition" screen
    And User should see a toggle button for question "FoodIntolerancesAllergies" at "OptionalNutrition" screen
    And User should see a toggle button for question "ObserveRestrictedDiet" at "OptionalNutrition" screen
    And User should see a toggle button for question "TrackCalorieIntake" at "OptionalNutrition" screen
    And User should see a toggle button for question "HealthySnacksAtOffice" at "OptionalNutrition" screen


  @HLI-233:3 @HLI-233 @Regression
  Scenario: User answers all Questionnaire at Nutrition screen
    Given User has logged in HLI as UserType "onboardingUser"
    And User click on cancel icon of new bookmark
    And User navigates to "NUTRITION" screen of "Optional" Onboarding journey
    And User selects a value from drop down for question "RateYourDiet" at "OptionalNutrition" screen
    And User toggle Yes for question "DietSatisfied" on "OptionalNutrition" screen
    And User toggle Yes for question "AdviceOnDiet" on "OptionalNutrition" screen
    And User toggle Yes for question "AdviceOnBalancedMeal" on "OptionalNutrition" screen
    And User toggle Yes for question "FoodIntolerancesAllergies" on "OptionalNutrition" screen
    And User toggle Yes for question "ObserveRestrictedDiet" on "OptionalNutrition" screen
    And User toggle Yes for question "TrackCalorieIntake" on "OptionalNutrition" screen
    And User toggle Yes for question "HealthySnacksAtOffice" on "OptionalNutrition" screen
    And User selects a value from drop down for question "CookUsingMainBaseIngredients" at "OptionalNutrition" screen
    And User selects a value from drop down for question "EatPackagedConvenienceMeals" at "OptionalNutrition" screen
    And User selects a value from drop down for question "EatPrepackagedStoreBoughtMeals" at "OptionalNutrition" screen
    When User clicks on Next button of "OptionalNutrition" screen
    And User clicks on Previous button of "OptionalNutrition" screen
    And User verify selected value for field "RateYourDiet" of "OptionalNutrition" screen
    And User see toggled answer as Yes for question "DietSatisfied" on "OptionalNutrition" screen
    And User see toggled answer as Yes for question "AdviceOnDiet" on "OptionalNutrition" screen
    And User see toggled answer as Yes for question "AdviceOnBalancedMeal" on "OptionalNutrition" screen
    And User see toggled answer as Yes for question "FoodIntolerancesAllergies" on "OptionalNutrition" screen
    And User see toggled answer as Yes for question "ObserveRestrictedDiet" on "OptionalNutrition" screen
    And User see toggled answer as Yes for question "TrackCalorieIntake" on "OptionalNutrition" screen
    And User see toggled answer as Yes for question "HealthySnacksAtOffice" on "OptionalNutrition" screen
    And User verify selected value for field "CookUsingMainBaseIngredients" of "OptionalNutrition" screen
    And User verify selected value for field "EatPackagedConvenienceMeals" of "OptionalNutrition" screen
    And User verify selected value for field "EatPrepackagedStoreBoughtMeals" of "OptionalNutrition" screen


  @HLI-233:4 @HLI-233 @Regression
  Scenario: User clicks on Previous button
    Given User has logged in HLI as UserType "onboardingUser"
    And User click on cancel icon of new bookmark
    And User navigates to "NUTRITION" screen of "Optional" Onboarding journey
    When User clicks on Previous button of "OptionalNutrition" screen
    Then User should see screen with header "OVERALL HEALTH"


  @HLI-233:5 @HLI-233 @Regression
  Scenario: User clicks on Next button
    Given User has logged in HLI as UserType "onboardingUser"
    And User click on cancel icon of new bookmark
    And User navigates to "NUTRITION" screen of "Optional" Onboarding journey
    When User clicks on Next button of "OptionalNutrition" screen
    Then User should see screen with header "NUTRITION"

  @HLI-233:6 @HLI-233 @Regression
  Scenario: User clicks on Save And Continue button
    Given User has logged in HLI as UserType "onboardingUser"
    And User click on cancel icon of new bookmark
    And User navigates to "NUTRITION" screen of "Optional" Onboarding journey
    When User clicks on Save & Continue button of "OptionalNutrition" screen
    Then User should be navigated to Health age page


  @HLI-233:6 @HLI-233 @OnDemand
  Scenario: Verify default answer for Questionnaire at Musculosketal screen
    Given User has logged in HLI as UserType "onboardingUser"
    And User click on cancel icon of new bookmark
    And User navigates to "NUTRITION" screen of "Optional" Onboarding journey
    Then User should see default answer in dropdown for question "RateYourDiet" at "OptionalNutrition" screen
    And User should see default answer in dropdown for question "CookUsingMainBaseIngredients" at "OptionalNutrition" screen
    And User should see default answer in dropdown for question "EatPackagedConvenienceMeals" at "OptionalNutrition" screen
    And User should see default answer in dropdown for question "EatPrepackagedStoreBoughtMeals" at "OptionalNutrition" screen
    And User should see default answer in toggle for question "DietSatisfied" at "OptionalNutrition" screen
    And User should see default answer in toggle for question "AdviceOnDiet" at "OptionalNutrition" screen
    And User should see default answer in toggle for question "AdviceOnBalancedMeal" at "OptionalNutrition" screen
    And User should see default answer in toggle for question "FoodIntolerancesAllergies" at "OptionalNutrition" screen
    And User should see default answer in toggle for question "ObserveRestrictedDiet" at "OptionalNutrition" screen
    And User should see default answer in toggle for question "TrackCalorieIntake" at "OptionalNutrition" screen
    And User should see default answer in toggle for question "HealthySnacksAtOffice" at "OptionalNutrition" screen


  @HLI-233:7 @HLI-233 @OnDemand
  Scenario: Verification of mandatory fields at Musculosketal screen
    Given User has logged in HLI as UserType "onboardingUser"
    And User click on cancel icon of new bookmark
    And User navigates to "NUTRITION" screen of "Optional" Onboarding journey
    When User has not answered any question at "OptionalNutrition" screen
    When User clicks on Next button of "OptionalNutrition" screen
    Then User should see screen with header "NUTRITION"




