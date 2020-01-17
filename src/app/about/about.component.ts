import { Component, OnInit, Input } from '@angular/core';
import { Masthead } from '../interface/masthead';
import { DataService } from '../data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  @Input() isPage = true;
  title: Masthead = {
    main: 'Your Link to Technology',
    sub: 'A Disabled Veteran Founded Company<br/><br/>Get Updates From Our Newsletter',
    bg: 'bg-masthead.jpg',
    cta: true,
    action: 'signup',
    overlay: {
      src: 'sdv3.png',
      alt: 'Service Disabled Veteran Owned Small Business Logo',
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
