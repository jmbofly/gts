import { Component, OnInit } from '@angular/core';
import { DataService } from '../../core/data.service';

@Component({
  selector: 'app-call-to-action',
  templateUrl: './call-to-action.component.html',
  styleUrls: ['./call-to-action.component.scss']
})
export class CallToActionComponent implements OnInit {
  signUpSuccess = false;
  signUpError = false;

  alerts = [];
  constructor(public data: DataService) { }

  ngOnInit() {
  }

  async signUpWithEmail(email: string, data?: any, redirect = false) {
    let error = '';
    const redirectUrl = 'https://xstreamingtv.com/dump/aff/go/kevin';
    if (email.indexOf('@') != -1) {
      return await this.data.signUp(email, data).then(res => {
        this.signUpSuccess = true;
        // console.log(res)
      }).catch(err => {
        error = err;
      });
    } else {
      error = 'Please enter a valid email!';
      console.log('Error on signup', error);
    }
  }

}
