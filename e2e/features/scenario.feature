Feature: API requests

    Testing API requests
      
        When A user creates a new user
        When A user checks by username "Lazar" that the user is created 
        Then A new user "Lazar" should be created

        When A user updates email: "testmail@gmail.com" for the user: "Lazar"
        Then A new email: "testmail@gmail.com" should be updated

        When A user tries to login
        Then A user should be logged in successsfully

        When A user tries to logout
        Then A user should be logged out successfully

        When A user tries to delete user by username "Lazar"
        Then A user with username: "Lazar" should be deleted       
