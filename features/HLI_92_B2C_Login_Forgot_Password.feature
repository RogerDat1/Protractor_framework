Feature:HLI_92_B2C_Login_Forgot_Password
  As a HLI User I would like to recover my password during login so that
  I can self manage my login if I forget my password

  @HLI-92 @Regression
  Scenario:User should recover password during login in case of forget password.

    Given User has logged in HLI using userType as "basicUser" and click on forget password link
    Then  User enters first name
    Then  User enters email address
    Then  User enters last name
    Then  User verify cancel button
    Then  User click on save button
    Then  User verify the error msg