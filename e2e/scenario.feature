Feature: API requests

    Testing API requests
      
    Scenario: User create and return a new user 
        When A creates a new user
        Then A new user will be added to the database

    Scenario: User is able to verify that the user is created with the correct data
        When A user checks that the user is created correctly
        Then A the data from the database will be correct

    Scenario: User is able to update his email, verify update and return record
        When A user updates his email data
        And A user verifies that the update was successfull
        Then A user will be able to see the record 

    Scenario: User is able to login 
        When A user tries to login
        Then A user will be loged in successsfully

    Scenario: User is able to logout
        When A user tries to logout
        Then A user will be logged out

    Scenario: User is able to delete his account and verify that is deleted
        When A user tries to delete his account
        And A user verifies that the account is deleted from the database
        Then A user will be deleted from the database          
