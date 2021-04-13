import { Component, OnInit, NgModule } from '@angular/core';
import {Contact} from "../contact";
import {ContactsService} from "../contacts.service";
import {ContactInfo} from "../contact.model";

//wont need since our services imports it import {CONTACTS} from "../mock-contacts";


@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {



  contacts: Contact[] = [];
  // defining selectedContacts as a type Contact
  selectedContact ?: Contact;

  constructor(private contactService: ContactsService) {}

  // initialization on lifecycle hook so we get the contacts
  ngOnInit(): void {
    this.getContacts();
  }

  // click event handler
  onSelect(contact: Contact): void {
    this.selectedContact = contact;
  }

  // method the retrieve the contacts from the service
  getContacts() : void {
    this.contacts = this.contactService.getContacts();
  }

   onAddContact(nameInput: HTMLInputElement, emailInput: HTMLInputElement, phoneInput: HTMLInputElement){

    // assigning values phoneInput turning string to number
    const ingName = nameInput.value;
    const ingEmail = emailInput.value;
    const ingPhone = parseInt(phoneInput.value,10);

    // getting values and making a new type contact array
    const newContact  = new ContactInfo(ingName, ingEmail, ingPhone);

    this.contacts.push(newContact);
   }
}
