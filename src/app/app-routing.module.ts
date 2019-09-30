import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { BeerListComponent } from './beer-list/beer-list.component';
import { LoginComponent } from './login/login.component';
import { LOGIN_PATH } from './common/const';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: BeerListComponent
  },
  {
    path: LOGIN_PATH,
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
