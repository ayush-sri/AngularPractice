import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from '../homepage/homepage.component';
import { LoginComponent } from '../login/login.component';
import { LoginupComponent } from '../loginup/loginup.component';
import { UsersComponent } from '../users/users.component';


const routes: Routes = [
  { path:'home', component: HomepageComponent },
  { path:'user', component: UsersComponent },
  { path:'calculate', component: LoginComponent },
  { path: 'logout', component: LoginupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
// we can make an array of componenets here so that we can directly add the components while making use of the components in app oruting module.....
// export const routingcomponent = [LoginComponent,Usercommponents etc]...and also call them direclty in app.module.ts
