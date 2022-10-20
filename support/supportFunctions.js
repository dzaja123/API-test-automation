const axios = require('axios').default;
const assert = require('assert');

const userUrl = 'https://petstore.swagger.io/v2/user'


class supportFuctions {

    async createNewUser(dataTable) {
        const data = dataTable.hashes();
        await axios.post(userUrl, {
                "id": data[0].id,
                "username": data[0].username,
                "firstName": data[0].firstName,
                "lastName": data[0].lastName,
                "email": data[0].email,
                "password": data[0].password,
                "phone": data[0].phone,
                "userStatus": data[0].userStatus
            })
            .then(function(response) {
                assert.equal(response.status, 200)
            })
            .catch(function(error) {
                console.log(error)
            })
    }

    async getUserByUsername(username, credentials) {
        await axios.get(userUrl + "/" + username)
            .then(function(response) {
                assert(response.status, 200)
                assert(response.data.id, credentials[0].id)
                assert(response.data.username, credentials[0].username)
                assert(response.data.firstName, credentials[0].firstName)
                assert(response.data.lastName, credentials[0].lastName)
                assert(response.data.email, credentials[0].email)
                assert(response.data.password, credentials[0].password)
                assert(response.data.phone, credentials[0].phone)
                assert(response.data.userStatus, credentials[0].userStatus)
            })
            .catch(function(error) {
                console.log(error);
            })
    }

    async emailUpdate(email, username, credentials) {
        await axios.put(userUrl + "/" + username, {
                "id": credentials[0].id,
                "username": credentials[0].username,
                "firstName": credentials[0].firstName,
                "lastName": credentials[0].lastName,
                "email": email,
                "password": credentials[0].password,
                "phone": credentials[0].phone,
                "userStatus": credentials[0].userStatus
            })
            .then(function(response) {
                assert(response.status, 200)

            })
            .catch(function(error) {
                console.log(error);
            })
    }

    async checkEmailUpdate(email, credentials) {
        await axios.get(userUrl + "/" + credentials[0].username)
            .then(function(response) {
                assert(response.status, 200)
                assert(response.data.id, credentials[0].id)
                assert(response.data.username, credentials[0].username)
                assert(response.data.firstName, credentials[0].firstName)
                assert(response.data.lastName, credentials[0].lastName)
                assert(response.data.email, email)
                assert(response.data.password, credentials[0].password)
                assert(response.data.phone, credentials[0].phone)
                assert(response.data.userStatus, credentials[0].userStatus)
            })
            .catch(function(error) {
                console.log(error);
            })
    }

    async loginUser(credentials) {

        let username = credentials[0].username
        let password = credentials[0].password

        await axios.get(userUrl + "/" + "login?username=" + username + "&" + "password" + "=" + password)
            .then(function(response) {
                assert(response.status, 200)
            })
            .catch(function(error) {
                console.log(error);
            })
    }

    async logoutUser() {
        await axios.get(userUrl + "/" + "logout")
            .then(function(response) {
                assert(response.status, 200)
            })
            .catch(function(error) {
                console.log(error);
            })
    }

    async deleteUser(username) {
        await axios.delete(userUrl + "/" + username, {})
            .then(function(response) {
                assert(response.status, 200)
            })
            .catch(function(error) {
                console.log(error);
            })
    }
}

module.exports = new supportFuctions();