import { Component, OnInit } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { AuthService } from '../auth.service';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

    claims: Object;
    clientId: string;
    issuer: string;
    roles: string[];

    constructor(private oauthService: OAuthService,
                private authService: AuthService) { }

    ngOnInit(): void {
        // Extract identity claims from the OpenID Connect ID Token
        this.claims = this.oauthService.getIdentityClaims();

        // Extract the OpenID Client ID from the access token
        this.clientId = this.authService.getClientId();

        // Extract the JWT issuer from the access token
        this.issuer = this.authService.getIssuer();
    }

    /**
    * Initiate a logout process with Keycloak. This function will re-direct to Keycloak to
    * invalidate the sessions and the tokens within session storage
    */
    public logout(): void {
        this.authService.logout();
    }

    /**
    * Extract the role claims out of the access token
    */
    public getClaims(): void {
        this.roles = this.authService.getClaims();
    }
}
