Feature: HLI_73_ Help_&_Support_Feedback_Form
  As a HLI User I want to contact Mercer HLI Support team easily via a structured form so that
  I can get quick response on topic of inquiry/ feedback

  Background:
    Given User has logged in HLI as UserType "basicUser"
    When  User clicks on navigation menu
    Then  User should see link to Help & Contacts module
    And   User clicks on Help & Contacts module
    And   User should see Help & Contact page loaded
    And   User should see NEED HELP OR WANT TO GIVE FEEDBACK section


  @HLI-73:1 @HLI-73 @Regression @Smoke
  Scenario: Default HLI Feedback form state
    And NEED HELP OR WANT TO GIVE FEEDBACK section should contain a drop down of help type
    And Default option in dropdown should be Choose one
    And NEED HELP OR WANT TO GIVE FEEDBACK section should contain a text area to describe
    And NEED HELP OR WANT TO GIVE FEEDBACK section should contain a Send feedback to send
    When User clicks on drop down
    And User see types of feedback options avilable in dropdown

  @HLI-73:2 @HLI-73 @Regression @Smoke
  Scenario: Submitting feedback Form without selecting any Topic
    And User does not select any option from drop down and it has default value Choose one
    And User types comment in comment area
    When User clicks on submit button
    Then System should validate & prompt User to select a Topic "Item selection required."

  @HLI-73:3 @HLI-73 @Regression @Smoke
  Scenario: Submitting Form without Description
    And User has selected feedback topic from dropdown list "Complaint"
    And User has not included text to describe feedback
    When User clicks on submit button
    Then System should validate & prompt User to describe feedback "Feedback required."

  @HLI-73:4 @HLI-73 @Regression
  Scenario: Submitting Form without Description and topic
    And User does not select any option from drop down and it has default value Choose one
    And User has not included text to describe feedback
    When User clicks on submit button
    Then System should validate & prompt User to select a Topic "Item selection required."
    Then System should validate & prompt User to describe feedback "Feedback required."


  @HLI-73:5 @HLI-73 @Regression
  Scenario: Successful Form submission to healthylives@mercer.com
    And User has selected feedback topic from dropdown list "Feedback"
    And User has included text to describe feedback
    When User clicks on submit button
    Then User should see successful submission confirmation message "Thank you for you feedback/query."

