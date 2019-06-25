Feature:HLI_45_Profile_View_Edit_Communication
  As an HLI user i want to be able to view and change my marketing and subscription preferences


  Background:
    Given User has logged in HLI using userType as "basicUser"
    And User click on cancel icon of new bookmark
    And I have tapped the Profile Icon in the top right corner
    And The Personal info page is selected displayed
    And the Communication tab has been selected
    And User see Marketing preference header at Communication page

  @HLI-45:1 @HLI-45 @Regression
  Scenario: View Marketing preferences
    When User accesses Marketing Preferences Contact me with news
    Then System should display toggle with a yes switch
    Then System should display toggle with a No switch
    And default toggle should be set to Yes
   # And User should be sent marketing communication

  @HLI-45 @Regression
  Scenario: View and Turn off Marketing preferences
    When User accesses Contact me with news
    And  User selects toggle to No
    Then Users marketing preference should save as No
    And  User should not be sent any marketing communication