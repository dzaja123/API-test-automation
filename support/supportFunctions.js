const axios = require('axios').default;
const assert = require('assert');

const userUrl = 'https://petstore.swagger.io/v2/user'


class supportFuctions {

    createNewUser(dataTable) {
        const data = dataTable.hashes();
        axios.post(userUrl, {
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

    async checkUserByUsername(username, credentials) {
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

    emailUpdate(email, username) {
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
            .then(function(response) {
                //console.log(response);
            })
            .catch(function(error) {
                //console.log(error);
            })
    }

    login(username, password) {
        axios.get(userUrl + "/" + "login?username=" + username + "&" + "password" + "=" + password)
            .then(function(response) {
                //console.log(response);
            })
            .catch(function(error) {
                //console.log(error);
            })
    }

    logout() {
        axios.get(userUrl + "/" + "logout")
            .then(function(response) {
                //console.log(response);
            })
            .catch(function(error) {
                //console.log(error);
            })
    }

    deleteUser(username) {
        axios.delete(userUrl + "/" + username, {})
            .then(function(response) {
                //console.log(response);
            })
            .catch(function(error) {
                //console.log(error);
            })
    }
}

module.exports = new supportFuctions();