
// TODO: Add navigation/routes
import { Component, OnInit, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable, BehaviorSubject } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';
import * as AOS from 'aos';
import { Router, ActivatedRoute, NavigationEnd, NavigationStart } from '@angular/router';
import { FacebookService, InitParams, AuthResponse, LoginResponse, UIParams, LoginOptions } from 'ngx-facebook';
import { DataService } from './data.service';
import { GoogleAnalyticsService } from "./google-analytics.service";
import { CookieService } from 'ngx-cookie-service';

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

  constructor(private cookieService: CookieService, private router: Router, private route: ActivatedRoute, public data: DataService, public modal: NgbModal, public ga: GoogleAnalyticsService, public fb: FacebookService) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.ga.eventEmitter('set', 'page', event.urlAfterRedirects);
        this.ga.eventEmitter('send', 'pageview', `${event.id}`);
      } else if (event instanceof NavigationStart) {
        const url = event.url;
        let fbclid = '';
        if (url.includes('?fbclid')) {
          const idIdx = url.indexOf('=') + 1;
          fbclid = url.slice(idIdx);
          console.log('fb client found', fbclid);
        }
      }
    });

    // Enable Facebook Like button
    // let initParams: InitParams = {
    //   appId: '2440507406167439',
    //   xfbml: true,
    //   cookie: true,
    //   version: 'v5.0',
    //   status: true,
    //   frictionlessRequests: true
    // };

    // fb.init(initParams);
    // const cookies = this.cookieService.getAll();
    // const memberCookie = this.cookieService.get('amember_aff_id');
    // console.log('cookies', cookies, memberCookie);
  }

  private getCookies() {
    const pairs = document.cookie.split(";");
    const cookies = {};
    for (var i = 0; i < pairs.length; i++) {
      const pair = pairs[i].split("=");
      cookies[(pair[0] + '').trim()] = unescape(pair.slice(1).join('='));
    }
    return cookies;
  }

  ngOnInit() {
    AOS.init({
      useClassNames: true,
      once: false,
      initClassName: null,
      duration: 800,
      animatedClassName: 'animated',
    })


  }

  animateScroll(id: string) {
    const anchor: HTMLElement = document.getElementById(id);
    const top = anchor.offsetTop;
    window.scrollTo({
      top,
      behavior: 'smooth',
      left: 0
    });
    this.showMenuBar = false;
    // console.log('scrolled', { top, id, anchor });
  }

  checkScrollTop(navEl: HTMLElement) {
    if (navEl.classList.contains('aos-animate')) {
      return '../assets/img/gts_logo_alt_short.png';
    } else {
      return '../assets/img/gts_logo_alt_short_2.png'
    }
  }

  async navigateTo(url: string, params = null) {
    console.log('navigating to :', url + '#' + params);
    const ids = [
      'home',
      'featured',
      'services',
      'about',
      'contact',
    ].map(id => {
      this.activeLink = url;
      document.getElementById(id).classList.remove('active');
    })
    document.getElementById(url).classList.toggle('active')
    const res = await this.router.navigate([`${url}`], { relativeTo: this.route, fragment: params ? params : null });
    window.scrollTo({
      top: 0,
      behavior: 'auto',
      left: 0
    });
    this.showMenuBar = false;
  }

  toggleMenuBar() {
    this.showMenuBar = !this.showMenuBar;
  }

}
