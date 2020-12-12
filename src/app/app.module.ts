import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatCardModule, MatSelectModule, MatSnackBarModule, MatIconModule, MatSidenavModule, MatListModule, MatMenuTrigger, MatMenuModule, MatMenuItem } from '@angular/material';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AuthenticationRoutingModule } from './modules/authentication/authentication-router.module';
import { AuthenticationService } from './modules/authentication/authentication.service';
import { AuthguardService } from './authguard.service';
import { AuthenticationModule } from './modules/authentication/authentication.module';

import { LayoutModule } from '@angular/cdk/layout';

import { FlexLayoutModule } from "@angular/flex-layout";
import { DashboardComponent } from './dashboard/dashboard.component';
import { FooterComponent } from './footer/footer.component';

const appRoutes: Routes = [{
  path: '',
  redirectTo: '/login',
  pathMatch: 'full',
}]
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule, AppRoutingModule, HttpClientModule,
    RouterModule.forRoot(appRoutes), BrowserAnimationsModule, MatToolbarModule,
    MatButtonModule, MatDialogModule, FormsModule, MatInputModule,
    ReactiveFormsModule, MatFormFieldModule, AuthenticationRoutingModule,
    AuthenticationModule, MatCardModule, MatSelectModule, MatSnackBarModule,
    MatIconModule, LayoutModule,
    MatSidenavModule, MatMenuModule,
    MatListModule, FlexLayoutModule
  ],
  providers: [/* AuthenticationService, AuthguardService,
    {
      provide: HTTP_INTERCEPTORS,
      multi: true
    } */

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
