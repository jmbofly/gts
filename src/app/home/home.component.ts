import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = {
    main: 'Your Technology Solution',
    sub: 'Want updates on our technology?',
    cta: true,
    bg: 'assets/img/bg-masthead.jpg',
    action: 'signup',
    overlay: {
      src: 'assets/img/gts_logo_alt_short_2.png',
      alt: 'Global Technology Services LLC logo'
    }
  }
  constructor() { }

  ngOnInit() {
  }

}
