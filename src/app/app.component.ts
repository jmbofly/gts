
// TODO: Add navigation/routes
import { Component, OnInit, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable, BehaviorSubject } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';
import * as AOS from 'aos';
import { Router, ActivatedRoute, NavigationEnd, NavigationStart } from '@angular/router';
// import { FacebookService, InitParams, AuthResponse, LoginResponse, UIParams, LoginOptions } from 'ngx-facebook';
import { DataService } from './core/data.service';
import { GoogleAnalyticsService } from "./core/google-analytics.service";
import { StoreService } from './core/store.service';
// import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Global Technology Services, LLC';
  showMenuBar = false;

  activeLink = null;
  alerts = [];

  constructor(private router: Router, private route: ActivatedRoute, public store: StoreService, public data: DataService, public modal: NgbModal, public ga: GoogleAnalyticsService) {

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        console.log('event', event)
        this.ga.eventEmitter('set', 'page', event.urlAfterRedirects);
        this.ga.eventEmitter('send', 'pageview', `${event.id}`);
      }
    });
  }

  ngOnInit() {
    AOS.init({
      useClassNames: true,
      // duration: 1000,
      animatedClassName: 'animated',
    })
  }

  // private getCookies() {
  //   const pairs = document.cookie.split(";");
  //   const cookies = {};
  //   for (var i = 0; i < pairs.length; i++) {
  //     const pair = pairs[i].split("=");
  //     cookies[(pair[0] + '').trim()] = unescape(pair.slice(1).join('='));
  //   }
  //   return cookies;
  // }

  animateScroll(id: string) {
    const anchor: HTMLElement = document.getElementById(id);
    const top = anchor.offsetTop;
    this.showMenuBar = false;
    window.scrollTo({
      top,
      behavior: 'smooth',
      left: 0
    });
  }

  checkScrollTop(navEl: HTMLElement) {
    if (navEl.classList.contains('aos-animate')) {
      return this.getImage('gts_logo_alt_short.png');
    } else {
      return this.getImage('gts_logo_alt_short_2.png')
    }
  }

  getImage(name: string) {
    return this.data.getImage(name);
  }

  async navigateTo(url: string, params = null) {
    const ids = [
      'home',
      'featured',
      'services',
      'about',
      'store',
      'contact',
    ].map(id => {
      this.activeLink = url;
      document.getElementById(id).classList.remove('active');
    })
    document.getElementById(url).classList.toggle('active');
    await this.router.navigate([`${url}`], {
      relativeTo: this.route,
      fragment: params && typeof params === 'string' ? params : null
    }).then(res => {
      window.scrollTo({
        top: 0,
        behavior: 'auto',
        left: 0
      });
      this.showMenuBar = false;
    });
  }

  toggleMenuBar() {
    this.showMenuBar = !this.showMenuBar;
  }

}
