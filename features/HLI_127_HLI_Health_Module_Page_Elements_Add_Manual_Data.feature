Feature: HLI_127_HLI_Health_Module_Page_Elements_Add_Manual_Data
  As a User I would like to add data manually for metrics that I am not tracking through an App or are not trackable through an App

  @HLI-127:1 @HLI-127 @Regression @Smoke
  Scenario: Verify Presence Of "Record Data Manually" Button At Health Page
    Given User has logged in HLI as UserType "onboardingUser"
    And User click on cancel icon of new bookmark
    When User navigates to "HealthAge" page from burger menu
    Then User should view "RecordDataManually" button at "Health_Age" screen


  @HLI-127:2 @HLI-127 @Regression
  Scenario: Verify Default Values Of "Category" And "Metric" Drop down
    Given User has logged in HLI as UserType "onboardingUser"
    And User click on cancel icon of new bookmark
    When User navigates to "HealthAge" page from burger menu
    Then User should view "RecordDataManually" button at "Health_Age" screen
    And User clicks on "RecordDataManually" button at "Health_Age" screen
    Then User should see "Category" dropdown at "RecordData" screen
    And User should see "Metric" dropdown at "RecordData" screen
    And User should see default answer in select dropdown for question "Category" at "RecordData" screen
    And User should see default answer in select dropdown for question "Category" at "RecordData" screen


  @HLI-127:3 @HLI-127 @Regression @Smoke
  Scenario: Update alcohol manually
    Given User has logged in HLI as UserType "onboardingUser"
    And User click on cancel icon of new bookmark
    When User navigates to "HealthAge" page from burger menu
    Then User should view "RecordDataManually" button at "Health_Age" screen
    And User clicks on "RecordDataManually" button at "Health_Age" screen
    And User selects a value from drop down for question "Category" at "RecordData" screen
    And User selects a value from drop down for question "Metric" at "RecordData" screen
    And User clicks on "Next" button at "Screen_RecordData" screen
    And User clicks on "RecordManually" button at "Screen_RecordData" screen
    And User selects a value from drop down for question "Alcohol" at "RecordData" screen
    And User clicks on "SaveData" button at "Screen_RecordData" screen


  @HLI-127:4 @HLI-127 @Regression
  Scenario: Verify Updated alcohol value
    Given User has logged in HLI as UserType "onboardingUser"
    And User click on cancel icon of new bookmark
    When User navigates to "HealthAge" page from burger menu
    And User clicks on "Data" button at "Health_Age" screen
    And User clicks on "MandatoryQuestions" button at "Health_Age" screen
    And User clicks on "EditIconOfSubstanceUsage" button at "Health_Age" screen
    And User verify checked checkbox for question "5PlusUnits" of "SubstanceUsage" screen






