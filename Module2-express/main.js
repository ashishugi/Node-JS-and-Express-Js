const express = require('express');
const app = express();
app.use(express.static("public")); // here public is the folder inside which the file static file is present
app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/public/index.html'); // / indicate root so from root one must go to index.html 
    // remember to use this app.use(express.static("public"));
});
// the below program is needs to be executed when  user enter different urls
app.get('/user/:id?',(req,res)=>{ // ' ? ' is added here this indicates that id here is optional
    if(req.params.id == undefined){ // no id is passed 
        res.send('This is done to show all users data');
    }else{                          // if id is passed
        res.send('the user logged in has the id :'+req.params.id);
    }
});

// app.get('/flights/:from-:to',(req,res)=>{ // ' ? ' is added here this indicates that id here is optional here we are using ' - '
//               // if id is passed
//         res.send('the user   is searching for the flight: '+req.params.from+"  to :  "+req.params.to);
// });
 // now using ' . '

app.get('/flights/:from?.:to?',(req,res)=>{ // ' ? ' is added here this indicates that id here is optional here we are using ' - '
// if id is passed
res.send('the user   is searching for the flight: '+req.params.from+"  to :  "+req.params.to);
});

app.listen(3000,()=>console.log("server is working on port 3000 ....."));