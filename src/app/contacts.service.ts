// creating a contacts service that can be used app wide


import { Injectable } from '@angular/core';
import {Contact} from "./contact";
import {CONTACTS} from "./mock-contacts";

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  constructor() { }

  //--------------- getting contact information -----------------------
  getContacts() : Contact[] {
    return CONTACTS;
  }

  //------- deleting data depending on selected name ------------------
  deleteContacts(contactDelete: string){

      for (let i =0; i <= CONTACTS.length+1 ; i++){
          if( contactDelete == CONTACTS[i].name){
            CONTACTS.splice(i,1)
          }
      }
   }// end of delete contacts method

}//end of class
