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
  images = ['https://www.indiafilings.com/learn/wp-content/uploads/2017/09/GST-for-Ecommerce.jpg', 'https://s3-us-west-2.amazonaws.com/puntoapunto.com.ar/wp-content/uploads/2018/12/05163539/E-commerce.jpg', 'https://iaidea.com/wp-content/uploads/2014/12/ventajas-del-comercio-electronico.jpg'];
  title = {
    main: 'Featured Partner',
    sub: '<h1 class="text-dark my-4">Want to know more about this partner?</h1>',
    cta: true,
    bg: 'handshake_2.jpg',
    action: 'redirect',
    redirectURL: 'https://www.accessabledesigns.com/',
    overlay: {
      src: 'AccessAbleDesigns-logo-height2.fw_.png',
      alt: 'Access Able Designs logo',
      width: 150
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
