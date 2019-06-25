Feature: HLI_69_Health_Module_Health_zoom_level_3_webpage
  As a User I want to be able to track my health metrics over a period of time so that
  I can make positive changes for my health from the trends observed

  Background:
    Given User has logged in HLI as UserType "basicUser"
    And User click on cancel icon of new bookmark
    And   User navigates to health Module

  @HLI-69:1 @HLI-69 @Regression @Smoke
  Scenario: User accesses Zoom Level 2 on Health Chart
    Then  User clicks on "Biometrics" in zoom level one
    And   User should see a view details option for weight
    When  User should see a view details option for HeartRate

  @HLI-69:2 @HLI-69 @Regression @Smoke
  Scenario: User accesses Zoom Level 2 on Health Chart
    Then  User clicks on "Fitness" in zoom level one
    And   User should see a view details option for stariFlight
    When  User should see a view details option for steps
    When  User should see a view details option for CaloriesBurned
    When  User should see a view details option for Distance

  @HLI-69:3 @HLI-69 @Regression
  Scenario: User clicks on a Weight data metric with Zoom 3 enabled
    When  User clicks on "Biometrics" in zoom level one
    Then   User should see a view details option for "Weight"
    When  User clicks on view details option for "Weight"
    Then User should see "Weight" details at zoom level 3
    And   Page should include graphical presentation of User's data over a weekly by default
    And Page should include graphical presentation of User's data over a month
    And Page should include graphical presentation of User's data over a year
    When   User should allow to navigate back into primary Zoom 2 metric
    Then User should be navigated to zoom level 2 of "Biometrics"

  @HLI-69:4 @HLI-69 @Regression
  Scenario: User clicks on a HeartRate data metric with Zoom 3 enabled
    When  User clicks on "Biometrics" in zoom level one
    Then   User should see a view details option for "HeartRate"
    When  User clicks on view details option for "HeartRate"
    Then User should see "HeartRate" details at zoom level 3
    And   Page should include graphical presentation of User's data over a weekly by default
    And Page should include graphical presentation of User's data over a month
    And Page should include graphical presentation of User's data over a year
    When   User should allow to navigate back into primary Zoom 2 metric
    Then User should be navigated to zoom level 2 of "Biometrics"

  @HLI-69:5 @HLI-69 @Regression
  Scenario: User clicks on a StairsClimbed data metric with Zoom 3 enabled
    When  User clicks on "Fitness" in zoom level one
    Then   User should see a view details option for "StairsClimbed"
    When  User clicks on view details option for "StairsClimbed"
    Then User should see "StairsClimbed" details at zoom level 3
    And   Page should include graphical presentation of User's data over a weekly by default
    And Page should include graphical presentation of User's data over a month
    And Page should include graphical presentation of User's data over a year
    When   User should allow to navigate back into primary Zoom 2 metric
    Then User should be navigated to zoom level 2 of "Fitness"


  @HLI-69:6 @HLI-69 @Regression
  Scenario: User clicks on a CaloriesBurned data metric with Zoom 3 enabled
    When  User clicks on "Fitness" in zoom level one
    Then   User should see a view details option for "CaloriesBurned"
    When  User clicks on view details option for "CaloriesBurned"
    Then User should see "CaloriesBurned" details at zoom level 3
    And   Page should include graphical presentation of User's data over a weekly by default
    And Page should include graphical presentation of User's data over a month
    And Page should include graphical presentation of User's data over a year
    When   User should allow to navigate back into primary Zoom 2 metric
    Then User should be navigated to zoom level 2 of "Fitness"

  @HLI-69:7 @HLI-69 @Regression
  Scenario: User clicks on a Distance data metric with Zoom 3 enabled
    When  User clicks on "Fitness" in zoom level one
    Then   User should see a view details option for "Distance"
    When  User clicks on view details option for "Distance"
    Then User should see "Distance" details at zoom level 3
    And   Page should include graphical presentation of User's data over a weekly by default
    And Page should include graphical presentation of User's data over a month
    And Page should include graphical presentation of User's data over a year
    When   User should allow to navigate back into primary Zoom 2 metric
    Then User should be navigated to zoom level 2 of "Fitness"

  @HLI-69:8 @HLI-69 @Regression
  Scenario: User clicks on a Steps data metric with Zoom 3 enabled
    When  User clicks on "Fitness" in zoom level one
    Then   User should see a view details option for "Steps"
    When  User clicks on view details option for "Steps"
    Then User should see "Steps" details at zoom level 3
    And   Page should include graphical presentation of User's data over a weekly by default
    And Page should include graphical presentation of User's data over a month
    And Page should include graphical presentation of User's data over a year
    When   User should allow to navigate back into primary Zoom 2 metric
    Then User should be navigated to zoom level 2 of "Fitness"


