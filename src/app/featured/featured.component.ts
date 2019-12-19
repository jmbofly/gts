import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DataService } from '../data.service';

@Component({
  selector: 'app-featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.scss']
})
export class FeaturedComponent implements OnInit {
  title = {
    main: 'Featured Partner',
    sub: 'Want to know more about this partner?',
    cta: true,
    bg: 'assets/img/bg-masthead-2.jpg',
    action: 'redirect',
    redirectURL: 'https://xstreamingtv.com/dump/aff/go/kevin',
    overlay: {
      src: 'https://xstreamingtv.com/assets/images/xstreamingtv-logo-5000x1659.png',
      alt: 'Xstreaming tv logo'
    }
  }

  signUp = {
    fname: null,
    email: null
  }


  constructor(public modal: NgbModal, private data: DataService) { }

  ngOnInit() {
  }

  incentiveSignupAndRedirect(email: string, redirectURL: string) {

  }

}
