import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeaturedComponent } from './featured/featured.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

// TODO: Add routes ==> home, about, featured, services, contact, (account: after auth service and implementation is wired-up)
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'featured', component: FeaturedComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'home', redirectTo: '', pathMatch: 'full' },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
