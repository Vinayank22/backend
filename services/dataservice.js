const db = require('./db')

let currentUser

const register = (Username,Password,Empid,Name,Email, Phone, Designation, Address) => {
  return db.User.findOne({
    Empid
  })
    .then(user => {
      if (user) {

        return {
          result: false,
          statusCode: 422,
          message: "Account already exists"
        }

      }

      const newUser = new db.User({

        Username,
        Password,
        Empid,
        Name,
        Email,
        Phone,
        Designation,
        Address

      });
      newUser.save()
      return {
        result: true,
        statusCode: 200,
        message: "Account created Please login"
      }

    })
}
const login = (Username, Password) => {
  //console.log(abc.value);
  //console.log(defg.value)// Template Referencing
  //var acno = parseInt(acno1);
  return db.User.findOne({
    Username,
    Password
  })
    .then(user => {
      if (user) {
        //req.session.currentUser =Empid;
        return {
          status: true,
          statusCode: 200,
          message: "Login Success",
          name:user.name
        }
      }
      return {
        status: false,
        statusCode: 422,
        message: "Invalid credentials"
      }
    })
}


const logout = (req) => {
  req.User.deleteToken(req.Empid, (err, user) => {
    return {
      message: "logged out succesfully"
    }
  })
    
}




module.exports = {
  register,
  login,
  logout
  
}
