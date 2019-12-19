
// TODO: Add navigation/routes
import { Component, OnInit, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgbModal, NgbAlert } from '@ng-bootstrap/ng-bootstrap';
import { Observable, BehaviorSubject } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';
import * as AOS from 'aos';
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


  alerts = [];

  constructor(private router: Router, private route: ActivatedRoute, public modal: NgbModal) {
  }

  ngOnInit() {
    AOS.init({
      useClassNames: true,
      animatedClassName: 'animate',
      duration: 800,
      easing: 'ease',
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
    console.log('scrolled', { top, id, anchor });
  }

  navigateTo(url: string) {
    console.log('navigating to :', url)
    return this.router.navigateByUrl(url)
      .then(res => window.scrollTo({
        top: 0,
        behavior: 'auto',
        left: 0
      }))
  }

  toggleMenuBar() {
    this.showMenuBar = !this.showMenuBar;
  }
}
