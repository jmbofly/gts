import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DataService } from 'src/app/core/data.service';
import { Masthead } from 'src/app/interface/masthead';
import { Router, ActivatedRoute } from '@angular/router';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

export interface Slide {
  img?: string;
  html?: HTMLElement;
}
@Component({
  selector: 'app-masthead',
  templateUrl: './masthead.component.html',
  styleUrls: ['./masthead.component.scss']
})
export class MastheadComponent implements OnInit {
  @Input() title: Masthead;
  @Input() images?: string[];

  @Input() slider = false;
  slideStore: any[] = [
    { name: 'home', content: { title: `` } }
  ]
  emailSuccess = false;

  defaultImages = ['https://i.cbc.ca/1.4833630.1537555507!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_780/global-internet-abstract.jpg', 'https://images.unsplash.com/photo-1505424297051-c3ad50b055ae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80', 'https://adoredtv.com/wp-content/uploads/2019/07/cropped-zotac-super-featured-v2-adoredtv.jpg'];
  constructor(public router: Router, private route: ActivatedRoute, private data: DataService, private config: NgbCarouselConfig) {
    config.interval = 10000;
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = true;
  }

  ngOnInit() {
    if (!this.images) {
      this.images = this.defaultImages;
    }
  }

  public getImage(name: string) {
    return this.data.getImage(name);
  }

  async mastheadAction(email?: string, redirectURL?: string) {
    if (email && email.indexOf('@') != -1) {
      return await this.data.signUp(email, { timestamp: null })
        .then(res => this.emailSuccess = true)
        .catch(err => console.log('ERROR! No Signup', err))
    }

  }

  navigateTo(url: string) {
    return this.router.navigateByUrl(url, { relativeTo: this.route })
  }

  slideInit(event: any) {
    console.log('carousel', event)
  }
}
