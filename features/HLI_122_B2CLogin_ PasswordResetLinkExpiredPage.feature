Feature: HLI_122_B2CLogin_ PasswordResetLinkExpiredPage
  As a User I would like to view an informative page in case the password reset link provided to me has expired


  @HLI-122:1 @Regression
  Scenario: Validity period for password reset link
    Given User access HLI url
    Then Verify correct HLI home page is loaded successfully
    Then User verify presence of Email text box and enters email id as "SampleUser"
    Then User verify presence of Submit button and click on it
    When User navigates to forgot password page and verify page header
    Then User verify presence of First Name text box and enters first name as "SampleUser"
    And  User verify presence of Last Name text box and enters last name as "SampleUser"
    And  User verify presence of Email Address text box and enters email address as "SampleUser"


  @HLI-122:2 @Regression
  Scenario Outline: Password expired page on clicking expired link
    Given User clicks on expired "<password reset link>"
    Then  User should be directed to a page with title YOUR PASSWORD RESET LINK HAS EXPIRED
    And   User verify error message as Your password reset link has expired
    And   User verify presence of contact our support team link
    And   User verify presence of Back to Login button on password expired page
    When  User clicks on Login button on password expired page
    Then  User navigates to Login page page
    Examples:
      | password reset link                                             |
      | https://dal-uat-hli.mercer.com/provision/reset-password-expired |