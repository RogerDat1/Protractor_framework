Feature: HLI_126_Health_Module_Page_Elements_Record_Data

  As a User I would like to add data manually for metrics that
  I am not tracking through an App or are not traceable through an App

  Background:
    Given User has logged in HLI as UserType "basicUser"

  @HLI-126
  Scenario: Onboarding journey for health
    When  User clicks on navigation menu
    Then  User should see link to Health & Age Contacts module
    And   User clicks on Health & Age module
    Then  The User can view the Homepage for Health
    And   User can view a button at the left side of the page for 'Record Data'
    And   The User clicks on this button
    Then  System should open a pop-up box for Record Data
    Then  User has to see select a category
    And   User has to see select a Metric
    And   User has to click on cancle
    Then  The User has the option to record the metric through an App or Manually
    And   The User chooses to record the data through an App
    Then  User can click on an App option to connect
    #And   System will open the Add App Page with the Metric in question pre-selected


