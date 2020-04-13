var mongoose = require('mongoose'); // db
mongoose.connect('mongodb://localhost:27017/problems', {useNewUrlParser: true, useUnifiedTopology: true});
var conn=mongoose.connection;//db
var problemsSchema = new mongoose.Schema({  // building the schema - > schema means defining the structure of the data base
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
module.exports = problemModel;
conn.on("connected",function(){ //db
    console.log("connection done");
});
conn.on("disconnected",function(){ //db
    console.log("disconnected is   done");
});