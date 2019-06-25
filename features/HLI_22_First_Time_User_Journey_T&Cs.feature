Feature: HLI_22_ First_Time_User_Journey_T&Cs
  As a first time user I would like to understand Terms & Conditions (T&C) that apply to my use of and any information I may obtain from HLI

  Background:
    Given User has logged in HLI as UserType "UserAtTermsAndConditionPage"
    Then User should see Terms & Conditions (T&C) page of HLI as first-time user

  @HLI-22:1 @HLI-22 @Regression @Smoke
  Scenario: Federated SSO user logs first time in HLI
    And T&C page includes a page header
    And T&C page shows Full policy
    And T&C page includes a checkbox to accept the T&C
    And T&C page includes a button to Agree to accepted T&C
    And T&C page includes an option to Disagree to T&C


  @HLI-22:2 @HLI-22 @Regression
  Scenario: Default state of Agree & Disagree button
    When User does not check in Accept T&C checkbox
    Then Agree button should be in disabled state by default
    And User should receive tool tip on clicking of disabled Agree button
    And Disagree CTA link should be active by default

  @HLI-22:3 @HLI-22 @Regression
  Scenario: User clicks on Accept T&C checkbox
    When User checks in Accept T&C checkbox
    Then Agree button should change to enabled state
    And Disagree CTA link should be active by default


  @HLI-22:4 @HLI-22 @Regression
  Scenario: User clicks Disagree
    When User clicks on Disagree to deny T&C
    Then System should launch browser modal with copy
    And modal should include dismiss button to close modal
    And Dismiss button should be enabled
    When User clicks on Dismiss button
    Then modal should be closed

  @HLI-22:5 @HLI-22:OnDemand @OnDemand
  Scenario: User accepts T&C to Agree
    When User checks in Accept T&C checkbox
    When User clicks on Agree button to continue welcome journey
    Then System will populate a personal details page


