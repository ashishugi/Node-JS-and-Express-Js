const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/employee', {useNewUrlParser: true, useUnifiedTopology: true});
// here employee refers to the name of the database
var conn = mongoose.connection;
var employeeSchema=new mongoose.Schema({
    name:String,
    email:String,
    marks:Number
});
var employeeModel=mongoose.model('Employee',employeeSchema);
var employees = new employeeModel({
    name:"ashish",
    email:"a@outlook.com",
    marks:34
});

conn.on("connected",function(){
    console.log("connection is done");
});
conn.on("disconnected",function(){
    console.log("disconnected successfully");
});
conn.on('error',console.error.bind(console,"connection error"));
conn.once('open',function(){
    employees.save(function(err,res){
        if(err) throw error;
        console.log(res);
        conn.close();
    });
});