const express = require('express');
const app=express();
app.use(express.static("views"));
const bodyParser = require('body-parser'); // for the post method
const { check, validationResult } = require('express-validator');
// this is used for validation in the express Js
// here check parameter is for checking the errors
// and validation result is for the 

app.use(bodyParser.urlencoded({ extended: false }));// for the post method
app.use(bodyParser.json());// for the post method
app.set('view engine','ejs');
app.set('views','./views');
app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/views/index');
});
app.get('/login',(req,res)=>{
    res.render('login');
});

// here we have used the middle - ware  -> here we will get values of the post method
//the next parameter is of array - > [ check1 , check2  ] 
// in check('arg1','arg2')  arg1 - > which parameter to be checked , arg2 - > if error occurs what to be displayed
app.post('/login',[check('email' , 'enter a valid email').isEmail(),
check('password','enter more 5 length password').isLength({min:5})
],(req,res)=>{
    const  error = validationResult(req);
    console.log(error.mapped()); // error.mapped() is used to show the multiple error
    res.render('user',{username:req.body.username,email:req.body.email,password:req.body.password,cpassword:req.body.cpassword});
});
app.listen(3000,function(){
    console.log("server is running on the port 3000 .....");
});