import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../core/data.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  @Input() isPage = true;
  contactData = {
    name: '',
    email: '',
    message: ''
  };

  success = false;

  constructor(private data: DataService) { }

  ngOnInit() {
  }

  async addNewContact(data: { name: string, email: string, message: string }) {
    return await this.data.newContact(data).then(res => this.success = true);
  }

}
