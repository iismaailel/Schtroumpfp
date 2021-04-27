import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';


import { ScrollingModule } from '@angular/cdk/scrolling';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/layout/nav-bar/nav-bar.component';
import { HomeComponent } from './components/layout/home/home.component';

import { FooterComponent } from './components/layout/footer/footer.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AuthSigninComponent } from './components/layout/authentication/auth-signin/auth-signin.component';
import { AuthSignupComponent } from './components/layout/authentication/auth-signup/auth-signup.component';
import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { BoardAdminComponent } from './components/board-admin/board-admin.component';
import { AddSchtroumpfComponent } from './components/add-schtroumpf/add-schtroumpf.component';
import { ListSchtroumpfComponent } from './components/list-schtroumpf/list-schtroumpf.component';



@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    FooterComponent,

    AuthSigninComponent,
    AuthSignupComponent,
    BoardAdminComponent,
    AddSchtroumpfComponent,
    ListSchtroumpfComponent,
  ],
    imports: [
        BrowserModule,
        NgbModule,
        MatIconModule,
        MatTabsModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        FontAwesomeModule,
        MDBBootstrapModule,
        BrowserAnimationsModule,
        ScrollingModule,
        ReactiveFormsModule
    ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
