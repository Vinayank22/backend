const express= require('express')
const dataservice= require('./services/dataservice')
const app= express();
const session=require('express-session');
const cors= require('cors')

app.use(cors({
    origin:'http://localhost:4200',
    cresentials:true
}))
app.use(session({
    secret: 'randomsecurestring',
    resave:false,
    saveUninitialized:false
}));
app.use(express.json())
const logMiddlewear=(req,res,next) =>{
    console.log(req.body)
    next();

}
app.use(logMiddlewear);
const authMiddlewear= (req,res,next)=>{
    if(!req.session.currentUser)
    {
        return res.json({
            status:false,
            statusCode:401,
            message:"Not authenticated please login",
        
          })
  
    }else{
        next();
    }
}


app.get('/',(req,res)=>{

    res.send("helloworld nodemon");
})
app.post('/register',(req,res)=>{
     dataservice.register(req.body.Username,req.body.Password,req.body.Empid,req.body.Name,req.body.Email,req.body.Phone,req.body.Designation,req.body.Address)
     .then(result=>{

        res.status(result.statusCode).json(result);
     })
     
})
app.post('/login',(req,res)=>{
    dataservice.login(req.body.Username,req.body.Password)
    .then(result=>{
   res.status(result.statusCode).json(result);
    })
})


app.put('/',(req,res)=>{

    res.send("put methd");
})
app.patch('/',(req,res)=>{

    res.send("patch methd");
})
app.delete('/test',(req,res)=>{

    res.send("delete methd");
})
app.listen(4000,()=>{
    console.log("server started at port 4000")
})
