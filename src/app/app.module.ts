import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { LogoutComponent } from './logout/logout.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { RedirectComponent } from './redirect/redirect.component';
import { OAuthModule } from 'angular-oauth2-oidc';
import { AuthGuard } from './auth.guard';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    LogoutComponent,
    PagenotfoundComponent,
    RedirectComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    OAuthModule.forRoot({
    resourceServer: {
            allowedUrls: ['http://localhost:9090'],
            sendAccessToken: true
        }
    })
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
