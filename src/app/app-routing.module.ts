import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// TODO: Add routes ==> home, about, featured, services, contact, (account: after auth service and implementation is wired-up)
const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
