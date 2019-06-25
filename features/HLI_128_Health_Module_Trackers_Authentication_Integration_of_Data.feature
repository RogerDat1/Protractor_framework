Feature: HLI_128_Health_Module_Trackers_Authentication_Integration_of_Data.feature
  As a User I would like to have the availability of my health data from Tracker/Apps in HLI following appropriate
  authentication steps to ensure my data security.

  Background:
    Given User has logged in HLI as UserType "basicUser"

  @HLI-128
  Scenario: User metrics from the app
    When  User clicks on navigation menu
    Then  User should see link to Health & Age Contacts module
    And   User clicks on Health & Age module
    Then  The User can view the Homepage for Health
    And   The User records data for specific health metrics
    Then  The User accesses the Apps tab on the Health Summary page
    Then  The User should be able to map Trackers or apps for health metrics tracking
    And   The system should prompt for appropriate authentication when mapping the metrics from the app
    And   The health metrics should be refreshed on scheduled basis in HLI to capture most current data
    And   The User disconnects a metric tracking from Tracker or apps
    And   The User disconnects the Tracker or apps as a tracker
    Then  The System should discontinue the tracking of metrics from the Tracker or App per the current logic for Keep Remove data

