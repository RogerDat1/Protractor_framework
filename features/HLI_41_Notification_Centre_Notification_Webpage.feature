Feature: HLI_41_Notification_Centre_Notification_Webpage
  As a user I would like easy and quick reference to all action alerts and activity updates related to me within HLI.

  Scenario: User notification webpage for Dashboard
    Given User has logged in HLI as UserType "basicUser"
    And  The user has clicked on the notification icon on the Dashboard
    Then  The user should see a link to go to the Notification Centre in the expanded dropdown window
    Then  The user clicks on the link to go to the Notification Centre
    Then  The user is directed to a page to view all notifications


  Scenario: User notification webpage for boarding screen
    Given User has logged in HLI as UserType "basicUser"
    And   The user has clicked on the notification icon on Health On boarding screens or sandbox
    Then  The user should see a link to go to the Notification Centre in the expanded dropdown window
    Then  The user clicks on the link to go to the Notification Centre
    Then  The user is directed to a page to view all notifications

  Scenario: User notification webpage for help & contacts
    Given User has logged in HLI as UserType "basicUser"
    And   The user has clicked on the notification icon on Help & Contacts page
    Then  The user should see a link to go to the Notification Centre in the expanded dropdown window
    Then  The user clicks on the link to go to the Notification Centre
    Then  The user is directed to a page to view all notifications

  Scenario: User notification webpage for Article and Videos
    Given User has logged in HLI as UserType "basicUser"
    And   The user has clicked on the notification icon on Articles & Videos page
    Then  The user should see a link to go to the Notification Centre in the expanded dropdown window
    Then  The user clicks on the link to go to the Notification Centre
    Then  The user is directed to a page to view all notifications
