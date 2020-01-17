import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MastheadComponent } from './masthead/masthead.component';
import { CallToActionComponent } from './call-to-action/call-to-action.component';



@NgModule({
  declarations: [MastheadComponent, CallToActionComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [MastheadComponent, CallToActionComponent, FormsModule, CommonModule],
  entryComponents: [MastheadComponent, CallToActionComponent]
})
export class SharedModule { }
