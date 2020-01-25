import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShopItemComponent } from './shop-item/shop-item.component';
import { StoreComponent } from './store.component';


const routes: Routes = [
  {
    path: 'store', component: StoreComponent, loadChildren: () => import('../store/store.module').then(m => m.StoreModule),
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StoreRoutingModule { }
