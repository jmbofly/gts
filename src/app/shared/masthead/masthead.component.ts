import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DataService } from 'src/app/core/data.service';
import { Masthead } from 'src/app/interface/masthead';
import { Router, ActivatedRoute } from '@angular/router';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-masthead',
  templateUrl: './masthead.component.html',
  styleUrls: ['./masthead.component.scss']
})
export class MastheadComponent implements OnInit {
  @Input() title: Masthead;
  @Input() images: string[];
  emailSuccess = false;

  defaultImages = ['https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/itCjTBE/bright-orange-gear-circuit-board-and-arrows-tech-background-video-animation-hd-1920x1080_v0br3penx__F0003.png', 'https://ak8.picdn.net/shutterstock/videos/22199068/thumb/1.jpg', 'https://cdn.hipwallpaper.com/i/93/76/HMKcJh.jpg', 'https://st4.depositphotos.com/24875246/26617/v/600/depositphotos_266171126-stock-video-golden-cube-particles-background-spectacular.jpg'];
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
}
