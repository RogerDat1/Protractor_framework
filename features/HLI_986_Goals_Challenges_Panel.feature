Feature: HLI_986_Goals_Challenges_Panel.feature
  As a User I want to be reminded of my health goals throughout the HealthyLives journey so that I can accept/ decline the goals to improve my health score

  Scenario: Goals/ Challenges page sub-navigation
    Given User has logged in HLI as UserType "UserWithGoalsToAcceptDecline"
    And User click on cancel icon of new bookmark
    And User view HealthyLives Dashboard
    Then Dashboard should include Available Goals/ Challenges Panel
    And Panel should include goals for "Steps"
    And Panel should include goals for "Activity"
    And Panel should include goals for "Weight"
    And Panel should include goals for "Sleep"


  Scenario: Goals/ Challenges Panel on Health Summary
    Given User has logged in HLI as UserType "UserWithGoalsToAcceptDecline"
    And User click on cancel icon of new bookmark
    When User navigates to "HealthAge" page from burger menu
    Then Health Summary should include Available Goals/ Challenges Panel
    And Panel should include goals for "Steps"
    And Panel should include goals for "Activity"
    And Panel should include goals for "Weight"
    And Panel should include goals for "Sleep"


  Scenario: Goals/ Challenges Panel on Zoom Level 2
    Given User has logged in HLI as UserType "UserWithGoalsToAcceptDecline"
    And User click on cancel icon of new bookmark
    When User navigates to "HealthAge" page from burger menu
    And User Zooms to Level two of Fitness within a health category
    Then Zoom Level two should include Available Goals/ Challenges Panel
    And Panel should include goals for "Steps"
    And Panel should include goals for "Activity"

  Scenario: Goals/ Challenges Panel on Zoom Level 3
    Given User has logged in HLI as UserType "UserWithGoalsToAcceptDecline"
    And User click on cancel icon of new bookmark
    When User navigates to "HealthAge" page from burger menu
    And User Zooms to Level three of Steps within a health category
    Then Zoom Level three should include Available & Active Goals/ Challenges Panel
    And Panel should include goals for "Steps"
    And panel should include Active Goals accepted by user
    And panel should include Available Goal Tiers not accepted/ dismissed by user


  Scenario: Maximum count of goals on page
    Given User has logged in HLI as UserType "UserWithGoalsToAcceptDecline"
    And User click on cancel icon of new bookmark
    When User view HealthyLives Dashboard
    Then User should see minimum one and maximum four goals
    When User navigates to "HealthAge" page from burger menu
    Then User should see minimum one and maximum four goals
    When User Zooms to Level two of Fitness within a health category
    Then User should see minimum one and maximum four goals
    When User Zooms to Level three of Steps within a health category
    Then User should see minimum one and maximum four goals









