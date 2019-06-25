Feature: HLI_62_Notification_Centre_Icon_in_navigation_Default_state.feature
  As a user I would like to see actions and activity updates for me from an easily accessible location on HLI navigation.


  Background:
    Given User has logged in HLI as UserType "basicUser"

  @HLI-62:1
  Scenario: User Notification navigation default icon
    When  User accesses the dashboard
    Then  User will see notification centre icon on navigation header
    And   Icon will be on left side of profile icon
    And   Icon will capture a count of unread notifications for user


  @HLI-62:2
  Scenario: Notification are not allowed for third-party module
    Given user has logged in HLI
    When  user accesses a Third-party module
    Then  user will not see notification centre icon on navigation header

