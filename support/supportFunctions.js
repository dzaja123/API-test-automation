const axios = require('axios').default;
const chai = require('chai');
const should = chai.should()

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
                response.status.should.be.equal(200)
            })
            .catch(function(error) {
                throw new Error(
                    `Cannot create new user, error: ${error.message}}`,
                );
            })
    }

    async getUserByUsername(username, credentials) {
        await axios.get(userUrl + "/" + username)
            .then(function(response) {
                response.status.should.be.equal(200)
                response.data.id.should.be.equal(parseInt(credentials[0].id))
                response.data.username.should.be.equal(credentials[0].username)
                response.data.firstName.should.be.equal(credentials[0].firstName)
                response.data.lastName.should.be.equal(credentials[0].lastName)
                response.data.email.should.be.equal(credentials[0].email)
                response.data.password.should.be.equal(credentials[0].password)
                response.data.phone.should.be.equal(credentials[0].phone)
                response.data.userStatus.should.be.equal(parseInt(credentials[0].userStatus))
            })
            .catch(function(error) {
                throw new Error(
                    `Cannot get user by username ${username}, error: ${error.message}}`,
                );
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
                response.status.should.be.equal(200)

            })
            .catch(function(error) {
                throw new Error(
                    `Cannot update email for user ${username}, error: ${error.message}}`,
                );
            })
    }

    async checkEmailUpdate(email, credentials) {
        await axios.get(userUrl + "/" + credentials[0].username)
            .then(function(response) {
                response.status.should.be.equal(200)
                response.data.id.should.be.equal(parseInt(credentials[0].id))
                response.data.username.should.be.equal(credentials[0].username)
                response.data.email.should.be.equal(email)
            })
            .catch(function(error) {
                throw new Error(
                    `Cannot get email for user ${username}, error: ${error.message}}`,
                );
            })
    }

    async loginUser(credentials) {

        let username = credentials[0].username
        let password = credentials[0].password

        await axios.get(userUrl + "/" + "login?username=" + username + "&" + "password" + "=" + password)
            .then(function(response) {
                response.status.should.be.equal(200)
            })
            .catch(function(error) {
                throw new Error(
                    `Cannot login user ${username}, error: ${error.message}}`,
                );
            })
    }

    async logoutUser() {
        await axios.get(userUrl + "/" + "logout")
            .then(function(response) {
                response.status.should.be.equal(200)
            })
            .catch(function(error) {
                throw new Error(
                    `Cannot logout user, error: ${error.message}}`,
                );
            })
    }

    async deleteUser(username) {
        await axios.delete(userUrl + "/" + username, {})
            .then(function(response) {
                response.status.should.be.equal(200)
            })
            .catch(function(error) {
                throw new Error(
                    `Cannot delete user ${username}, error: ${error.message}}`,
                );
            })
    }

    async getDeletedUser(username) {
        await axios.get(userUrl + "/" + username)
            .then(function(response) {
                throw new Error(
                    `User exists, error: ${response.data}}`,
                );

            })
            .catch(function(error) {
                error.response.status.should.be.equal(404)
                error.response.data.message.should.be.equal("User not found")
            })
    }
}

module.exports = new supportFuctions();
