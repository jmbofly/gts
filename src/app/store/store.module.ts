import { NgModule } from '@angular/core';

import { StoreRoutingModule } from './store-routing.module';
import { StoreComponent } from './store.component';
import { SharedModule } from '../shared/shared.module';
import { ShopItemComponent } from './shop-item/shop-item.component';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { ShopListComponent } from './shop-list/shop-list.component';


@NgModule({
  declarations: [StoreComponent, ShopItemComponent, ShopListComponent],
  imports: [
    SharedModule,
    NgbModalModule,
    StoreRoutingModule
  ],
  entryComponents: [StoreComponent, ShopItemComponent, ShopListComponent],
  exports: [StoreComponent, ShopItemComponent, ShopListComponent],
})
export class StoreModule { }
