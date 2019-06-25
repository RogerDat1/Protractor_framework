Feature: HLI_86_Dashboard_Panels
  As a User I want to control the display of my HLI module scores and information on my dashboard so that all my information
  does not show by default on login and is prioritised per my preference on display

  @HLI-86:1
  Scenario: User dashboard features
    Given User has logged in HLI as UserType "basicUser"
    Given User is logged in HLI dashboard
    And   System loads standard HLI 'dashboard features'
    And   User should be able to see 'Dashboard image'
    And   User should be able to see 'Health Age Large Panel'
    And   User should be able to see 'Default Article Large Panel'

  @HLI-86:2
  Scenario: User dashboard features
    Given User has logged in HLI as UserType "basicUser"
    Given User is logged in HLI dashboard
    And   User should be able to see 'Recommended Article Large Panel'
    And   User should be able to see 'Bookmarked Articles Large Panel'
    And   User should be able to see 'Products & Services Small Panel'

  @HLI-86:3
  Scenario: User dashboard features
    Given User has logged in HLI as UserType "basicUser"
    Given User is logged in HLI dashboard
    And   User should be able to see 'DFC Small Panel'
    And   User should be able to see 'Quick Links Large Panel'
    And   User should be able to see 'You & Your Employer Large Panel'


  @HLI-86:4
  Scenario: Default client image displayed in header
    Given User has logged in HLI as UserType "basicUser"
    When User views background image

  @HLI-86:5
  Scenario: Health Score panel is displayed
    Given User has logged in HLI as UserType "basicUser"
    When User views the Health Age score panel
    Then panel should include icon for Health
    And  panel should include Title for Health module
    And  panel should include a description text below Title
    And  panel should include other links maxim 4 for navigation to relevant content site
    And  panel should capture Health Age of User
    And  panel should include button to navigate to Health Summary
    And  panel should include See less chevron to minimise the card view for the selected Card
    And  User can move panel for re-ordering

  @HLI-86:6
  Scenario: Explore articles panel displays content based on most popular articles
    Given User has logged in HLI as UserType "basicUser"
    Given User can see two large article under explore articles panel
    And   User can see two small article


  @HLI-86:7
  Scenario: Explore articles panel display for first-time user
    Given User has logged in HLI as UserType "basicUser"
    When  User scrolls to the explore articles panel
    And  Panel should include 2 articles with image tiles newest 1 & 2 by publish date
    And  Panel should include 2 articles without image tiles newest 3 & 4 by publish date
    And  User can move panel for re-ordering

  @HLI-86:8
  Scenario: Explore Category based articles panel display for returning user
    Given User has logged in HLI as UserType "basicUser"
    When User scrolls to the explore articles panel
    And  panel should include 2 articles with image tiles newest 1 & 2 by publish date
    And  panel should include 2 articles without image tiles newest 3 & 4 by publish date
    And  User can move panel for re-ordering

  @HLI-86:9 @ondemand
  Scenario: Bookmarked Articles panel is displayed
    Given User has logged in HLI as UserType "basicUser"
    When User has bookmarked at least one articles
    And  User navigates to Dashboard
    Then Dashboard should include Bookmarked articles panel


  @HLI-86:10
  Scenario: Products & Services/ DFC Small panel is displayed
    Given User has logged in HLI as UserType "basicUser"
    When User scrolls to Products & Services DFC Small panel
    Then User should see both small panels placed side by side
    And User can move both small panels together for re-ordering

  @HLI-86:11
  Scenario: Quick links panel is displayed
    Given User has logged in HLI as UserType "basicUser"
    When User scrolls to Quick links panel
    And Panel should include Quicklink_image
    And Panel should include Quicklink_Name
    And Panel should include Quicklink_link


  @HLI-86:12
  Scenario: You & Your Employer panel is displayed
    Given User has logged in HLI as UserType "basicUser"
    When User scrolls to You & Your Employer Panel
    Then User should see read Article in the panel
    And  User can move panel for re-ordering

  @HLI-86:13
  Scenario: User can collapse the dashboard panels
    Given User has logged in HLI as UserType "basicUser"
    Then User click on cancle icon of new bookmark
    When I click the 'panel_toggle' to Off
    Then All dashboard panels collapse
    And  Only the headline is displayed in the panels

  @HLI-86:14
  Scenario: User can open the dashboard panels
    Given User has logged in HLI as UserType "basicUser"
    When  I click the 'panel_toggle' to On
    Then  All dashboard panels stack open
    And   Headline, sub header information is displayed

  @HLI-86:15
  Scenario: User can rearrange order of panels
    Given User has logged in HLI as UserType "basicUser"
    When I click to drag a panel
    And  I arrange it in a different order
    Then The panel state is saved in the new order set by user