import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DataService } from 'src/app/core/data.service';
import { Masthead } from 'src/app/interface/masthead';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-masthead',
  templateUrl: './masthead.component.html',
  styleUrls: ['./masthead.component.scss']
})
export class MastheadComponent implements OnInit {
  @Input() title: Masthead;
  emailSuccess = false;
  constructor(public router: Router, private route: ActivatedRoute, private data: DataService) { }

  ngOnInit() {
    // this.data.readImageList();
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
