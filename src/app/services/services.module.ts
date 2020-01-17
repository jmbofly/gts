import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ServicesComponent } from './services.component';



@NgModule({
  declarations: [ServicesComponent],
  imports: [
    SharedModule
  ]
})
export class ServicesModule { }
