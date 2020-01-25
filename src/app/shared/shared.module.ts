import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MastheadComponent } from './masthead/masthead.component';
import { CallToActionComponent } from './call-to-action/call-to-action.component';
import { SafeHtmlPipe } from './pipes/safe-html.pipe';
import { NgbCarouselModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [MastheadComponent, CallToActionComponent, SafeHtmlPipe],
  imports: [
    CommonModule,
    FormsModule,
    NgbCarouselModule,
    NgbModule,
  ],
  exports: [MastheadComponent, CallToActionComponent, FormsModule, CommonModule, SafeHtmlPipe, NgbCarouselModule, NgbModule],
  entryComponents: [MastheadComponent, CallToActionComponent]
})
export class SharedModule { }
