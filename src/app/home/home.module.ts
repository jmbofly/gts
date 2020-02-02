import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from '../home/home.component';
import { FeaturedModule } from '../featured/featured.module';
import { AboutModule } from '../about/about.module';
import { StoreModule } from '../store/store.module';



@NgModule({
  declarations: [HomeComponent],
  imports: [
    SharedModule,
    FeaturedModule,
    AboutModule,
    StoreModule
  ]
})
export class HomeModule { }
