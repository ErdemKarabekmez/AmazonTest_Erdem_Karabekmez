Feature: Samsung TV

  Background: User is on the amazon home page

  @wip
  Scenario: Search Samsung television and verify "About this item" section
    Given user clicks on the hamburger menu in the top left corner
    When user clicks on the TV, Appliances and Electronics
    And user clicks on Televisions
    And user filters the results by Brand Samsung
    And user sorts the Samsung results with price High to Low
    And user clicks on the second highest priced item
    And switch the window
    Then verify that "About this item" section is present and log this section text to console