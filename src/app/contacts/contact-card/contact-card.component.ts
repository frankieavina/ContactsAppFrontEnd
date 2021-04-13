import { Component, OnInit,Input,NgModule } from '@angular/core';
import {Contact} from "../../contact";
import {ContactsService} from "../../contacts.service";

@Component({
  selector: 'app-contact-card',
  templateUrl: './contact-card.component.html',
  styleUrls: ['./contact-card.component.css']
})
export class ContactCardComponent implements OnInit {
  @Input() contact ?: Contact;

  constructor(private contactService: ContactsService) { }

  ngOnInit(): void {
  }

  onDeleteContact(nameInput: HTMLInputElement){
    this.contactService.deleteContacts(nameInput.value);
  }

  onCancelContact(){
    delete this.contact;
  }

  onSaveContact(nameInput: HTMLInputElement, emailInput: HTMLInputElement, numberInput: HTMLInputElement){
    const numberIn = parseInt(numberInput.value,10);
    // @ts-ignore
    this.contact.name = nameInput.value;
    // @ts-ignore
    this.contact.email = emailInput.value;
    // @ts-ignore
    this.contact.phone = numberIn;
  }

}
