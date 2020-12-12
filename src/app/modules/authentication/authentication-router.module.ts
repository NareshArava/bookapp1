import { Routes, RouterModule } from "@angular/router";
import { RegisterComponent } from "./register/register.component";
import { LoginComponent } from "./login/login.component";
import { NgModel } from "@angular/forms";
import { NgModule } from "@angular/core";
import { DashboardComponent } from "src/app/dashboard/dashboard.component";


const authRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
      },
      {
        path: 'register',
        component: RegisterComponent
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(authRoutes)],
  exports: [RouterModule]
})

export class AuthenticationRoutingModule {

}