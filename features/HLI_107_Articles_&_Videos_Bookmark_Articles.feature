Feature: HLI_107_Articles_&_Videos_Bookmark_Articles
  As a User I would like to bookmark/save an article so that I can view it at anytime from my digital filing cabinet

  Background:
    Given User has logged in HLI as UserType "basicUser"
    Then User sees Burger menu icon
    When I click the top left burger menu icon
    When User clicks on "ArticlesAndVideos" submenu from burger menu

  @HLI-107:1 @HLI-107 @Regression @Smoke
  Scenario: User is able to save an article to their DFC
    And   I have clicked on a keep reading to read full articles
    When  I scroll down and click the bookmark icon
    And   The icon changes colour to black


