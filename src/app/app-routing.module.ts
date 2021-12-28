import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {PrivacyPolicyComponent} from './components/privacy-policy/privacy-policy.component';
import {TermsConditionsComponent} from "./components/terms-conditions/terms-conditions.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'terms-conditions', component: TermsConditionsComponent},
  {path: 'privacy-policy', component: PrivacyPolicyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
