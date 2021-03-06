import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavbarMenuComponent} from './components/navbar-menu/navbar-menu.component';
import {HomeComponent} from './components/home/home.component';
import {FooterComponent} from './components/footer/footer.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from '@angular/common/http';
import {MDBBootstrapModule} from "angular-bootstrap-md";
import {CoreModule} from "./core/core.module";
import {ExchangesComponent} from './components/home/exchanges/exchanges.component';
import {VolumeComponent} from './components/home/volume/volume.component';
import {VideoPopupComponent} from './components/home/video-popup/video-popup.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {PrivacyPolicyComponent} from './components/privacy-policy/privacy-policy.component';
import {TermsConditionsComponent} from './components/terms-conditions/terms-conditions.component';
import {YouTubePlayerModule} from "@angular/youtube-player";


@NgModule({
  declarations: [
    AppComponent,
    NavbarMenuComponent,
    HomeComponent,
    FooterComponent,
    ExchangesComponent,
    VolumeComponent,
    VideoPopupComponent,
    PrivacyPolicyComponent,
    TermsConditionsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot(),
    ReactiveFormsModule,
    CoreModule,
    NgbModule,
    YouTubePlayerModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
