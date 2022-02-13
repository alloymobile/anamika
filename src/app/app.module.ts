import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AlloymobileLibraryModule } from './shared/alloymobile-library/alloymobile-library.module';
import { HttpClientModule } from '@angular/common/http';
import { MatTooltipModule } from '@angular/material/tooltip';
import {MatTabsModule} from '@angular/material/tabs';
import {MatDialogModule } from '@angular/material/dialog';
import {MatFormFieldModule } from '@angular/material/form-field';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomePageComponent } from './public/home-page/home-page.component';
import { LoginPageComponent } from './public/login-page/login-page.component';
import { ClientPageComponent } from './private/client-page/client-page.component';
import { DetailPageComponent } from './public/home-page/detail-page/detail-page.component';
import { TermsOfServicePageComponent } from './public/terms-of-service-page/terms-of-service-page.component';
import { PrivacyPolicyPageComponent } from './public/privacy-policy-page/privacy-policy-page.component';
import { NavbarComponent } from './shared/routing/navbar/navbar.component';
import { DashboardPageComponent } from './private/client-page/dashboard-page/dashboard-page.component';
import { AccountPageComponent } from './private/client-page/account-page/account-page.component';
import { ResourcePageComponent } from './private/client-page/resource-page/resource-page.component';
import { ResourceModelComponent } from './private/client-page/resource-page/resource-model/resource-model.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    LoginPageComponent,
    ClientPageComponent,
    DetailPageComponent,
    NavbarComponent,
    TermsOfServicePageComponent,
    PrivacyPolicyPageComponent,
    DashboardPageComponent,
    AccountPageComponent,
    ResourcePageComponent,
    ResourceModelComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    BrowserAnimationsModule,
    AlloymobileLibraryModule,
    HttpClientModule,
    MatTooltipModule,
    MatTabsModule,
    MatDialogModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[ResourceModelComponent]
})
export class AppModule { }
