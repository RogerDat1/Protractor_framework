Feature: HLI_95_B2C_Login_Password_Reset_Email
  As a HLI User, I want to receive emails as part of recovering/ resetting my password so that I can verify them as the requester

  @HLI-95 @Regression
  Scenario:
    Given User has logged in HLI using userType as "basicUser" and click on forget password link
    Then  User enters first name
    Then  User enters email address
    Then  User enters last name
    Then  User verify cancel button
    Then  User click on save button
    Then  User verify the error msg
