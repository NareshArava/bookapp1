import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthguardService } from './authguard.service';
import { LoginComponent } from './modules/authentication/login/login.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full',
        canActivate: [AuthguardService]
      },
      /* {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [AuthguardService]
      },
      {
        path: 'favourite',
        component: FavouriteComponent,
        canActivate: [AuthguardService]
      },
      {
        path: 'recommendation',
        component: RecommendationComponent,
        canActivate: [AuthguardService]
      },

      {
        path: 'recommendedbyothers',
        component: RecommendedbyothersComponent,
        canActivate: [AuthguardService]
      },

      {
        path: 'search',
        component: SearchComponent,
        canActivate: [AuthguardService]
      }, */

    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
