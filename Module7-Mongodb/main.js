// here we would not use const but we will be using var as mongo db do not ES6 
//In mongodb Tables of Mysql is called here as a collection
const express = require('express');
const app = express();
var mongoose = require('mongoose'); 
app.set('view engine','ejs');
app.set('views','./');
//mongodb://localhost:27017/student
//mongodb+srv://test:passsssss@cluster0-iev0v.mongodb.net/test?retryWrites=true&w=majority
mongoose.connect('mongodb://localhost:27017/student', {useNewUrlParser: true, useUnifiedTopology: true});
var conn=mongoose.connection;

var studentSchema = new mongoose.Schema({  // building the schema - > schema means defining the structure of the data base
    name:String,
    studentid:Number,
    college:String,
    email:String
});

// to work with the student Schema we must create a model so that we can work with it
var studentmodel = mongoose.model('student',studentSchema); // arg1- > table name , arg2 -> name of Schema
var students = new studentmodel({name:"Rahul",studentid:132,college:"Ucem",email:"rohit@gmail.com"});
// always Json format is followed
// model is type of class 
// then we create the object of that class ( studentmodel) and then add values inside the class


conn.on("connected",function(){
    console.log("connection done");
});
conn.on("disconnected",function(){
    console.log("disconnected is   done");
});
conn.on('error',console.error.bind(console,"connection error"));
conn.once('open',function(){ // here we have open the connection
    students.save(function(err,res){
        console.log('here 2');
        if(err) throw error;
        console.log(res);
        conn.close();
    });

   // displaying of data we fetch the data through the Model 
    // studentmodel.find({name:"ashish"},function(err,data){// we will use model here 
    //     if(err) throw err;

    //     console.log(data);
    //     res.render('index',{record:data});
    //     conn.close();
    // });
    // for updating 
    // studentmodel.findOneAndUpdate({name:"rishi"},{name:"kapil"},function(err,data){
    //     // first argument is to find the after finding it it updates it.
    //     if(err) throw err;

    //     console.log(data);
    //     conn.close();
    // });

    // for deleting

    // studentmodel.findOneAndDelete({name:"rishi"},function(err,data){
    //     if(err) throw err;

    //     console.log(data);
    //     conn.close();
    // });

    
  
});
// console.log(student);

app.get('/',(req,res)=>{
    studentmodel.find({name:"ashish"},function(err,data){// we will use model here 
                if(err) throw err;
        
                console.log("passed the data");
                console.log(data[0].name);
                res.render('index',{record:data[0]}); // note here we are doing data[0] beacause data some in the form 
                // array so we need to iterate over it : )
                conn.close();
            });
    
}) ;
app.listen(3000,()=>console.log("Server is running on the port 3000 ....."));

