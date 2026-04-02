import { Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';

export interface User {
  username: string;
  role: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private currentUser = signal<User | null>(null);

  constructor(private router: Router) {
    const stored = localStorage.getItem('currentUser');
    if (stored) {
      this.currentUser.set(JSON.parse(stored));
    }
  }

  get user() {
    return this.currentUser;
  }

  get isLoggedIn(): boolean {
    return this.currentUser() !== null;
  }

  login(username: string, password: string): boolean {
    // Mock authentication. Any non empty credentials are accepted.
    if (username && password) {
      const user: User = { username, role: 'admin' };
      this.currentUser.set(user);
      localStorage.setItem('currentUser', JSON.stringify(user));
      return true;
    }
    return false;
  }

  logout(): void {
    this.currentUser.set(null);
    localStorage.removeItem('currentUser');
    this.router.navigate(['/login']);
  }
}
