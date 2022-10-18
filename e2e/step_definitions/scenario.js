const {Given, When, Then, And} = require('cucumber');
const axios = require('axios');


When('A user creates a new user', () => {


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
 