import { inject, Injectable } from '@angular/core';
import { AuthService as Auth0Service } from '@auth0/auth0-angular';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private auth0 = inject(Auth0Service);

  readonly isAuthenticated$ = this.auth0.isAuthenticated$;
  readonly user$ = this.auth0.user$;
  readonly isLoading$ = this.auth0.isLoading$;

  loginWithRedirect(): void {
    this.auth0.loginWithRedirect();
  }

  logout(): void {
    this.auth0.logout({
      logoutParams: {
        returnTo: typeof window !== 'undefined' ? window.location.origin : '',
      },
    });
  }
}
