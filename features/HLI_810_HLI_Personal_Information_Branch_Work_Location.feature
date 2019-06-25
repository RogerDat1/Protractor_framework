Feature: HLI_810_HLI_Personal_Information_Branch_Work_Location.feature
  As a HealthyLives User I want to confirm the location I work from so that my survey response contributes to the appropriate locations statistics for my Employer.

  Background:
    Given Employer is provisioned with 'Branch or Work Location' names

  @HLI-810:1
  Scenario: View 'Branch or Work Location' field in Personal Information page
    When User views 'Job & Education' section in Personal Information page
    Then Section should include mandatory field 'Branch or Work Location'
    And  Field should list drop-down of Branch names received from Employer

  @HLI-810:2
  Scenario: Save 'Branch or Work Location' field in Personal Information page
    When User selects from drop-down field 'Branch or Work Location'
    And  User has completed all other mandatory fields on page
    Then Saved value should be saved successfully
    And  User record should be referred in any analytics for saved 'Branch or Work Location'
