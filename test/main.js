const express =  require('express');
var fs = require('fs');
const app = express();
app.set('view engine','ejs');
app.set('views','./view');
//console.log(__dirname);
app.get('/',(req,res)=>{
    res.send("working");
    // fs.writeFile(__dirname+'/view/final.ejs','',(err)=>{
    //     if(err) throw err;
    //     else{
    //         console.log('file is being created');
            
    // });
            fs.copyFile('./view/index.ejs','./view/final.ejs',(err)=>{
                console.log('1');
                if(err){
                    console.log('2');
                    throw err;
                }else{  
                    console.log('3');
                    console.log('Copied the file suceesfully');
                    res.render('final.ejs');
                   // res.send('congrats bro you have made It :D');
                    console.log('4');
                }
                console.log('5');
            });
        
    
});
app.listen(8080,()=>("port 8080"));


// http.createServer(function(req, res) {
//   // This opens up the writeable stream to `output`
//   var writeStream = fs.createWriteStream('./output');

//   // This pipes the POST data to the file
//   req.pipe(writeStream);

//   // After all the data is saved, respond with a simple html form so they can post more data
//   req.on('end', function () {
//     res.writeHead(200, {"content-type":"text/html"});
//     res.end('<form method="POST"><input name="test" /><input type="submit"></form>');
//   });

//   // This is here incase any errors occur
//   writeStream.on('error', function (err) {
//     console.log(err);
//   });
// }).listen(8080,()=>console.log('server is running on port 8080'));