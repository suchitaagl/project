/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
//importing modules
var express=require('express');
var mongoose=require('mongoose');
var bodyparser=require('body-parser');
var cors=require('cors');
var path=require('path');

var app=express();

const route= require('./routes/route');

//connect to mongodb
mongoose.connect('mongodb://localhost:27017/contactlist');

//on connection
mongoose.connection.on('connected',()=>{
    console.log('Connected to database mongodb@27017');
});

//on error
mongoose.connection.on('error',(err)=>{
    if(err){
    console.log('could not Connect to database mongodb@27017'+err);
}
});
//port no
const port = 3010;

//adding middleware
app.use(cors());

//body-parser
app.use(bodyparser.json());

//static files
app.use(express.static(path.join(__dirname,'public')));

//routes
app.use('/api',route);
//testing Server
app.get('/',(req,res)=>{
    res.send('foobar');      
});

app.listen(port,()=>{
    console.log('Server started successfully'+ port);
});



