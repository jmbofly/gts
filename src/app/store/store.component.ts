import { Component, OnInit, TemplateRef } from '@angular/core';
import { NgbCarouselConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { StoreService } from '../core/store.service';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { switchMap, map, filter } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ZOTAC } from './data/zotac';
import { IBrand } from './interfaces/brands.interface';
import { Product } from './interfaces/product';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss'],
  providers: [NgbCarouselConfig]
})
export class StoreComponent implements OnInit {
  images = ['https://www.indiafilings.com/learn/wp-content/uploads/2017/09/GST-for-Ecommerce.jpg', 'https://www.douglassdigital.com/wp-content/uploads/2017/06/Woocommerce-Ecommerce-Solution-From-Douglass-Digital.png', 'https://s3-us-west-2.amazonaws.com/puntoapunto.com.ar/wp-content/uploads/2018/12/05163539/E-commerce.jpg', 'https://iaidea.com/wp-content/uploads/2014/12/ventajas-del-comercio-electronico.jpg'];

  title = {
    main: 'The Latest Tech',
    sub: '<h1 class="lead font-weight-bold">Save Time. Save Money.</h1><h3 class="my-4  text-primary">GTS Tech Store</h3>'
  }

  filterState = {
    activeBrand: 'ZOTAC_BRAND',
    activeCategory: 'Graphics',
    activePage: 1,
    zotac: {
      graphics: true,
      mek: false,
      zboxq: false
    },
    showBrandsMenu: false,
    showCategoriesMenu: false
  }
  list$: Observable<any>;
  ZOTAC_BRAND: IBrand;
  ACCESS_ABLE_DESIGNS_BRAND: IBrand;
  MISC_PRODUCTS: IBrand;
  ZotacList$: Observable<Product[]>;
  AcessAbleDesignsList$: Observable<Product[]>;
  selectedProduct: any;
  constructor(public store: StoreService, config: NgbCarouselConfig, public modal: NgbModal) {
    config.interval = 10000;
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = false;
    this.list$ = new Observable(null);
  }

  ngOnInit() {
    /* 
    Set the location of zotac JSON file 
    */
    const zotacDataLocation = '../../assets/data/zotac.json';
    /* 
    Set the location of accessible-designs JSON file 
    */
    const accessAbleDesignsDataLocation = '../../assets/data/accessabledesigns.json';
    /* 
    Configure Brand object for zotac
    */
    this.ZOTAC_BRAND = {
      name: 'ZOTAC',
      dataLocation: zotacDataLocation,
      data: this.store.getJsonData(zotacDataLocation),
      categories: [
        'Graphics',
        'MEK',
        'ZBOXQ'
      ],
      logoURL: 'https://www.zotac.com/sites/all/themes/bartik/images/logo.svg',
      tags: [
        'zotac',
        'gaming',
        'mini'
      ]
    };
    this.ACCESS_ABLE_DESIGNS_BRAND = {
      name: 'ACCESS_ABLE_DESIGNS',
      dataLocation: accessAbleDesignsDataLocation,
      data: this.store.getJsonData(accessAbleDesignsDataLocation),
      categories: [
        'Benches',
        'Pool',
        'Toilet',
        'Bars'
      ],
      logoURL: 'https://www.accessabledesigns.com/wp-content/uploads/2017/05/AccessAbleDesigns-logo-height2.fw_.png',
      tags: [
        'accessibility',
        'Accessabledesigns',
        'lift'
      ]
    };
    this.filterList('ZOTAC_BRAND', 'Graphics');
  }

  filterList(brand: string, key?: string) {
    this.list$ = this.store.getJsonData(this[brand].dataLocation, key);
    this.filterLimit(6)
  }

  openModal(content: TemplateRef<any>, id) {
    this.list$.subscribe(data => {
      this.selectedProduct = data[id]
    })
    const modalRef = this.modal.open(content, {
      ariaLabelledBy: 'details-modal',
      size: 'lg',
      centered: true,
    });
    modalRef.result.then(result => console.log(result))
  }

  filterLimit(limit = 6) {
    this.list$.pipe(filter((item, idx) => idx <= limit))
  }

  toggleFilterState(state: any) {
    state = !state;
  }



}
