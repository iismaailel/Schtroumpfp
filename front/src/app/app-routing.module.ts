import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./components/layout/home/home.component";

import { AuthSigninComponent } from "./components/layout/authentication/auth-signin/auth-signin.component";
import { AuthSignupComponent } from "./components/layout/authentication/auth-signup/auth-signup.component";
import { BoardAdminComponent } from "./components/board-admin/board-admin.component";
import { AddSchtroumpfComponent } from './components/add-schtroumpf/add-schtroumpf.component';
import { ListSchtroumpfComponent } from './components/list-schtroumpf/list-schtroumpf.component';


const routes: Routes = [
  {
    path: "",
    redirectTo: "/home",
    pathMatch: "full",
  },
  { path: "home", component: HomeComponent },
  { path: "login", component: AuthSigninComponent },
  { path: "register", component: AuthSignupComponent },
  { path: "addstr", component: AddSchtroumpfComponent },
  { path: "liststr", component: ListSchtroumpfComponent }





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
