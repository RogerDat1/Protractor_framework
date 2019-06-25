Feature: HLI_67_Challenges_&_Badges_Company_Challenges.feature
  As a User I want to view and manage my Company set Health Challenges/ Goals and Badges earned in Healthy Lives from a single page so that it is easy to track.

  Background:
    Given User has accessed Challenges & Badges tab in Health module
    And   User has clicked Company Challenges tab

  @HLI-67:1
  Scenario: Challenges & Badges page default design for no tracker mapped User
    When User accesses Challenges & Badges first time
    And  User has no trackers mapped
    Then System loads Challenges & Badges page in defined design
    And  Page includes icons capturing company set health metric value against company set daily goal upto 5
    And  Page includes panel for Company Set Challenges
    And  Page incldes panel for Achievements linked to Company Challenges

  @HLI-67:2
  Scenario: User accepts a Challenge
    When User accepts atleast one Company challenge
    Then New panel with Active Company Challenges should be shown on My Challenges tab
    And  Panel should include all Active Challenges in tile format
    And  Tile should include icon associated with Challenge
    And  Tile should include value set for Challenge
    And  Tile should include general text about Challenge
    And  Tile should include time tracking indicating period remaining to complete challenge
    And  Tile should include button to End Challenge

  @HLI-67:3
  Scenario: User ends a Challenge
    When User clicks End a Challenge
    Then System should Prompt User to Confirm Cancel action
    And  System should remove Challenge tile if Ending is confirmed
    And  System should notify Company Admin of User's challenge Removal
    And  System should not remove Challenge tile if Ending is cancelled

  @HLI-67:4
  Scenario: User creates maximum number of challenges
    When User has created maximum number TBC of Challenges allowed at a time
    Then System should not display panel to Accept Company Challenges

  @HLI-67:5
  Scenario: User views Achievements in Self defined Challenges tab
    When User view Achievements panel
    Then Panel should include Latest Company Badges earned max 5
    And  Panel should include Lifetime Company Badges earned max 5
    And  Panel should include nudge of one upcoming Badge
    And  Panel should include ability see all Company Badges earned
    And  Each Badge should have colour theme based on Health category
    And  Tile should include time tracking indicating period remaining to complete challenge
    And  Each Badge should have metric achieved
    And  Each Badge should have Congratulatory text
    And  Each Badge should have ability to Share

