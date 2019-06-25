Feature:HLI_93_B2C_ Login_Password_Expiry
  As a HLI User I want to see appropriate message when my password expires so that I can set a new password to login

  @HLI-93 @Regression
  Scenario Outline: Password expires after 90 days
    Given User has logged in HLI using userType as "expiryUser"
    And user validates all the web elements on the page
    And Current Password field validation "Login_Page|Current_Password" "<inputdata>"
    And  New Password field validation "Login_Page|New_Password" "<inputdata1>"
    And  New_ReType_Password field validation "Login_Page|New_ReType_Password" "<inputdata2>"
    And user clicks on save button
    And user clicks on cancel button
    And validate the proper error message for each input "Login_Page|Error_Latest" "<error-msg>"

    Examples:
      | inputdata  | inputdata1 | inputdata2 | error-msg                                                                                                             |
      | test       | test2      | test3      | Password must be 8+ characters long                                                                                   |
      | kdgjelcome | kdgjelcome | kdgjelcome | Password must include at least one numeric character, alphabetic character and one punctuation mark or capital letter |
      | Welcome    | Welcome2   | Welcome2   | Your current password is incorrect                                                                                    |
      |            |            |            | Please complete all fields                                                                                            |