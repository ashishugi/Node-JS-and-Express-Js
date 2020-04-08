const  express = require('express');
const app =  express();
var valid = function(req,res,next){
    console.log('Middle ware');
    next(); // this will move to next if correctly validated
}
var valid1 = function(req,res,next){
    if(req.params.username == "ashish"){
        //res.send("found");
        next();        // if the  validation is correct then we use next so that it go to app.get() again
    }else{
        //res.send(" you are not a valid user");
        
    }
}
app.use(valid); // this will use the valid function , here when the request will come then it will first go to the app.use(valid)
// then it will go to the function to validate after it is correctly validated then it goes to app.get() and execute it .
app.get('/',(req,res)=>{
    res.send('ys inside the login page');
});
// but here problem is that it is global hence it will work for every validation
// but what if we want for simple url validation 
// so for individuall validation we can do like
app.get('/users/:username',valid1,(req,res)=>{
    res.send("this");
});

app.listen(3000,()=>console.log('The login page is running port 3000 .....'));  