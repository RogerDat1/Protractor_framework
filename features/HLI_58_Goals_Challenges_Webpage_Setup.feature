Feature: HLI_58_Goals_Challenges_Webpage_Setup
  As a User I want to access all my health goals from a single page in HealthyLives so that I can easily track & complete my actions

  Scenario: Goals/ Challenges page sub-navigation
    Given User has logged in HLI as UserType "UserWithoutGoalSet"
    And User has accessed Goals Challenges tab in Health module
    Then System loads Goals Challenges page in defined design
    And Goal page includes sub-navigation for "MyGoals"
    And Goal page includes sub-navigation for "CompanyChallenges"
    And My Goals page should be default open

  Scenario: Available Goals panels on 'My Goals'
    Given User has logged in HLI as UserType "UserWithoutGoalSet"
    And User has accessed Goals Challenges tab in Health module
    And User navigates to sub-navigation "MyGoals" of "Goals" page
    Then System loads an empty tile nudging user to start a goal
    And New panel with "AvailableGoals" should be shown on My Goals page
    And Panel should include all "AvailableGoals" in tile format
    And "AvailableGoals" tile should include "icon"
    And "AvailableGoals" tile should include "MetricName"
    And "AvailableGoals" tile should include "SelectATier"
    And "AvailableGoals" tile should include "Decline"


  Scenario: Active Goals panels on 'My Goals'
    Given User has logged in HLI as UserType "UserWithGoalSet"
    And User has accessed Goals Challenges tab in Health module
    And User navigates to sub-navigation "MyGoals" of "Goals" page
    Then New panel with "ActiveGoal" should be shown on My Goals page
    And Panel should include all "ActiveGoal" in tile format
    And "ActiveGoal" tile should include "CategoryLabel"
    And "ActiveGoal" tile should include "MetricName"
    And "ActiveGoal" tile should include "GoalDescription"
    And "ActiveGoal" tile should include "GoalEndTime"
    And "ActiveGoal" Tile should include "MarkGoalCompleted"
    And "ActiveGoal" Tile should include "ArchiveGoal"
    And System loads an empty tile nudging user to start a goal at the end of all Active goals


  Scenario: Completed Goals panels on 'My Goals'
    Given User has logged in HLI as UserType "UserWithCompletedGoal"
    And User has accessed Goals Challenges tab in Health module
    And User navigates to sub-navigation "MyGoals" of "Goals" page
    Then New panel with "CompletedGoal" should be shown on My Goals page
    And Panel should include all "CompletedGoals" in tile format
    And "CompletedGoal" tile should include "MetricName"
    And "CompletedGoal" tile should include "GoalDescription"
    And "CompletedGoal" tile should include "CountOfTimesGoalWasCompleted"
    And "CompletedGoal" tile should include "GoalCompletionTimestamp"


  Scenario: Archived Goals panels on 'My Goals'
    Given User has logged in HLI as UserType "UserWithArchivedGoal"
    And User has accessed Goals Challenges tab in Health module
    And User navigates to sub-navigation "MyGoals" of "Goals" page
    Then New panel with "ArchivedGoals" should be shown on My Goals page
    And Panel should include all "ArchivedGoal" in tile format
    And "ArchivedGoal" tile should include "MetricName"
    And "ArchivedGoal" tile should include "GoalDescription"
    And "ArchivedGoal" tile should include "CountOfTimesGoalWasArchived"
    And "ArchivedGoal" tile should include "GoalArchivedTimestamp"


  Scenario: Available Goals panels on 'Company Challenges'
    Given User has logged in HLI as UserType "UserWithoutGoalSet"
    And User has accessed Goals Challenges tab in Health module
    And User navigates to sub-navigation "CompanyChallenges" of "Goals" page
    Then System loads an empty tile nudging user to anticipate a 'Company Challenges'
    And Available Goals panel from 'My Goals' page should also show in 'Company Challenges'




