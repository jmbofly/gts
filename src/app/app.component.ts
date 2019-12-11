
// TODO: Add navigation/routes
// TODO: Add email signup
import { Component, OnInit, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable, BehaviorSubject } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';
import { DataService } from './data.service';

import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Global Technology Services, LLC';
  showMenuBar = false;

  signUpSuccess = false;

  constructor(public data: DataService, private http: HttpClient, private router: Router, private route: ActivatedRoute, public modal: NgbModal) {
  }

  ngOnInit() {
  }

  animateScroll(id) {
    const anchor: HTMLElement = document.getElementById(id);
    const top = anchor.offsetTop;
    window.scrollTo({
      top,
      behavior: 'smooth',
      left: 0
    });
    // this.showMenuBar = false;
    console.log('scrolled', { top, id, anchor });
  }


  checkNavWidth(el: any) {
    return el.clientWidth > 760;
  }
  videoLoaded(e: Event) {
    console.log('video loaded', e);
  }

  navigateTo(url: string, external = false) {
    console.log('navigating to :', url)
    if (external) {
      window.location.href = url;
      return;
    }
    return this.router.navigateByUrl(url)
  }

  toggleMenuBar() {
    this.showMenuBar = !this.showMenuBar;
  }

  async signUpAndRedirect(email: string, data?: any, redirect = false) {
    const redirectUrl = 'https://xstreamingtv.com/dump/aff/go/kevin';
    return await this.data.signUp(email, data).then(res => {
      this.signUpSuccess = true;
      email = '';
      // console.log(res)
      if (redirect) {
        this.navigateTo(redirectUrl, true);
      }
    });
  }

  closeAlert(alert) {
    this.signUpSuccess = false;
    console.log(alert)
  }
}
