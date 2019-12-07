
// TODO: Add navigation/route functionality

import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'gts';

  constructor(private router: Router, private route: ActivatedRoute) { }
  videoLoaded(e: Event) {
    console.log('video loaded', e);
  }

  navigateTo(url: string) {
    console.log('navigating to :', url)
    return this.router.navigateByUrl(url)
  }
}
