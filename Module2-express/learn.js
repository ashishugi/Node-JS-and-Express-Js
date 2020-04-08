// Express is the framework of Node js  
//by using this lines of code get reduced
const express = require('express'); // 
const app = express(); // all the method came inside to app -> variable
app.get('/',(req,res)=>{ //  here '/ ' use to display the root directory that we have given at the time of npm installing  - > main.js
    res.send("server is running is express Js"); // this function is for displaying in the web page
}); //this above command will give respond to root page only(main.js)
// if we want to make the same things for others pages then we can also do like this again
app.get('/user',(req,res)=>{ //  from here we can give response to several other pages in this same way 
    res.send("Now we are on the user.js page running ");
});
// now we have to create server
app.listen(3000,()=>console.log("server is running on port 3000 . . . . ."));   


/************************** Template Engine *********************/

// when we render our page on browser of front -end in express js then we must use Template Engine of Express Js
//PUG - >  here the way of writing the html is different 
//EJS  -> here the way of writing the HTML is same .
// EJS 
/*
    here for writing the dynamic content we have syntax
    : -  1.  <% %>   this is used when we include the dynamic content between the html page
         2. For printing the data we use <%= %>  that is we ' = ' sign to print it
         ex-> <% if(user){ %>
                    <h2><%= user.name %></h2> // her the name will get printed .
              <% } %>
*/





/*************************** Static Files *************************/


/*
Simply create new folder if needed 
then add  
 app.use(express.static('public')) // here 'public ' indicates the folder where your all static files are being kept
   also for security purpose we can use virtual path prefix
   app.use('/static', express.static('public')) // this is for virtual path prefix  , here /static is virtual path which
    we must include in our all the path like while including css or images etc. 
    
    
    Write above function above where we have used app.get()
    and use this is place of main server excution() 
    app.get('/',(req,res)=>{
        res.sendFile(__dirname+'');   // here instead of the res.send() - > we will use res.sendFile(__dirname+"./index.js");
    });
    app.listen(3000,()=>console.log("server is working on port 3000 ....."));

*/


/******************************** Routing   add dynamic pages  ***********************/
// routing refers to determining how an application respond to a client request a particular endpoint , it works on URL
// method  - > get , post
/*
in above we were doing app.get('/users',function) - > then this was working for the users file 
because we were using the get() method -> we know in get method it can gets it values through its url
but if we do app.post('/users',function()) //  here in post() we cannot do that because post() cannot we have to send data to get data through post
get its values through url .



           
*/

// root with parameters
// by using this we can have the different user as different account 
app.get('/user',(req,res)=>{ 
    res.send("able to access the user .js page");   
});
//example;
// also  '/user/:id?' it means that id is optional .
/// we can do like id
app.get('/user/:id',(req,res)=>{ //here is id od new user
    req.params; // id is a request , here params is the property of the req. 
    res.send("able to access the user .js page and this is the data of user "+ req.params.id);   
});

app.get('/user/:id',(req,res)=>{ //here is id od new user
    req.params; // id is a request , here params is the property of the req. 
    res.send("able to access the user .js page and this is the data of user "+ req.params.id);   
});


/********************* Passing regular expression in req. *****************/

// IN this we have a regular expression pattern which we pass through the app.get(' pattern ( exp ) ' ,function())
// now if the request the pattern match then only our request will be successful else unsuccessful 
 app.get('/ashish*as',(req,res)=>{
    res.send(" hmm regular expression is working " + req.params[0]); // here the id b/w the pattern is passed for security purpose
     // and  req.params[0] has the id passed in url 
 });




 /*********************** Middle-ware ****************************/
 // In the above cases the url which we were giving url was not authenticated 
 // so to authenticate the URLS we must use the concept of the middle - ware .

 // here we have to add the condtition

 // same as login system 
 // MOre on login.
 const  express = require('express');
const app =  express();
var valid = function(req,res,next){
    console.log('Middle ware');
    next(); // this will move to next if correctly validated
}
var valid1 = function(req,res,next){

    console.log('This is the validation of the /user directory url ' +req.params.usersname );
    next();
}
//app.use(valid); // this will use the valid function , here when the request will come then it will first go to the app.use(valid)
// then it will go to the function to validate after it is correctly validated then it goes to app.get() and execute it .
app.get('/',(req,res)=>{
    res.send('ys inside the login page');
});
// but here problem is that it is global hence it will work for every validation
// but what if we want for simple url validation 
// so for individuall validation we can do like
app.get('/users/:usersname',valid1,(req,res)=>{
    res.send("user profile");
});

app.listen(3000,()=>console.log('The login page is running port 3000 .....'));  


/***************************** Template Engine of ExpressJs *****************/
// we must write app.use(' view engine','pug'); // view is the folder where is our file is present
 // app.set('view','./public/view)


// Note that for using any template engine we must install its package first like npm install pug
