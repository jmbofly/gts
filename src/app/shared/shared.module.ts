import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MastheadComponent } from './masthead/masthead.component';
import { CallToActionComponent } from './call-to-action/call-to-action.component';
import { SafeHtmlPipe } from './pipes/safe-html.pipe';



@NgModule({
  declarations: [MastheadComponent, CallToActionComponent, SafeHtmlPipe],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [MastheadComponent, CallToActionComponent, FormsModule, CommonModule, SafeHtmlPipe],
  entryComponents: [MastheadComponent, CallToActionComponent]
})
export class SharedModule { }
