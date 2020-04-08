const express = require('express');
const app = express();
app.set('view engine', 'ejs'); // this is fixed no change is required
app.set('views','./view'); // this is path -> set the path 
app.get('/',(re1,res)=>{  // as here we have not defined any path so this is default case as nothing is passed in path
    // if nothing is passed as the parameter then by default it will  go to the index.ejs page
    res.render('index');
});
app.get('/about/:a?.:b?',(req,res)=>{ // this is defined for to handle the page /about  // note that here a and b parameter  are not optional
    // paa parameter as 8-5  with '- 'in between
    res.render('about',{sum:parseInt(req.params.a)+parseInt(req.params.b),
    sub:parseInt(req.params.a)-parseInt(req.params.b)}); // params - > parameters
    // Please keep in mind that if we are taking the parameters from URL then it is type of ******REQUEST******
}); // here by default parameter is in string so to convert it into integer we use parse.Int()

/************** By post ***********************/
// here we use req.body.name instead of req.params.name  as here the data comes inside the body not as parameters
//  install body parser package - > npm install body-parser
// app.get('/about/:a-:b',(req,res)=>{
//     res.render('about',{sum:parseInt(req.params.a)+parseInt(req.params.b)});
// });
const bodyParser=require('body-parser'); // require body -parser package
// body-parser encodes the data travelling through the url and then passes to the body
 
app.use(bodyParser.urlencoded({extended:false})); // this both lines must be added , it encodes and passes the post values in body
app.use(bodyParser.json());          //  we know every value in Node Js must be of json format so , here it 
// we are converting it to json format


app.post('/about',(req,res)=>{ // here in the place of path we use path as same as where the form is present  as
    // our form is at '/about.ejs' so we use '/about' here
    res.render('login',{username:req.body.username , password:req.body.password});
    // we give the path where we have to transfer the file after the form action . so after about it goes to login page
});
    



app.listen(3000,()=>console.log('this file is running on port 3000 .....'));
