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
    //console.log(response);
  })
  .catch(function (error) {
    //console.log(error);
  })
}

function checkUserByUsername(username) {
  axios.get(userUrl + "/" + username)
  .then(function (response) {
    //console.log(response);
  })
  .catch(function (error) {
    //console.log(error);
  })
}

function emailUpdate(email, username) {
 axios.put(userUrl + "/" + username, { 
    "id": 12,
    "username": "Laza123",
    "firstName": "Lazar",
    "lastName": "Maric",
    "email": email,
    "password": "laza",
    "phone": "061123122",
    "userStatus": 1
  })
  .then(function (response) {
    //console.log(response);
  })
  .catch(function (error) {
    //console.log(error);
  })
}

function login(username, password) {
  axios.get(userUrl + "/" + "login?username=" + username + "&" + "password" + "=" + password)
  .then(function (response) {
    //console.log(response);
  })
  .catch(function (error) {
    //console.log(error);
  })
}

function logout() {
  axios.get(userUrl + "/" + "logout")
  .then(function (response) {
    //console.log(response);
  })
  .catch(function (error) {
    //console.log(error);
  })
}

function deleteUser(username) {
  axios.delete(userUrl + "/" + username, {})
  .then(function (response) {
    //console.log(response);
  })
  .catch(function (error) {
    //console.log(error);
  })
}


When('A user creates a new user', () => {
  createNewUser(12, "Laza123", "Lazar", "Maric", "email@gmail.com", "laza", "061123122", 1)
});


Then('A new user {string} should be created', (username) => {
  checkUserByUsername(username)
});


When('A user updates email: {string} for the user: {string}', (email, username) => {
  emailUpdate(email, username)
});


Then('A new email: {string} should be updated', (email) => {

});


When('A user tries to login', () => {

});


Then('A user should be logged in successsfully', () => {

});


When('A user tries to logout', () => {

});


Then('A user should be logged out successfully', () => {

});


When('A user tries to delete user by username {string}', (username) => {
  deleteUser(username)
});


Then('A user with username: {string} should be deleted', (username) => {

});
 