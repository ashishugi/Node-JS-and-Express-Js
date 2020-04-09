const express=require('express');
const app  = express();
app.set('view engine','ejs');
app.set('views','./view');
app.use(express.static(__dirname + '/view'));
console.log(__dirname+'/view');

app.get('/',(req,res)=>{
    res.send('this one is our home page');
}); 
app.get('/design',(req,res)=>{
    res.render('design');
});
const bodyParser=require('body-parser'); 
app.use(bodyParser.urlencoded({extended:false})); // this both lines must be added , it encodes and passes the post values in body
app.use(bodyParser.json());
app.post('/design',(req,res)=>{
    res.render('publish',{heading:req.body.heading,description:req.body.description,
    input:req.body.input,output:req.body.output,
    sampleinput:req.body.sampleinput,sampleoutput:req.body.sampleoutput,code:req.body.code
    });
});
app.listen(3000,()=>console.log('server started at port 3000 .....'));