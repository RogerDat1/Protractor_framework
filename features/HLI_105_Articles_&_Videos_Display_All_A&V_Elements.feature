Feature: HLI_105_Articles_&_Videos_Display_All_A&V_Elements
  As a User I would like to be presented with all relevant items on the Articles and Video Homepage so
  that I have a full view of what is available

  Background:
    Given User has logged in HLI as UserType "basicUser"
    Then User sees Burger menu icon
    When I click the top left burger menu icon
    When User clicks on "ArticlesAndVideos" submenu from burger menu

  @HLI-105:1 @HLI-105 @Regression @Smoke
  Scenario: The header page should have the correct icons displayed
    When I am on the homepage view
    Then I should see and verify Menu
    Then I should see and verify HLI icon
    Then I should see and verify your profile
    Then I should see and verify all 2 catagory

  @HLI-105:2 @HLI-105 @Regression @Smoke
  Scenario: The Articles and videos header should display 3 modules
    When I am on the Articles and Videos view
    Then I should see Health tab
    Then I should see Insurance tab

  @HLI-105:3 @HLI-105 @Regression
  Scenario: Each Article displays a photo, bookmark icon, date, view count and title
    When I scroll down to view an article
    Then I should be shown a photo
    Then I should be shown a bookmark icon
    Then I should be shown a date
    Then I should be shown a views
    Then I should be shown a Article Title
    Then I should be shown a bookmark Summary
    Then I should be shown a bookmark Keep Reading

  @HLI-105:4 @HLI-105 @Regression
  Scenario: Popular articles are to be displayed at the bottom of the page
    Then I should see an aligned header name 'Popular Articles'
    And  I should see a Photo of popular Article
    And  I should see a Photo of popular Title
    And  I should see a Photo of popular description

