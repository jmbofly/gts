import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ServicesComponent } from './services.component';
import { ServiceDetailsComponent } from './service-details/service-details.component';



@NgModule({
  declarations: [ServicesComponent, ServiceDetailsComponent],
  imports: [
    SharedModule
  ],
  exports: [ServiceDetailsComponent],
  entryComponents: [ServiceDetailsComponent]
})
export class ServicesModule { }
