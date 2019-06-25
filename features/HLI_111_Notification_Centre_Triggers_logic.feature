Feature: HLI_111_Notification_Centre_Triggers_logic.feature
  As a user I would like to see alerts for appropriate actions and updates related to me within HLI

  @HLI-111:1
  Scenario: Health Optional Survey for user
    Given User has logged in HLI as UserType "incomplete Optional Survey user"
    Then  User should see the optional Survey notification "Notification1"
    Then  User should abe to click on the notification
    Then  User should direct to optional survey Page
    Then  User should complete overall optional screen
    And   User click on next button in overall optional screen
    Then  Notification should go from notification tab

  @HLI-111:2
  Scenario: Health Optional Survey for user
    Given User has logged in HLI as UserType "incomplete Optional Survey"
    Then  User should see the optional Survey notification "Notification2"
    Then  User should abe to click on the notification
    Then  User should direct to optional survey Page
    Then  User should complete  Financial Pressures Optional screen
    And   User click on next button in  Financial Pressures Optional screen
    Then  Notification should go from notification tab


  @HLI-111:3
  Scenario: Health Optional Survey for user
    Given User has logged in HLI as UserType "incomplete Optional Survey"
    Then  User has not subscribed to any of the HLI article categories
    Then  User should see the article notification "Notification3"
    Then  User should abe to click on the notification
    Then  The user has clicked on Articles & Videos page
    Then  User click on Health tab
    And   User click on subscribe for any article
    Then  Notification should go from notification tab

  @HLI-111:4
  Scenario: Health Optional Survey for user
    Given User has logged in HLI as UserType "incomplete Optional Survey"
    Then  User should see the  new article notification "Notification4"
    Then  User should abe to click on the notification
    Then  The user should navigated to article category
    Then  Notification should go from notification tab

  @HLI-111:5
  Scenario: Health Optional Survey for user
    Given User has logged in HLI as UserType "incomplete Optional Survey"
    Then  User should see the  new health new app notification "Notification5"
    Then  User should abe to click on the notification
    Then  The user should navigated to article category
    Then  Notification should go from notification tab