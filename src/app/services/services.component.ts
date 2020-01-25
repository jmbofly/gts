import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Masthead } from '../interface/masthead';
import { Service } from '../interface/service';
import { Services } from '../models/services.const';
import { Router, ActivatedRoute, NavigationStart, NavigationEnd, UrlTree } from '@angular/router';
import { DataService } from '../core/data.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  @Input() isPage = true;
  images = ['https://www.douglassdigital.com/wp-content/uploads/2017/06/Woocommerce-Ecommerce-Solution-From-Douglass-Digital.png', 'https://www.indiafilings.com/learn/wp-content/uploads/2017/09/GST-for-Ecommerce.jpg', 'https://s3-us-west-2.amazonaws.com/puntoapunto.com.ar/wp-content/uploads/2018/12/05163539/E-commerce.jpg', 'https://iaidea.com/wp-content/uploads/2014/12/ventajas-del-comercio-electronico.jpg'];
  currentTitle: Masthead = {
    main: 'Ready & Reliable',
    sub: '<h1 class="lead font-weight-bold">Change Depends On Action</h1><h3 class="my-4  text-primary">Want to know more?</h3>',
    bg: 'bg-masthead-3.jpg',
    action: 'signup',
    cta: true,
  };
  services: Service[] = Services;
  activeService = false;
  constructor(private data: DataService, private router: Router, private route: ActivatedRoute, public modal: NgbModal) {

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
    });
    this.toggleService('digital-marketing');
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

  getImage(name: string) {
    return this.data.getImage(name);
  }

  toggleService(id) {
    const serviceToggled = this.services.filter(service => service.id === id)[0].toggled;
    // this.services.map(service => service.toggled = false);
    this.services.filter(service => service.id === id)[0].toggled = !serviceToggled;
  }

}
