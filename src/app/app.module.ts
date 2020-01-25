import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { SharedModule } from './shared/shared.module';
import { BlogModule } from './blog/blog.module';
import { AboutModule } from './about/about.module';
import { ContactModule } from './contact/contact.module';
import { FeaturedModule } from './featured/featured.module';
import { HomeModule } from './home/home.module';
import { ServicesModule } from './services/services.module';
import { NotFoundModule } from './not-found/not-found.module';
import { LoginModule } from './login/login.module';
import { CoreModule } from './core/core.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { StoreModule } from './store/store.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    NgbModule,
    NgbCarouselModule,
    SharedModule,
    BlogModule,
    AboutModule,
    ContactModule,
    FeaturedModule,
    HomeModule,
    ServicesModule,
    NotFoundModule,
    LoginModule,
    CoreModule,
    StoreModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
