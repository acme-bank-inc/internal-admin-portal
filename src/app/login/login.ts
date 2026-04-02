import { Component, inject, OnInit } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    AsyncPipe,
    MatCardModule,
    MatButtonModule,
    MatProgressSpinnerModule,
  ],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class LoginComponent implements OnInit {
  private auth = inject(AuthService);
  private router = inject(Router);

  isAuthenticated$ = this.auth.isAuthenticated$;
  isLoading$ = this.auth.isLoading$;

  ngOnInit(): void {
    this.isAuthenticated$.subscribe((authenticated) => {
      if (authenticated) {
        this.router.navigate(['/dashboard/users']);
      }
    });
  }

  login(): void {
    this.auth.loginWithRedirect();
  }
}
