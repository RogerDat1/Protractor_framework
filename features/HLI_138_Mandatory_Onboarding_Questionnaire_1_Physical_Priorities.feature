Feature: HLI_138_Mandatory_Onboarding_Questionnaire_1_Physical_Priorities
  As a User completing Healthy Lives survey, I want to priorities areas of my physical health so that I can
  get personalized goals and recommendations in areas of my interest


  @HLI-138:1 @HLI-138 @Regression @Smoke
  Scenario: Physical Priorities Screen Design
    Given User has logged in HLI as UserType "onboardingUser"
    And User click on cancel icon of new bookmark
    And User navigates to "PHYSICAL PRIORITIES" screen of Onboarding journey
    Then User see "PhysicalPriorities" header as expected
    And User see "PhysicalPriorities" description as expected
    And User see "PhysicalPriorities" screen number as expected
    And User see "PhysicalPriorities" Next button
    And User see "PhysicalPriorities" Previous button
    And User see "PhysicalPriorities" Connect an App/Tracker button
    And User see "PhysicalPriorities" close button

  @HLI-138:2 @HLI-138 @Regression
  Scenario: Physical Priorities Name
    Given User has logged in HLI as UserType "onboardingUser"
    And User click on cancel icon of new bookmark
    And User navigates to "PHYSICAL PRIORITIES" screen of Onboarding journey
    Then User should see "Nutrition" as a physical priority at "PhysicalPriorities" screen
    And User should see "Fitness" as a physical priority at "PhysicalPriorities" screen
    And User should see "HeartHealth" as a physical priority at "PhysicalPriorities" screen
    And User should see "SubstanceUsage" as a physical priority at "PhysicalPriorities" screen
    And User should see "BMI" as a physical priority at "PhysicalPriorities" screen

  @HLI-138:3 @HLI-138 @Regression
  Scenario: Physical Priorities Description When User Clicks On Any Priority
    Given User has logged in HLI as UserType "onboardingUser"
    And User click on cancel icon of new bookmark
    And User navigates to "PHYSICAL PRIORITIES" screen of Onboarding journey
    When User clicks on "Nutrition" physical priority at "PhysicalPriorities" screen
    Then User should see physical priority "Nutrition" header below at "PhysicalPriorities" screen
    And User should see physical priority "Nutrition" description below at "PhysicalPriorities" screen
    When User clicks on "Fitness" physical priority at "PhysicalPriorities" screen
    Then User should see physical priority "Fitness" header below at "PhysicalPriorities" screen
    And User should see physical priority "Fitness" description below at "PhysicalPriorities" screen
    When User clicks on "HeartHealth" physical priority at "PhysicalPriorities" screen
    Then User should see physical priority "HeartHealth" header below at "PhysicalPriorities" screen
    And User should see physical priority "HeartHealth" description below at "PhysicalPriorities" screen
    When User clicks on "SubstanceUsage" physical priority at "PhysicalPriorities" screen
    Then User should see physical priority "SubstanceUsage" header below at "PhysicalPriorities" screen
    And User should see physical priority "SubstanceUsage" description below at "PhysicalPriorities" screen
    When User clicks on "BMI" physical priority at "PhysicalPriorities" screen
    Then User should see physical priority "BMI" header below at "PhysicalPriorities" screen
    And User should see physical priority "BMI" description below at "PhysicalPriorities" screen


  @HLI-138:4 @HLI-138 @Regression
  Scenario: Drag And Drop Physical Priorities
    Given User has logged in HLI as UserType "onboardingUser"
    And User click on cancel icon of new bookmark
    And User navigates to "PHYSICAL PRIORITIES" screen of Onboarding journey
    Then User see existing order of physical priorities at "PhysicalPriorities" screen
    And User drags a physical priority and drop at "PhysicalPriorities" screen
    And User clicks on Next button of "PhysicalPriorities" screen
    And User clicks on Previous button of "PhysicalPriorities" screen
    Then User see new order of physical priorities at "PhysicalPriorities" screen
    And Existing and new order should be different at Physical Priorities screen

  @HLI-138:5 @HLI-138 @Regression
  Scenario: User clicks on Previous button
    Given User has logged in HLI as UserType "onboardingUser"
    And User click on cancel icon of new bookmark
    And User navigates to "PHYSICAL PRIORITIES" screen of Onboarding journey
    When User clicks on Previous button of "PhysicalPriorities" screen
    Then User should be navigated to Health age page


  @HLI-138:6 @HLI-138 @Regression
  Scenario: User clicks on Next button
    Given User has logged in HLI as UserType "onboardingUser"
    And User click on cancel icon of new bookmark
    And User navigates to "PHYSICAL PRIORITIES" screen of Onboarding journey
    When User clicks on Next button of "PhysicalPriorities" screen
    Then User should see screen with header "BODY MASS INDEX"

  @HLI-138:7 @HLI-138 @Regression
  Scenario: User clicks on Close button
    Given User has logged in HLI as UserType "onboardingUser"
    And User click on cancel icon of new bookmark
    And User navigates to "PHYSICAL PRIORITIES" screen of Onboarding journey
    When User clicks on Close button of "PhysicalPriorities" screen
    Then User should be navigated to Health age page

  @HLI-138:8 @HLI-138 @Regression
  Scenario: Default order of physical priorities
    Given User has logged in HLI as UserType "userWithDefaultPhysicalPriority"
    And User click on cancel icon of new bookmark
    And User navigates to "PHYSICAL PRIORITIES" screen of Onboarding journey
    Then User see default order of physical priorities at "PhysicalPriorities" screen

  @HLI-138:9 @HLI-138 @Regression
  Scenario: User clicks on Next button without modifying default order of physical priorities
    Given User has logged in HLI as UserType "userWithDefaultPhysicalPriority"
    And User click on cancel icon of new bookmark
    And User navigates to "PHYSICAL PRIORITIES" screen of Onboarding journey
    When User clicks on next without modifying default order of physical priorities at "PhysicalPriorities" screen
    Then User should see screen with header "BODY MASS INDEX"

  @HLI-138:10 @HLI-138 @NeedExtraSetup
  Scenario: Physical Priorities submission
    When User clicks on Previous button of "PhysicalPriorities" screen
    Then User should be navigated to Welcome screen














