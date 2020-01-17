import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { FeaturedComponent } from '../featured/featured.component';



@NgModule({
  declarations: [FeaturedComponent],
  entryComponents: [FeaturedComponent],
  exports: [FeaturedComponent],
  imports: [
    SharedModule,
  ]
})
export class FeaturedModule { }
