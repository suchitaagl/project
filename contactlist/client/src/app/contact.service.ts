import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { HttpClient,HttpHeaders } from '@angular/common/http'; 
import { Contact } from './contact'; 
import 'rxjs/add/operator/map';

@Injectable()
export class ContactService {

  constructor(private http: HttpClient) { } 
  
  //retrieving ContactService
  
  getContacts()
  {
  return this.http.get('http://localhost:3010/api/contacts')
  .map(res => res);
  }
   
  //add contact method
   addContact(newContact)
   {
   var headers = new Headers();
   headers.append('Content-Type','application/json');
   return this.http.post('http://localhost:3010/api/contact',newContact,{headers:headers})
   .map(res => res);
   
   }
    //delete contact 
   deleteContact(id) 
   {
   return this.http.delete('http://localhost:3010/api/contact/'+id)
   .map(res => res);
   
   }
}
