Feature: Loads the page
    Scenario: App loads
        Given an app
        When I load the app
        Then I see the MPR Dashboard

    Scenario: Navigation
        Given I load the app
        Then I see the MPR Dashboard
        And I see the Markets report
        When I click the Swine link
        Then I see the Swine report
        When I click the Pork link
        Then I see the Pork report
        When I click the Markets link
        Then I see the Markets report
