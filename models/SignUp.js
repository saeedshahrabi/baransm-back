const getDB = require('../utility/dataBase').getDB



class SignUp {
  constructor(name, email, password) {
    this.name = name
    this.email = email
    this.password = password
  }

  saveSignUp() {
    const db = getDB()
    return db.collection('SignUp')
      .insertOne(this)
      .then((result) => {
        console.log(result)
      })
    .catch((err)=>console.log(err))
  }
}
module.exports = SignUp