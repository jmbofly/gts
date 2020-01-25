import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeaturedComponent } from './featured/featured.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ServicesComponent } from './services/services.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { StoreComponent } from './store/store.component';

// TODO: Add routes ==> home, about, featured, services, contact, (account: after auth service and implementation is wired-up)
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent, loadChildren: () => import('./about/about.module').then(m => m.AboutModule) },
  { path: 'featured', component: FeaturedComponent, loadChildren: () => import('./featured/featured.module').then(m => m.FeaturedModule) },
  { path: 'services', component: ServicesComponent, loadChildren: () => import('./services/services.module').then(m => m.ServicesModule) },
  { path: 'contact', component: ContactComponent, loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule) },
  { path: 'login', component: LoginComponent, loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
  { path: 'home', redirectTo: '', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent, pathMatch: 'full', loadChildren: () => import('./not-found/not-found.module').then(m => m.NotFoundModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
