Feature: API requests

    Testing API requests
    
    Scenario:  API tests

        Given Request for creating new user is sent

        |  id  |  username  |  firstName  |  lastName  |  email  |  password  |  phone  |  userStatus  |
        |  12  |  Laza123  |  Lazar  |  Maric  |  testmail@gmail.com  |  laza123  |  02566665  |  2  |

        Then A new user "Laza123" should be created

        When A user updates email: "testmail123@gmail.com" for the user: "Laza123"
        Then A new email: "testmail123@gmail.com" should be updated

        Then A user should be able to login successsfully

        Then A user should be able to logout successsfully

        Then A user should be able to delete user by username: "Laza123"       

        Then A user: "Laza123" should be deleted
