const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/Employees',{

    useNewUrlParser:true,
    //UseUnifiedTopology:true
    useUnifiedTopology: true,
    useCreateIndex: true, useFindAndModify: false


})
const User= mongoose.model('User',{
   
     Username:String,
     Password:String,
     Empid:String,
     Name:String,
     Email:String,
     Phone:Number,
     Designation:String,
     Address:String
    

    
},"Userportal")


module.exports = {
User

}

