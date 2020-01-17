import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FacebookModule } from 'ngx-facebook';
import { CookieService } from 'ngx-cookie-service';
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

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireStorageModule,
    NgbModule,
    FacebookModule.forRoot(),
    SharedModule,
    BlogModule,
    AboutModule,
    ContactModule,
    FeaturedModule,
    HomeModule,
    ServicesModule,
    NotFoundModule,
    LoginModule,
    AppRoutingModule,
    CoreModule,
  ],
  providers: [CookieService],
  bootstrap: [AppComponent],
})
export class AppModule { }
