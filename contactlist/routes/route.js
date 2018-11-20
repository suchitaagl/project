/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
const express = require('express');
const router = express.Router();
//const express =require('express');
const Contact = require('../models/contacts');

//retrieving contacts
router.get('/contacts', (req, res, next) => {
    Contact.find(function (err, contacts) {
        res.json(contacts);
    });
   
});

//add contact
router.post('/contact', (req, res, next) => {
    //logic to add contact
    let newContact = new Contact({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        phone: req.body.phone,
        email:req.body.email


    });
    newContact.save((err, contact) => {
        if (err) {
            res.json({msg: 'Failed to add contact'});
        } else {
            res.json({msg: 'Contact added successfully'});
        }
    });


    //  res.send('Retrieving the contact list');
});

//delete contacts
router.delete('/contact/:id', (req, res, next) => {
    //delete logic here
   Contact.remove({_id:req.params.id},function(err,result){
       if(err){
           res.json(err);
       }else{
           res.json(result);
       }
   });
});



module.exports = router;

