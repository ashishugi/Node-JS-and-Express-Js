const express=require('express');
const app  = express();
var mongoose = require('mongoose'); // db
mongoose.connect('mongodb://localhost:27017/problems', {useNewUrlParser: true, useUnifiedTopology: true});
var conn=mongoose.connection;//db
app.set('view engine','ejs');
app.set('views',[__dirname+'/view',__dirname+'/problems']);
const fs = require('fs'); // this is for copying the pages
//app.use(express.static(__dirname + '/view'));
app.use(express.static("problems/")); // this is used to sending the static files ( in problem folder)
app.engine('.ejs', require('ejs').__express);

app.get('/problems',(req,res)=>{
    //res.send('this one is our home page');
    res.render('aa');
}); 
app.get('/design',(req,res)=>{
    res.render('design');
});
var problemsSchema = new mongoose.Schema({  // building the schema - > schema means defining the structure of the data base
    path:String,
    heading:String,
    description:String,
    input:String,
    output:String,
    sampleinput:String,
    sampleoutput:String,
    explanation:String,
    code:String
});
var problemModel = mongoose.model('problems',problemsSchema);
module.exports = problemModel;
conn.on("connected",function(){ //db
    console.log("connection done");
});
conn.on("disconnected",function(){ //db
    console.log("disconnected is   done");
});
const bodyParser=require('body-parser'); 
app.use(bodyParser.urlencoded({extended:false})); // this both lines must be added , it encodes and passes the post values in body
app.use(bodyParser.json());
app.post('/design',(req,res)=>{
    
    // res.render('publish',{heading:req.body.heading,description:req.body.description,
    // input:req.body.input,output:req.body.output,
    // sampleinput:req.body.sampleinput,sampleoutput:req.body.sampleoutput,code:req.body.code,
    // explanation:req.body.explanation});
    var name="";
    for(var i=0;i<req.body.heading.length;i++){
        if(req.body.heading[i]!=' '){
            name=name+req.body.heading[i].toLowerCase();
        }else{
            name=name+'-';
        }
    }
    console.log(1+" "+name);
    var problems = new problemModel({
        path:name,
        heading:req.body.heading,
        description:req.body.description,
        input:req.body.input,
        output:req.body.output,
        sampleinput:req.body.sampleinput,
        sampleoutput:req.body.sampleoutput,
        explanation:req.body.explanation,
        code:req.body.code
    });
    //console.log(problems);
    conn.on('error',console.error.bind(console,"connection error"));//db
    conn.once('open',function(){ // here we have open the connection
        // problems.save(function(err,res){
        //     if(err) throw error;
        //     console.log('->'+res);
        //     res.render('design');
        //     conn.close();
        // });
        problems.find({},(err,data)=>{
            if(err ) throw err
            console.log("here"+data);
        })
    });
    console.log(3);
    //name+='\0';
    // Now here i am going to make the new page i.e simply copy the content of the publish .ejs to our file
    fs.copyFile('./view/publish.ejs','./problems/' + name + '.ejs',(err)=>{
        if(err){
            throw err;
        }else{
            console.log("done : ) ");
        }
    });
    console.log(4+' '+name);
});
// app.get('/problems',(req,res)=>{
//     res.render('aa');
// })
app.get('/problems/:name',function(req,res){
        problemModel.find({path:"aa"},function(err,data){
        if(err) throw err;
        console.log('=> 2 '+data+ "  and "+req.params.name);
        console.log('+>3'+data);
        res.render(''+req.params.name,{record:data[0]}); // note here we are doing data[0] beacause data some in the form 
        // array so we need to iterate over it : )
    });
});



//This is being done to show the problems which is being created
// app.get('/problems/:path',(req,res)=>{
    
//     res.render(req.params.path);
// });
app.listen(3000,()=>console.log('server started at port 3000 .....'));


/********************* Now I am trying to install the mongo db ***************************/
// const MongoClient = require('mongodb').MongoClient;
// const assert = require('assert');         // both lines are to require the mongo db

// const url = 'mongodb://localhost:3000';

// const dbName = 'problems'; // name of our database 

// const client = new MongoClient(url);

// // now connecting to server

// client.connect(function(err) {
//     assert.equal(null, err);
//     console.log("Connected successfully to server");
//     const db = client.db(dbName);
//     // insertDocuments(db, function() {
//     //   updateDocument(db, function() {
//     //     removeDocument(db, function() {
//     //       client.close();
//     //     });
//     //   });
//     // });
//   });