Feature: HLI_101_SiteMenu_Footers_Standard_Footer
  As a HLI User I want to have easy access to various Mercer policies related Terms of Use,
  Privacy, Cookies and Acceptable use of the website so that I can understand the conditions governing my use of the website

  Background:
    Given User has logged in HLI as UserType "basicUser"

  @HLI-101:1 @HLI-101 @Regression @Smoke
  Scenario: User should see various Mercer policies related Terms of Use,Privacy, Cookies and Acceptable use of the website
    When User accesses dashboard page
    Then User should see link for Privacy Policy on page footer
    And User should see link for Cookie Policy on page footer
    And User should see link for Terms of Use on page footer
    And User should see link for Acceptable Use on page footer
    And User should see link for Help & Contacts on page footer


  @HLI-101:2 @HLI-101 @Regression
  Scenario: User clicks on Privacy Policy
    When User clicks on Privacy Policy and Policy page should open in new tab with Privacy Policy dashboard
    And User sees PRIVACY POLICY DASHBOARD header
    And User sees WHAT DATA DO WE COLLECT DASHBOARD header
    And User sees HOW DO WE USE THE DATA WE COLLECT DASHBOARD header
    And User sees WITH WHOM DO WE SHARE YOUR DATA header
    And User sees WHAT STEPS DO WE TAKE TO PROTECT YOUR INFORMATION header
    And User sees WHAT RIGHTS AND OBLIGATIONS DO YOU HAVE WITH RESPECT TO YOUR DATA header
    And User sees SOME OTHER MATTERS header


  @HLI-101:3 @HLI-101 @Regression
  Scenario: User clicks on Cookie Policy
    When User clicks on Cookie Policy and Policy page should open in new tab with Cookie Policy dashboard
    And User sees COOKIE POLICY DASHBOARD header
    And User sees WHAT IS A COOKIE
    And User sees HOW AND WHY WE USE COOKIES
    And User sees KEEPING YOUR PERSONAL INFORMATION SAFE
    And User sees WHAT COOKIES DO WE USE ON OUR WEBSITE
    And User sees HOW TO MANAGE COOKIES THROUGH THE BROWSER


  @HLI-101:4 @HLI-101 @Regression
  Scenario: User clicks on Terms of Use
    When User clicks on Terms of Use and Policy page should open in new tab with title Terms of Use dashboard
    And User sees TERMS OF USE DASHBOARD header
    And User sees GENERAL header
    And User sees AVAILIBILITY AND ACCESS header
    And User sees ACCESS DETAILS header
    And User sees INFORMATION header
    And User sees YOUR USE header
    And User sees OUR RIGHTS IN THIS WEBSITE header
    And User sees LINKING FROM THIS WEBSITE header
    And User sees LINKING TO THIS WEBSITE header
    And User sees APPLICABLE LAW header
    And User sees CHANGES header
    And User sees LIMITATION OF LIABILITY header
    And User sees CONTACT US header


  @HLI-101:5 @HLI-101 @Regression
  Scenario: User clicks on ACCEPTABLE USE
    When User clicks on Acceptable Use and Policy page should open in new tab with Acceptable Use
    And User sees Acceptable Use header
    And User sees PROHIBITED USES
    And User sees INTERACTIVE SERVICES
    And User sees CONTENT STANDARDS
    And User sees CHANGES TO THE ACCEPTABLE USE POLICY

  @HLI-101:6 @HLI-101 @Regression
  Scenario: Open any privacy policy in a new tab
    When User clicks on Acceptable Use and Policy page should open in new tab with Acceptable Use
    Then User should see link for Privacy Policy on page footer
    And User should see link for Cookie Policy on page footer
    And User should see link for Terms of Use on page footer
    And User should see link for Acceptable Use on page footer
    And User should see link for Help & Contacts on page footer
    Then User should see Privacy Policy on header and when clicks on it then privacy police is loaded in same window
    Then User should see Cookie Policy and when clicks on it then Cookie Policy is loaded in same window
    Then User should see Terms of Use and when clicks on it then Terms of Use is loaded in same window
    Then User should see Help & Contacts and when clicks on it then Help & Contacts is loaded in same window


