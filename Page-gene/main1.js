const express = require('express');
const app = express();
const fs = require('fs');
const bodyParser=require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
var mongoose = require('mongoose');
//mongodb://localhost:27017/problems
//mongodb://user:passsddfsfdf@cluster0-shard-00-00-iev0v.mongodb.net:27017,cluster0-shard-00-01-iev0v.mongodb.net:27017,cluster0-shard-00-02-iev0v.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority
mongoose.connect('mongodb://user:Ashish123@cluster0-shard-00-00-iev0v.mongodb.net:27017,cluster0-shard-00-01-iev0v.mongodb.net:27017,cluster0-shard-00-02-iev0v.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true} , function(err){
    if(err) throw err;
    console.log('connected');
});
var conn=mongoose.connection;
var problemsSchema = new mongoose.Schema({
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
app.set('view engine','ejs');
app.set('views',[__dirname+'/view',__dirname+'/problems',__dirname+"/mainPages"]);
app.get('/problems',(req,res)=>{
    res.render('aa');
});
app.get('/design',(req,res)=>{
    res.render('design');
});
app.get('/nav',(req,res)=>{
    res.render('nav');
});
// app.get('/problems',(req,res)=>{
//     res.render('problems');
// });
app.get('/',(req,res)=>{
    res.send('working');
});

app.get('/problem',(req,res)=>{
    res.render('problem',{record:});
});
app.get('/about',(req,res)=>{
    res.render('about');
});
app.post('/design',(req,res)=>{
    var setpath="";
    for(var i=0;i<req.body.heading.length;i++){
        if(req.body.heading[i]!=' '){
            setpath=setpath+req.body.heading[i].toLowerCase();
        }else{
            setpath=setpath+'-';
        }
    }
    fs.copyFile('./view/publish.ejs','./problems/' + setpath + '.ejs',(err)=>{
        if(err){
            throw err;
        }else{
            console.log("file is successfully added to the directory");
        }
    });
    conn.on('error',console.error.bind(console,"connection error"));
    var question = new problemModel({
        path:setpath,
        heading:req.body.heading,
        description:req.body.description,
        input:req.body.input,
        output:req.body.output,
        sampleinput:req.body.sampleinput,
        sampleoutput:req.body.sampleoutput,
        explanation:req.body.explanation,
        code:req.body.code
    });
    conn.collection('problems').insertOne(question,function(err, collection){
        if (err) throw err;
        console.log("Record inserted Successfully");
        conn.close();
    });
    // conn.collection('problems').find({},function(err, collection){
    //     if (err) throw err;
    //     console.log("Record inserted Successfully "+collection);
    // });
    //console.log(question);
    res.render('design');
    //alert("your data has been added to the data base");
});
app.get('/problems/:a?',(req,res)=>{
    var getpath = req.params.a;
    // conn.collection('problems').find({path:getpath},function(err, collection){
    //     if (err) throw err;
    //     //res.render(''+getpath,{});
    //     console.log(collection+" "+collection[0]);
    //     conn.close();
    // });con

     console.log(getpath);
     conn.on('error',console.error.bind(console,"connection error"));
    // conn.once('open',function(){
        problemModel.find({path:getpath},function(err,data){
        if(err) throw err;
        console.log(data);
        res.render(''+getpath,{record:data[0]});

        conn.close();
        });

   // });
});
conn.on("connected",function(){
    console.log("connection done");
});
conn.on("disconnected",function(){
    console.log("successfully disconnected");
});


/// this is for the 404 page
app.get('*', function(req, res){
    res.render('404');
  });

app.listen(8080,()=>console.log('port started on 8080 .....'));