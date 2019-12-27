import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DataService } from '../data.service';

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
    bg: 'assets/img/bg-masthead-4.jpg',
    action: 'redirect',
    redirectURL: 'https://xstreamingtv.com/dump/aff/go/kevin',
    overlay: {
      src: 'https://xstreamingtv.com/assets/images/xstreamingtv-logo-5000x1659.png',
      alt: 'Xstreaming tv logo',
      width: 300
    }
  }

  signUp = {
    name: null,
    email: null,
    optedOut: false
  }


  constructor(public modal: NgbModal, private data: DataService) { }

  ngOnInit() {
  }

  openModal(content) {
    const modalRef = this.modal.open(content);
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

  signupAndRedirect(data: any, redirectURL: string) {
    if (data.optedOut) {
      this.modal.dismissAll();
      return window.open(redirectURL, '_blank');
    } else {
      return this.data.prizeEntrySignUp(data)
        .then(res => {
          this.modal.dismissAll();
          window.open(redirectURL, '_blank')
        }).catch(err => console.log('ERROR Signup', err))
    }
  }

}
