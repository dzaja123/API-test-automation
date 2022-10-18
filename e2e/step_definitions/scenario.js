const {Given, When, Then, And} = require('cucumber');
const axios = require('axios').default;

const userUrl = 'https://petstore.swagger.io/v2/user'


function createNewUser(id, username, firstName, lastName, email, password, phone, userStatus) {

    axios.post(userUrl, {
    "id": id,
    "username": username,
    "firstName": firstName,
    "lastName": lastName,
    "email": email,
    "password": password,
    "phone": phone,
    "userStatus": userStatus
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
}

When('A user creates a new user', () => {
  createNewUser(12, "Laza123", "Lazar", "Maric", "email@gmail.com", "laza", "061123122", 1)

});

When('A user checks by username {string} that the user is created ', (username) => {


});

Then('A new user {string} should be created', (username) => {

});


When('A user updates email: {string} for the user: {string}', (email, username) => {


});


Then('A new email: {string} should be updated', (email) => {

});


When('A user tries to login', () => {


});


Then('A user should be logged in successsfully', () => {

});


When('A user tries to logout', () => {


});


Then('A user should be logged out successsfully', () => {

});


When('A user tries to delete user by {string}', (username) => {


});


Then('A user with username: {string} should be deleted', (username) => {

});
 