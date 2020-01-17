import { Component, OnInit } from '@angular/core';
import { DataService } from '../core/data.service';

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
    bg: 'bg-masthead-2.jpg',
    action: 'signup',
    overlay: {
      src: 'gts_logo_alt_short_2.png',
      alt: 'Global Technology Services LLC logo',
      width: 300
    }
  }
  constructor(private data: DataService) { }

  ngOnInit() {
  }

  getImage(name: string) {
    return this.data.getImage(name);
  }

}
