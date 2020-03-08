import { Component, OnInit } from '@angular/core';
import { DataService } from '../core/data.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = {
    main: 'Your Technology Solution',
    sub: '<h1 class="lead text-dark font-weight-bold" data-aos="fade-left" data-aos-delay="750">Global Technology Services, LLC</h1><h3 class="text-primary my-4">Get our monthly Newsletter.</h3>',
    cta: true,
    bg: 'bg-masthead-2.jpg',
    action: 'signup',
    overlay: {
      src: 'gts_logo_alt_short.png',
      alt: 'Global Technology Services LLC logo',
      width: 300
    }
  }
  constructor(private data: DataService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  getImage(name: string) {
    return this.data.getImage(name);
  }

  navigateTo(url: string) {
    return this.router.navigateByUrl(url, { relativeTo: this.route })
  }

}
