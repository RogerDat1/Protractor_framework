Feature: HLI_38_Notification_Centre_ Icon_In_Navigation_When_Clicked.feature
  As a user I would like to see the action alerts and activity updates related to me from an easily accessible location on the HLI navigation.

  @HLI-38:1
  Scenario: User alert and activity updates
    Given User has logged in HLI as UserType "basicUser"
    And   The user view the navigation header
    And   The user clicks on the notification icon
    Then  The system displays the high level activities or alerts for the user in a dropdown list
    And   The notifications are listed in descending order of publish date
    And   The most recent notification is displayed at the top of the list
    And   A maximum of 5 notifications are displayed at a time when the count is greater than 5

  @HLI-38:2
  Scenario: User notification expanded list
    Given User has logged in HLI as UserType "basicUser"
    And   The user view the navigation header
    And   The user clicks on the notification icon
    Then  The list is expanded
    And   System will close the dropdown

  @HLI-38:3
  Scenario: User notification expanded list
    Given User has logged in HLI as UserType "basicUser"
    And   The user view the navigation header
    And   The user clicks on the notification icon
    And   Header text capturing count of new or unseen notifications only when available
    And   Text should not appear when no new or unseen notifications are available

  @HLI-38:4
  Scenario: User notification expanded list
    Given User has logged in HLI as UserType "basicUser"
    And   The user view the navigation header
    And   The user clicks on the notification icon
    And   Display a maximum of 5 notifications at a time when the count is greater than 5 else all notifications
    And   Notification is displayed in a standard display structure

  @HLI-38:5
  Scenario: User notification expanded list
    Given User has logged in HLI as UserType "basicUser"
    And   The user view the navigation header
    And   The user clicks on the notification icon
    And   User Should see Action image
    And   User Should see Action Title
    And   User Should see Action subtext
    And   User Should see date in format 9th Sept 2016
    And   User should be displayed in grey background while the notifications that have been unseen
    And   User should be displayed in white background while the notifications that have been seen
