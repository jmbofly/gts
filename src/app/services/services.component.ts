import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Masthead } from '../interface/masthead';
import { Service } from '../interface/service';
import { Services } from '../models/services.const';
import { Router, ActivatedRoute, NavigationStart, NavigationEnd, UrlTree } from '@angular/router';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  @Input() isPage = true;
  currentTitle: Masthead = {
    main: 'Ready & Reliable',
    sub: 'Get details about all Services',
    bg: 'bg-masthead-3.jpg',
    action: 'signup',
    cta: true,
  };
  services: Service[] = Services;
  activeService = false;
  constructor(private router: Router, private route: ActivatedRoute, public modal: NgbModal) {

  }

  ngOnInit() {
    this.router.events.subscribe(e => {
      setTimeout(() => {
        if (e instanceof NavigationEnd) {
          const url = e.url;
          const urlTree = this.router.parseUrl(url);
          console.log(urlTree.fragment);
          this.animateScroll(urlTree.fragment)
        }
      }, 0)
    })
  }

  animateScroll(id: string) {
    if (!id) return;
    const anchor: HTMLElement = document.getElementById(id);
    const top = anchor.offsetTop;
    window.scrollTo({
      top,
      behavior: 'smooth',
      left: 0
    });
    // console.log('scrolled', { top, id, anchor });
  }

  toggleService(id) {
    const serviceToggled = this.services.filter(service => service.id === id)[0].toggled;
    // this.services.map(service => service.toggled = false);
    this.services.filter(service => service.id === id)[0].toggled = !serviceToggled;
  }

}
