const express = require('express');
const app = express();
app.set('view engine', 'pug'); // this is fixed no change is required
app.set('views','./view'); // this is path -> set the path 
// NOte here first argument  is always views as it is the constructor of the engine , while 2nd argument is the path where 
// static file is begin located.
app.get('/',(req,res)=>{
    res.render('index', { title: 'Hey', message: 'Hello there!' }) // here we are using res.render ( ) ,
    // it is because the pages are always rendered not send so using render .
    // here index - > is the root page. // next is the data that we need to pass there - > format here used is the json format
});
app.listen(3000,()=>console.log("server is starting at port 3000 ....."));
