const { Given, When, Then, And } = require('cucumber');

const supportFunctions = require('../../support/supportFunctions');

let credentials;

Given('Request for creating new user is sent', (dataTable) => {
    credentials = dataTable.hashes();
    supportFunctions.createNewUser(dataTable);
});


Then('A new user {string} should be created', async(username) => {
    await supportFunctions.getUserByUsername(username, credentials);

});


When('A user updates email: {string} for the user: {string}', (email, username) => {
    supportFunctions.emailUpdate(email, username, credentials);
});


Then('A new email: {string} should be updated', (email) => {
    supportFunctions.checkEmailUpdate(email, credentials);
});


Then('A user should be able to login in successsfully', () => {
    supportFunctions.loginUser(credentials);
});


Then('A user should be able to logout in successsfully', () => {
    supportFunctions.logoutUser();
});


Then('A user should be able to delete user by username: {string}', (username) => {
    supportFunctions.deleteUser(username);
});

