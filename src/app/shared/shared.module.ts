import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MastheadComponent } from './masthead/masthead.component';
import { CallToActionComponent } from './call-to-action/call-to-action.component';



@NgModule({
  declarations: [MastheadComponent, CallToActionComponent],
  imports: [
    CommonModule
  ],
  exports: [MastheadComponent, CallToActionComponent],
  entryComponents: [MastheadComponent, CallToActionComponent]
})
export class SharedModule { }
