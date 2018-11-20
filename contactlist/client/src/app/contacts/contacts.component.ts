import { Component, OnInit } from '@angular/core';
import { Contact } from '../contact'; 
import { ContactService } from '../contact.service';
//import { EmailValidator } from '@angular/forms';


@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
  providers: [ContactService]
})
export class ContactsComponent implements OnInit {

contacts: Contact[];
contact: Contact;
first_name:string;
last_name:string;
phone:string;
email:string;
 

  constructor(private contactService: ContactService) { }
//add contact
addContact()
{
const newContact = {
first_name:this.first_name,
last_name:this.last_name,
phone:this.phone,
email:this.email

}
this.contactService.addContact(newContact)
   .subscribe(contact =>{
   this.contacts.push(contact);
   this.contactService.getContacts()
   .subscribe( contacts =>
   this.contacts = contacts);
});
   
}
//delete service injected for delete buttoncomponent
   deleteContact(id:any)
   {
   var contacts=this.contacts;
   
   this.contactService.deleteContact(id)
   .subscribe(data =>{
   if(data.n==1)
   {
   for(var i = 0;i< contacts.length;i++) 
   {
   if(contacts[i]._id == id)
   {
   contacts.splice(i,1);
}
   }
   }
   });
   }
   
   
  ngOnInit() {
    this.contactService.getContacts()
    .subscribe( contacts =>
    this.contacts = contacts);
  }

}
