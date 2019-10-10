import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BeerListComponent } from './beer-list/beer-list.component';
import { BeerDetailComponent } from './beer-detail/beer-detail.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LOGIN_ROUTE, SIGN_UP_ROUTE } from './common/const';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: BeerListComponent
  },
  {
    path: 'beer/:id',
    component: BeerDetailComponent
  },
  {
    path: LOGIN_ROUTE,
    component: LoginComponent
  },
  {
    path: SIGN_UP_ROUTE,
    component: SignUpComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
