const http = require('http');
const fs = require('fs');
const server=http.createServer(function(req,res){
    
    // fs.readFile(__dirname+"/hello.html","utf8",(err,data)=>{
    //     res.writeHead(200,{"content-type":"text/html"});
    //     if(err) throw err;
    //     res.write(data);
    //     res.end(); // also one must end() the file respond
    // });
    
}).listen(3000,console.log("file .js is runnning on the port 3000 ......"));




// synchronus method
try{
    const data = fs.readFileSync(__dirname+"/hello.html","utf8");
    console.log(data);
}catch(e){
    console.log(e);
}