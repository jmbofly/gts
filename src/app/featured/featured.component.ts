import { Component, OnInit, Input } from '@angular/core';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { DataService } from '../core/data.service';
import { GoogleAnalyticsService } from "../core/google-analytics.service";
// import { FacebookService, LoginOptions } from 'ngx-facebook';
@Component({
  selector: 'app-featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.scss']
})
export class FeaturedComponent implements OnInit {
  @Input() isPage = true;

  title = {
    main: 'Featured Partner',
    sub: 'Want to know more about this partner?',
    cta: true,
    bg: 'bg-masthead-4.jpg',
    action: 'redirect',
    redirectURL: 'https://xstreamingtv.com/dump/aff/go/kevin',
    overlay: {
      src: 'xstreamingtv-logo.png',
      alt: 'Xstreaming tv logo',
      width: 300
    }
  }

  signUp = {
    name: null,
    email: null,
    phone: null,
    optedOut: false
  }

  phoneRegEx = '(\+0?1\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}';

  constructor(public modal: NgbModal, private data: DataService, public ga: GoogleAnalyticsService) { }

  ngOnInit() {
  }

  openModal(content, config: NgbModalConfig | any = { size: 'xl', ariaLabelledBy: 'sign-up-modal' }) {
    const modalRef = this.modal.open(content, config);
    // this.ga.eventEmitter('')
    // modalRef.result.then(results => {
    //   const data = {
    //     name: results.name,
    //     email: results.email
    //   };
    //   const redirectURL = this.title.redirectURL;
    //   this.signupAndRedirect(data, redirectURL);
    //   console.log('modal results complete', results);
    // })
  }

  getImage(name: string) {
    return this.data.getImage(name);
  }


  signupAndRedirect(data: any, redirectURL: string, ga = {}) {
    if (data.optedOut) {
      this.modal.dismissAll();
      return window.open(redirectURL, '_blank');
    } else {

      return this.data.prizeEntrySignUp(data)
        .then(res => {
          this.ga.eventEmitter('send', 'click', 'new-prize-entry');
          this.modal.dismissAll();
          window.open(redirectURL, '_blank')
        }).catch(err => console.log('ERROR Signup', err))
    }
  }

}
