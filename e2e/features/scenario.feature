Feature: API requests

    Testing API requests
    
    Scenario:  API tests

        Given Request for creating new user is sent

        |  id  |  username  |  firstName  |  lastName  |  email  |  password  |  phone  |  userStatus  |
        |  12  |  Laza123  |  Lazar  |  Maric  |  testmail@gmail.com  |  laza123  |  02566665  |  2  |

        Then A new user "Laza123" should be created

        #When A user updates email: "testmail@gmail.com" for the user: "Lazar"
        #Then A new email: "testmail@gmail.com" should be updated

        #When A user tries to login
        #Then A user should be logged in successsfully

        #When A user tries to logout
        #Then A user should be logged out successfully

        #When A user tries to delete user by username "Lazar"
        #Then A user with username: "Lazar" should be deleted       
