/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
const mongoose=require('mongoose');


const ContactSchema = mongoose.Schema({
    first_name:{
     type:String,
     required:true
    },
     last_name:{
     type:String,
     required:true
    },
    phone:{
     type:String,
     required:true
    },
    email:{
        type:String,
     required:true 
    }  
});

const Contact = module.exports = mongoose.model('Contact',ContactSchema);