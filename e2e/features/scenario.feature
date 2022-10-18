Feature: API requests

    Testing API requests
      
        When A user creates a new user
        When A user checks by {username} that the user is created 
        Then A new user {username} should be created

        When A user updates email: {email} for the user: {username}
        Then A new email: {email} should be updated

        When A user tries to login
        Then A user should be logged in successsfully

        When A user tries to logout
        Then A user should be logged out successfully

        When A user tries to delete user by {username}
        Then A user with username: {username} should be deleted       
