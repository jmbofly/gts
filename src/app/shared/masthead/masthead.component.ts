import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { Masthead } from 'src/app/interface/masthead';
@Component({
  selector: 'app-masthead',
  templateUrl: './masthead.component.html',
  styleUrls: ['./masthead.component.scss']
})
export class MastheadComponent implements OnInit {
  @Input() title: Masthead;
  // defaults: Masthead = {
  //   main: 'Your Technology Solution',
  //   sub: 'Bringing Technology to People, Families, and Businesses',
  //   bg: '../assets/img/bg-masthead.jpg',
  //   cta: true,
  //   action: 'signup',
  //   overlay: {
  //     width: 300
  //   },
  // }
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
