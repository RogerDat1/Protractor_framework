Feature: HLI_78_B2C _Login_Account_Disabled
  As a HLI User I want to be able to register through the defined process so that I can enable my account and login

  @HLI-78 @Regression
  Scenario: User has not completed Registration process in HLI Ad User's account is in Disabled status
    When User accesses HLI B2C Login Page
    And  User enters username and submit for disable user "disableUser"
    Then System should directs User to the Account Disabled page
    Then Page heading start from  Your Account Has Been Disabled
    Then User should verify the error msg "Message1" of account disable
    Then User should verify the Sub-Heading stating "Message2" of account disable
    Then User should verify the Text stating "Message3" of account disable
    And  User verify presence of contact our support team link
    And  User verify presence of Back to Login button
    When User clicks on Login button
    Then User navigates to Login page page


