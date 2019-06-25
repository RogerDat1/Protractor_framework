Feature: HLI_987_Action_Goals_Challenges
  As a User I want to set health goals suitable for my lifestyle so that I can track & improve my health

  Scenario: View Health goal
    Given User has logged in HLI as UserType "UserWithGoalsToAcceptDecline"
    And User has accessed Goals Challenges tab in Health module
    Then System loads Goals Challenges page in defined design
    Then Goal tile should include Metric name
    And User should see CTA to 'Select a Tier'
    And User should see CTA to 'Decline' the Goal


  Scenario: User Selects a Tier for Steps Health metric
    Given User has logged in HLI as UserType "UserWithGoalsToAcceptDecline"
    And User has accessed Goals Challenges tab in Health module
    Then System loads Goals Challenges page in defined design
    When User clicks Select a Tier for a Health Goal for "Steps"
    Then System should present a pop-up overlay to select Goal Tier tile defined per Step Health metric
    And pop-up overlay should include CTA to 'Start Goal'
    And pop-up overlay should include CTA to 'Cancel' the overlay


  Scenario: User Selects a Tier for Sleep Health metric
    Given User has logged in HLI as UserType "UserWithGoalsToAcceptDecline"
    And User has accessed Goals Challenges tab in Health module
    Then System loads Goals Challenges page in defined design
    When User clicks Select a Tier for a Health Goal for "Sleep"
    Then System should present a pop-up overlay to select Goal Tier tile defined per Sleep Health metric
    And pop-up overlay should include CTA to 'Start Goal'
    And pop-up overlay should include CTA to 'Cancel' the overlay


  Scenario: User Selects a Tier for Smoke Health metric
    Given User has logged in HLI as UserType "UserWithGoalsToAcceptDecline"
    And User has accessed Goals Challenges tab in Health module
    Then System loads Goals Challenges page in defined design
    When User clicks Select a Tier for a Health Goal for "Smoke"
    Then System should present a pop-up overlay to select Goal Tier tile defined per Smoke Health metric
    And pop-up overlay should include CTA to 'Start Goal'
    And pop-up overlay should include CTA to 'Cancel' the overlay


  Scenario: User Selects a Tier for Weight Health metric
    Given User has logged in HLI as UserType "UserWithGoalsToAcceptDecline"
    And User has accessed Goals Challenges tab in Health module
    Then System loads Goals Challenges page in defined design
    When User clicks Select a Tier for a Health Goal for "Weight"
    Then System should present a pop-up overlay to select Goal Tier tile defined per Weight Health metric
    And pop-up overlay should include CTA to 'Start Goal'
    And pop-up overlay should include CTA to 'Cancel' the overlay


  Scenario: User Selects a Tier for Activity Health metric
    Given User has logged in HLI as UserType "UserWithGoalsToAcceptDecline"
    And User has accessed Goals Challenges tab in Health module
    Then System loads Goals Challenges page in defined design
    When User clicks Select a Tier for a Health Goal for "Activity"
    Then System should present a pop-up overlay to select Goal Tier tile defined per Activity Health metric
    And pop-up overlay should include CTA to 'Start Goal'
    And pop-up overlay should include CTA to 'Cancel' the overlay


  Scenario: User Starts Goal
    Given User has logged in HLI as UserType "UserWithGoalsToAcceptDecline"
    And User has accessed Goals Challenges tab in Health module
    Then System loads Goals Challenges page in defined design
    When User clicks Select a Tier for a Health Goal for "Steps"
    And User clicks on Start Goal button for "Steps"
    Then Goal should be saved in User's Active Goals section in Goals/Challenges page


  Scenario: User Cancels Goal
    Given User has logged in HLI as UserType "UserWithGoalsToAcceptDecline"
    And User has accessed Goals Challenges tab in Health module
    Then System loads Goals Challenges page in defined design
    When User clicks Select a Tier for a Health Goal for "Steps"
    And User clicks on Cancel button for "Steps"
    Then Goal should be saved in User's Active Goals section in Goals/Challenges page
    And User should be directed back to page where 'Select a Tier' was clicked

