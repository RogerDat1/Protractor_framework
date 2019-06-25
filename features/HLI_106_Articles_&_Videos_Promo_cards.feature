Feature:HLI_106_Articles_&_Videos_Promo_cards
  As a user I want Promo cards to be displayed in the resource section of an article
  So that I can click through and view the promo content

  Background:
    Given User has logged in HLI as UserType "basicUser"
    Then User sees Burger menu icon
    When I click the top left burger menu icon
    When I click a Articles & Videos from the site menu
    And   I have clicked on a keep reading to read full articles

  @HLI-106:1
  Scenario: Maximum of 6 Promo cards can be displayed in Resources
    And   I have scrolled down on article page with promo cards enabled
    When  I view the promo cards in resources
    Then  I should see no more than 6 promo cards displayed
    And   a minimum of 1 promo card

  @HLI-106:2
  Scenario: Promo cards configured in CMS per client
    And   I have scrolled down on article page with promo cards enabled
    When  I click on the Promo card
    Then  I should see the page refresh to display the promo_content

  @HLI-106:3
  Scenario: Promo card designs
    And   I have scrolled down on article page with promo cards enabled
    When  I click on the Promo card
    When  I view the promo card in resources
    Then  I should see 'Image'
    Then  I should see 'Title'
    Then  I should see 'Short Summary'

