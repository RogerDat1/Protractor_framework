Feature: HLI_89_Help_Support_Config_Of_Click_2_Chat
  As a HLI User I want to be able to chat with a Support agent on Help & Support page so that I can seek help instantly

  Background:
    Given User has logged in HLI as UserType "basicUser"
    Then User sees Burger menu icon
    When I click the top left burger menu icon

  @HLI-89:1
  Scenario: User should be able to use HLI Help & Support
    Given User is accessing HLI Help & Support
    When  User needs help on any topic related to HLI
    Then  User should be able to chat with a customer service support by clicking link
    And   User should be able to START a chat during Customer support available timings
    And   User should be able to select a help category topic
    And   User should be able to see estimated wait time while in chat queue
    And   User should be able to Save a chat
    And   User should be able to End a chat
    And   User should be able to Send a message during outside support working hours