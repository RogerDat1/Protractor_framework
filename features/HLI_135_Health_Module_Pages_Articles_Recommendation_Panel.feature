Feature: HLI_135_Health_Module_Pages_Articles_Recommendation_Panel.feature
  As a User I want to see article relevant for my health metrics score in HealthyLives so that
  I can benefit from the recommendations.

  Background:
    Given User has logged in HLI as UserType "basicUser"

  @HLI-135:1
  Scenario: User has completed mandatory onboarding survey
    When  User clicks on navigation menu
    Then  User should see link to Health & Age Contacts module
    And   User clicks on Health & Age module
    Then  The User can view the Homepage for Health

  @HLI-135:2
  Scenario: Article Recommendations on Health summary
    When User navigates to HealthyLives summary
    Then User should view article recommendations panel
    And  Article recommendations should focus on top worst health metric
    And  Article recommendations panel should include 2 articles with image
    And  Article recommendations panel should include 2 articles without image
#Top worst gauge & article recommendations focus on same metric
#Recommendation articles should be CMS author able per metric & severity
#CMS author should be able to assign at least 4 articles per metric & severity
  @HLI-135:3
  Scenario: Article Recommendations on Zoom 2
    When User Zooms into a Health Category from HealthyLives summary
    Then User should view article recommendations panel
    And  Article recommendations should focus on top worst health metric under the category
    And  Article recommendations panel should include 2 articles with image
    And  Article recommendations panel should include 2 articles without image
#Top worst gauge & article recommendations focus on same metric
#Recommendation articles should be CMS author able per metric & severity
#CMS author should be able to assign at least 4 articles per metric & severity

  @HLI-135:4
  Scenario: Article Recommendations on Zoom 3
    When User Zooms into a Health Metric from Zoom 2 view
    Then User should view article recommendations panel
    And  Article recommendations should focus on selected metric
    And  Article recommendations panel should include 2 articles with image
    And  Article recommendations panel should include 2 articles without image
#Gauge & article recommendations focus on selected Zoom 3 metric
#Recommendation articles should be CMS author able per metric & severity
#CMS author should be able to assign at least 4 articles per metric & severity