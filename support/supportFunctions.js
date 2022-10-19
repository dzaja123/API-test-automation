const axios = require('axios').default;

const userUrl = 'https://petstore.swagger.io/v2/user'


class supportFuctions {

  createNewUser(id, username, firstName, lastName, email, password, phone, userStatus) {
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
      //console.log(response.status);
    })
    .catch(function (error) {
      //console.log(error);
    })
  }

  checkUserByUsername(username) {
    axios.get(userUrl + "/" + username)
    .then(function (response) {
      //console.log(response);
    })
    .catch(function (error) {
      //console.log(error);
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
    .then(function (response) {
      //console.log(response);
    })
    .catch(function (error) {
      //console.log(error);
    })
  }

  login(username, password) {
    axios.get(userUrl + "/" + "login?username=" + username + "&" + "password" + "=" + password)
    .then(function (response) {
      //console.log(response);
    })
    .catch(function (error) {
      //console.log(error);
    })
  }

  logout() {
    axios.get(userUrl + "/" + "logout")
    .then(function (response) {
      //console.log(response);
    })
    .catch(function (error) {
      //console.log(error);
    })
  }

  deleteUser(username) {
    axios.delete(userUrl + "/" + username, {})
    .then(function (response) {
      //console.log(response);
    })
    .catch(function (error) {
      //console.log(error);
    })
  }
}

module.exports = new supportFuctions();