Feature: HLI_21_ HLI_Profile_View_Edit_Personal_Details_Subscriptions
  As An HLI User i want to be able to view, customise and modify my personal info specifications

  Background:
    Given User has logged in HLI as UserType "basicUser"
    And User click on cancel icon of new bookmark
    And I have tapped the Profile Icon in the top right corner
    And The Personal info page is selected displayed


  @HLI-21:1 @HLI-21 @Regression @Smoke
  Scenario: Page should display all relevant header tabs or icons
    Then I should be able to view Menu Personal Info
    Then I should be able to view Menu Communications
    Then I should be able to view Menu privacy

  @HLI-21:2 @HLI-21 @Regression @Smoke
  Scenario: User can view and edit Background
    When I view the background photo
    And I tap the photo_icon in the top right
    Then I can change and upload the background photo
    And I click on save button to save new image
    And I verify new image has been uploaded

  @HLI-21:3 @HLI-21 @Regression
  Scenario: User can view and edit Profile Avatar with an image up to 5mb
    Then I should be able to change avatar profile pic
    And I verify new profile avatar image has been uploaded

  @HLI-21:4 @HLI-21 @Regression
  Scenario: User update profile picture with size more than 5 MB
    When User try to update profile pic with size more than five MB
    Then User should see error message File size should be less than 5 MB
    And I verify new profile avatar image has not been uploaded

  @HLI-21:5 @HLI-21 @Regression
  Scenario: User update background picture with size more than 5 MB
    And I tap the photo_icon in the top right
    When User try to update background pic with size more than five MB
    Then User should see error message The file size exceeds the 5Mb
    When User clicks on cancel button to cancel update of background image
    And I verify new background image has not been uploaded


