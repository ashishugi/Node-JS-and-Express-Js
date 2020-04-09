// here we would not use const but we will be using var as mongo db do not ES6 
//In mongodb Tables of Mysql is called here as a collection
var mongoose = require('mongoose');
var studentSchema = new mongoose.Schema({  // building the schema - > schema means defining the structure of the data base
   
    name:String,
    studentid:Number,
    college:String,
    email:String
});
studentSchema.methods.sum=function(){ // here we have to use '   this'
    console.log(this.studentid+this.college);
}
// to work with the student Schema we must create a model so that we can work with it
var studentmodel = mongoose.model('student',studentSchema); // arg1- > table name , arg2 -> name of Schema
var student = new studentmodel({name:"rishi",studentid:12,college:"UIT",email:"ash@gmail.com"});
// always Json format is followed
// model is type of class 
// then we create the object of that class ( studentmodel) and then add values inside the class

student.sum();


console.log(student);
const express = require('express');
const app = express();
app.get('/',(req,res)=>{
    res.send(" the data of the data base is "+student+" the email is "+student.email);
}) ;
app.listen(3000,()=>console.log("Server is running on the port 3000 ....."));