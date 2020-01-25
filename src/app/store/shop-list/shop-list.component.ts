import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { StoreService } from 'src/app/core/store.service';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { Router, ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';
import { Observable, BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-shop-list',
  templateUrl: './shop-list.component.html',
  styleUrls: ['./shop-list.component.scss']
})
export class ShopListComponent implements OnInit {
  @Input() results: any[];
  @Output() productSelected = new EventEmitter<number>();
  defaults = {
    itemsPerPage: 5,
    placeholderImg: 'http://placehold.it/700x400'
  }
  constructor(private store: StoreService, config: NgbCarouselConfig, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  selectProduct(id: number) {
    this.productSelected.emit(id);
  }

  staggerEl(idx: number): string {
    return `transition-delay: ${idx * .25}`
  }

}
