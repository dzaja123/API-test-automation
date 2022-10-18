const {Given, When, Then, And} = require('cucumber');
const axios = require('axios').default;

const userURL = 'https://petstore.swagger.io/v2/user'


function createNewUser(id, username, firstName, lastName, email, password, phone, userStatus) {
    
    responce = 
    axios({
    method: 'post',
    url: userUrl,
    data: {
        "id": id,
        "username": username,
        "firstName": firstName,
        "lastName": lastName,
        "email": email,
        "password": password,
        "phone": phone,
        "userStatus": userStatus
    }
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });

    return responce
}

When('A user creates a new user', () => {
  createNewUser(12, "Laza123", "Laza", "Maric", "email@gmail.com", "laza", "061123122", 1)

});

When('A user checks by {username} that the user is created ', (username) => {


});

Then('A new user {username} should be created', (username) => {

});


When('A user updates email: {email} for the user: {username}', (email, username) => {


});


Then('A new email: {email} should be updated', (email) => {

});


When('A user tries to login', () => {


});


Then('A user should be logged in successsfully', () => {

});


When('A user tries to logout', () => {


});


Then('A user should be logged out successsfully', () => {

});


When('A user tries to delete user by {username}', (username) => {


});


Then('A user with username: {username} should be deleted', (username) => {

});
 