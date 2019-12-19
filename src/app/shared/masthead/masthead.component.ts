import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DataService } from 'src/app/data.service';
@Component({
  selector: 'app-masthead',
  templateUrl: './masthead.component.html',
  styleUrls: ['./masthead.component.scss']
})
export class MastheadComponent implements OnInit {
  @Input() title: {
    main: string,
    sub: string,
    bg: string,
    cta?: boolean,
    action: 'signup' | 'redirect',
    redirectURL?: string,
    overlay?: {
      src?: string,
      alt?: string,
      width?: number
    }
  };

  emailSuccess = false;
  constructor(private data: DataService) { }

  ngOnInit() {
  }

  async mastheadAction(email?: string, redirectURL?: string) {
    if (email && email.indexOf('@') != -1) {
      return await this.data.signUp(email, { timestamp: null })
        .then(res => this.emailSuccess = true)
        .catch(err => console.log('ERROR! No Signup', err))
    }

  }

}
