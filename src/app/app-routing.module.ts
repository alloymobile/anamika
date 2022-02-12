import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountPageComponent } from './private/client-page/account-page/account-page.component';
import { ClientPageComponent } from './private/client-page/client-page.component';
import { DashboardPageComponent } from './private/client-page/dashboard-page/dashboard-page.component';
import { ResourcePageComponent } from './private/client-page/resource-page/resource-page.component';
import { DetailPageComponent } from './public/home-page/detail-page/detail-page.component';
import { HomePageComponent } from './public/home-page/home-page.component';
import { LoginPageComponent } from './public/login-page/login-page.component';
import { PrivacyPolicyPageComponent } from './public/privacy-policy-page/privacy-policy-page.component';
import { TermsOfServicePageComponent } from './public/terms-of-service-page/terms-of-service-page.component';
import { AuthService } from './shared/services/guard/auth.service';

const routes: Routes = [
  {path:'',component: HomePageComponent},
  { path: 'drawing/:id',component: DetailPageComponent},
  {path:'login',component: LoginPageComponent},
  { path: 'client', component: ClientPageComponent, children: [
      {path: '', component: DashboardPageComponent},
      {path: 'account', component: AccountPageComponent},
      {path: 'resource', component: ResourcePageComponent}
    ],
    canActivate: [AuthService]
  },
  { path: 'terms-of-service', component: TermsOfServicePageComponent },
  { path: 'privacy-policy', component: PrivacyPolicyPageComponent },
  { path: '', component: HomePageComponent },
  { path: '**', component: HomePageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
