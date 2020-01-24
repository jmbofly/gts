import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireFunctionsModule, FUNCTIONS_ORIGIN } from '@angular/fire/functions';
import { CookieService } from 'ngx-cookie-service';
// import { FacebookModule } from 'ngx-facebook';

@NgModule({
  declarations: [],
  imports: [
    SharedModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireFunctionsModule,
    // FacebookModule.forRoot(),
  ],
  providers: [CookieService]
})
export class CoreModule { }
