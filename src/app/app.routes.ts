import { Routes } from '@angular/router';
import { LoginComponent } from './login/login';
import { DashboardComponent } from './dashboard/dashboard';
import { UsersComponent } from './users/users';
import { AuditLogComponent } from './audit-log/audit-log';
import { authGuard } from './services/auth.guard';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [authGuard],
    children: [
      { path: 'users', component: UsersComponent },
      { path: 'audit-log', component: AuditLogComponent },
      { path: '', redirectTo: 'users', pathMatch: 'full' },
    ],
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login' },
];
