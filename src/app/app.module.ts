import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { ClarityModule } from '@clr/angular';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { BeerListComponent } from './beer-list/beer-list.component';
import { BeerDetailComponent } from './beer-detail/beer-detail.component';
import { UserService } from './services/user.service';
import { BeerService } from './services/beer.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    BeerListComponent,
    BeerDetailComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    ClarityModule
  ],
  providers: [
    UserService,
    BeerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
