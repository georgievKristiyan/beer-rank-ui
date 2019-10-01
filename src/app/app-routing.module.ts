import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BeerListComponent } from './beer-list/beer-list.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LOGIN_PATH, SIGN_UP_PATH } from './common/const';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: BeerListComponent
  },
  {
    path: LOGIN_PATH,
    component: LoginComponent
  },
  {
    path: SIGN_UP_PATH,
    component: SignUpComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
