import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { AboutComponent } from '../about/about.component';




@NgModule({
  declarations: [AboutComponent],
  entryComponents: [AboutComponent],
  exports: [AboutComponent],
  imports: [
    SharedModule
  ]
})
export class AboutModule { }
