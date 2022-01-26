import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { RouterModule } from '@angular/router';
import { CUSTOM_ELEMENTS_SCHEMA }  from '@angular/core';
import { Router } from '@angular/router';



import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginupComponent } from './loginup/loginup.component';
import { UsersComponent } from './users/users.component';
import { ParentChildComponent } from './parent-child/parent-child.component';
import { ChildComponent } from './child/child.component';
import { HomeComponent } from './home/home.component';
import { TypeComponent } from './type/type.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomepageComponent,
    LoginupComponent,
    
    UsersComponent,
    ParentChildComponent,
    ChildComponent,
    HomeComponent,
    TypeComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    AppRoutingModule,
    Router,
    RouterModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas : [NO_ERRORS_SCHEMA]
})
export class AppModule { }
