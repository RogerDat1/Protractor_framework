Feature: HLI_91_B2C_Login_Account_Locked
  As a user i want the account to be locked on six time wrong password


  @HLI-91:1 @Smoke
  Scenario: Validate user account should be proctacted from the other users
    Given  User accesses HLI B2C Login Page
    And    User enters 6 times wrong username and password
    And    User should see login page again
    And    User enters 7th time wrong username and password to gets account lock
    And    User Verify Header stating Your Account Has been locked
    And    User verify presence of contact our support team link
    And    User verify presence of Back to Login button on Account Locked page
    When   User clicks on Login button on Account Locked page
    Then   User navigates to Login page page


