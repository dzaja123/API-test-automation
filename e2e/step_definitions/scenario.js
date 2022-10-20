const { Given, When, Then, And } = require('cucumber');

const supportFunctions = require('../../support/supportFunctions');

let credentials;

Given('Request for creating new user is sent', async(dataTable) => {
    credentials = dataTable.hashes();
    await supportFunctions.createNewUser(dataTable);
});


Then('A new user {string} should be created', async(username) => {
    await supportFunctions.getUserByUsername(username, credentials);

});


When('A user updates email: {string} for the user: {string}', async(email, username) => {
    await supportFunctions.emailUpdate(email, username, credentials);
});


Then('A new email: {string} should be updated', async(email) => {
    await supportFunctions.checkEmailUpdate(email, credentials);
});


Then('A user should be able to login successsfully', () => {
    supportFunctions.loginUser(credentials);
});


Then('A user should be able to logout successsfully', () => {
    supportFunctions.logoutUser();
});


Then('A user should be able to delete user by username: {string}', (username) => {
    supportFunctions.deleteUser(username);
});

