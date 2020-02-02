import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { FeaturedComponent } from '../featured/featured.component';
import { StoreModule } from '../store/store.module';



@NgModule({
  declarations: [FeaturedComponent],
  entryComponents: [FeaturedComponent],
  exports: [FeaturedComponent],
  imports: [
    SharedModule,
    StoreModule
  ]
})
export class FeaturedModule { }
