Feature: HLI_505_ Self_Registration_No_HR_Data
  As a user, I want an easy and quick process to self register in HLI using the unique key received
  from my employer

  Background:
    Given User access HLI registration URL
    Then User see HLI registration page

  @HLI-505:1 @HLI-505 @Regression @Smoke
  Scenario: Registration page design
    And Uses see HLI logo
    And User see header as Create Your Account
    And User see Registration page description
    And User see First Name text box
    And User see Email Address box
    And User see Last Name text box
    And User see Re-type Email Address text box
    And User see Day text box of Date Of Birth
    And User see Month text box of Date Of Birth
    And User see Year text box of Date Of Birth
    And User see Password text box in Registration page
    And User see Gender drop down
    And User see Re-enter Password text box
    And User see Captcha
    And User see next button in Registration page
    And User see cancel button in Registration page
    And User sees Mercer logo
    And User sees Mercer tag line
    And User sees © 2017 MERCER LLC, ALL RIGHTS RESERVED
    And User see HLI EMail id for help
    And User see HLI phone number for help
    And User see availability of helplines of HLI


  @HLI-505:2 @HLI-505 @Regression @Smoke
  Scenario: Mandatory fields in self registration page
    And User see First Name as mandatory field
    And User see Last Name as mandatory field
    And User see Company Name as mandatory field
    And User see Email Address as mandatory field
    And User see Re-type Email Address as mandatory field
    And User see Password as mandatory field
    And User see Re-type Password as mandatory field
#    And User see Day as mandatory field
#    And User see Month as mandatory field
#    And User see Year as mandatory field
#    And User see Gender as mandatory field


  @HLI-505:3 @HLI-505 @Regression @Smoke
  Scenario: Instruction for valid password
    And User see Info icon at Password label
    When User clicks on Info icon
    Then User see rules for valid password


  @HLI-505 @Regression
  Scenario Outline: User clicks on Next without entering all details
    And User enters first name as "<FirstName>"
    And User enters last name as "<LastName>"
    And User clicks on Next button in Registration page
    And User sees proper error message
    Examples:
      | FirstName     | LastName     |
      | TestFirstName | TestLastName |

  @HLI-505 @Regression
  Scenario Outline: Providing invalid characters in fields of Registration page
    And User enters first name as "<FirstName>"
    Then User sees First Name text box should show red color in bottom
    And User enters last name as "<LastName>"
    Then User sees Last Name text box should show red color in bottom
    Examples:
      | FirstName      | LastName        |
      | TestFirs*&*676 | TestLast787^&%^ |


  @HLI-505 @Regression
  Scenario Outline: User clicks on Cancel button
    And User enters first name as "<FirstName>"
    And User enters last name as "<LastName>"
    And User clicks on Cancel button in Registration page
    Examples:
      | FirstName     | LastName     |
      | TestFirstName | TestLastName |


  @HLI-505 @Regression
  Scenario Outline: User enters valid values for all fields
    And User enters first name as "<FirstName>"
    And User enters last name as "<LastName>"
    And User enters Email Address as "<Email Address>"
    And User enters Re-type Email Address as "<Re-type Email Address>"
    And User enters Password as "<Password>"
    And User enters Re-type Password as "<Re-type Password>"
    And User enters Day as "<Day>"
    And User enters Month as "<Month>"
    And User enters year as "<year>"
    And User enters Gender as "<Gender>"
    Examples:
      | FirstName     | LastName     | Email Address  | Re-type Email Address | Password   | Re-type Password | Day | Month | year | Gender |
      | TestFirstName | TestLastName | abc@mercer.com | abc@mercer.com        | Welcome123 | Welcome123       | 03  | 02    | 1991 | Male   |

  @HLI-505 @Regression
  Scenario Outline: User provides incorrect re-enter email address
    And User enters Email Address as "<Email Address>"
    And User enters Re-type Email Address as "<Re-type Email Address>"
    And User should see proper error message for unmatched email address
    Examples:
      | Email Address | Re-type Email Address |

  @HLI-505 @Regression
  Scenario Outline: User provides incorrect re-enter password
    And User enters Password as "<Password>"
    And User enters Re-type Password as "<Re-type Password>"
    And User should see proper error message for unmatched password
    Examples:
      | Password | Re-type Password |











