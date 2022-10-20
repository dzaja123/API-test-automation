const { Given, When, Then, And } = require('cucumber');

const supportFunctions = require('../../support/supportFunctions');

let credentials;

Given('Request for creating new user is sent', (dataTable) => {
    credentials = dataTable.hashes();
    supportFunctions.createNewUser(dataTable);
});


Then('A new user {string} should be created', async(username) => {
    await supportFunctions.checkUserByUsername(username, credentials);

});


When('A user updates email: {string} for the user: {string}', (email, username) => {
    supportFunctions.emailUpdate(email, username);
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
    supportFunctions.deleteUser(username);
});


Then('A user with username: {string} should be deleted', (username) => {

});