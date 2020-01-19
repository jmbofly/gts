import { Component, OnInit, Input } from '@angular/core';
import { Masthead } from '../interface/masthead';
import { DataService } from '../core/data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  @Input() isPage = true;
  title: Masthead = {
    main: 'Our Journey To Success',
    sub: '<h1 class="lead font-weight-bold">We\'re in it for the experience</h1><h3 class="text-primary my-4">Subscribe To Our Newsletter</h3>',
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
