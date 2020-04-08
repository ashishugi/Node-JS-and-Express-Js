/************************** object in javascript **********************/
var user = {
    name:"ashish",
    age:21,
    branch:"computer science",
    college:"UIT"
};
console.log(user.age)
/************************* Anonnymus function *****************/ // ->function with no name . or lambda function
var person = function(a,b){
    var c= a+b
    console.log("inside the function and the result of the sum is : "+c)
}
console.log(person(4,4))


/************************** Arrow Function     *********************/
var person1 = function(){
    console.log("This is not an arrow function")
}
var person2=()=> console.log("this is an arrow function valid for single line only"); // this is the shorter ways to write the anonymus function, this is valid till single line only 
person1();
person2();
//for multiple line use 
var person3=(a,b)=>{
    console.log("hello my name is :"+a+" and my age is :"+b);
}
person3("ashish",21);

/********************* GLOBAL    OBJECTS ******************/
//__dirname -> gives the path of file
//__filename ->gives the file name
// require -> used import files
// buffer -> stores temporary memory
// export -> to export the file
//module
// console

console.log(__dirname);
console.log(__filename);
var main = require('./main.js'); // './' used for root directory - > it will give the output of the main.js file  ,it will print only output things of main,js 
// for accessing all the objects of main.js we must export from there and import it here
console.log(main.name);


/*************************** ECMASCRIPT ES6 *************/
//let ,const
var a =30;
var a=40; // here it will not give any error
console.log(a);
let c =30;
//let c= 40; // But here it will give error as we cannot use let for  2nd assignment of same variable
console.log(c);
// const - > Once defined then cannot be over written
const d = 30;
// const d=40; it will generate the error
console.log(d);
const e= {
    name:"ashish",
    age:49
};
console.log(e.name);
e.name="kumar" // we change the values like this
console.log(e.name);

// template string 
var name1 = "ashish";
console.log(`hi ${name1}`); // note here instead of single /double coats we have used another tilted symbol
//Class
class users{
    constructor(){
        this.name="Ashish Kumar Gupta";
        this.age=21;
    }
    getname(){ // this is the function deceleration in this .
        return this.name;
    }
    getage(){
        return this.age;
    }
}
var user1 = new users();
console.log(user1.name);
console.log(user1.age);

/*************** prototyping  ********************/
// same as inheritance 
var student =function(){ // OR function student(){ }
    this.name="ashish";
    this.age=21;
    this.email="a@gmail.com";
}
student.prototype={
    address:"INDIA"
}
var st = new student();
console.log(st.address);
console.log(st);

/********************** Modules  (Importing / Exporting)*********************/
//Used to shorten the page , We can include one written page to several other pages without again writing it .
// here making different module on addition , multiplication , subtraction , division and importing in this.
var add = require('./add');
add.add(); // one way of exporting see on add.js
var sub = require('./sub'); // another way of exporting see on sub.js file
console.log(sub.sub());
console.log(sub.a);

/******************************** HTTP Module ***************************/
//predefined module of NodeJs
const http = require('http'); // as http is predefined so we do not use './'
// Used to create the server 
const server = http.createServer(function(req,res){ // 200  is used to successful 
    res.writeHead(200,{"content-type":"text/html"}); // This is used to define how we should use our text or display on web-site -> text/plain or text.html
    res.write("<h1 > Node Js is running </h1> "); // this will write in our page
    res.end(); // this we have to do because if we do not provide ending point then it will buffer only -> it simply mean that ( browser is simply waiting for the server's response to end) server has now respond and done what it has to do now browser should end requesting from the server // also one must end() the file respond
}).listen(3000,()=>console.log("server is running ..... on port 3000")); // this for developer not for client // request ->req , respond - > res
//Now we have to define the port for the run


/********************** Nodemon  ***********************/
// Install Nodemon - > by using this we do not need to every time start the server every time .This is package of NODE JS
// use sudo npm install -g nodemon ,, NOw for running file use nodemon file.js



/************************** File system module **************/
const fs  = require('fs'); // here fs is the in build file system
fs.readFile(__dirname+"/hello.txt","utf8",(err,data)=>{ // we have to add the file path here ,then the format of the file ,function () with error argument and then data -> if error then it will throw the error else it will print the file data
    if(err) throw err;
    console.log(data);
});
//fs.unlink(__dirname+"/hello.txt",(err,data)=>{// it will delete the file hello.txt
   // if(err) throw err;
   // console.log("the file is begin delete "+data);
//}); 



/****************  Synchronous and Asynchronous Method **********************/
//Asynchronous method - > here server is sent to server and then serval other request also goes , now
// here if any request takes less time then it will be executed before than those which takes long time 
// server in asynchronous do not wait for the current request to complete but it moves further 
// by default every function () is Asynchronous
// For synchronous use try {} and catch { }




// NEXT PART IS ON LEARN1.JS