import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class LoginComponent {
  username = '';
  password = '';
  error = '';

  constructor(private auth: AuthService, private router: Router) {
    if (auth.isLoggedIn) {
      this.router.navigate(['/dashboard/users']);
    }
  }

  onSubmit(): void {
    if (this.auth.login(this.username, this.password)) {
      this.router.navigate(['/dashboard/users']);
    } else {
      this.error = 'Invalid credentials. Please provide a username and password.';
    }
  }
}
