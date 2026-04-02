import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';

interface UserRecord {
  id: number;
  name: string;
  email: string;
  role: string;
  status: string;
}

const MOCK_USERS: UserRecord[] = [
  { id: 1, name: 'Alice Johnson', email: 'alice@acmebank.com', role: 'Admin', status: 'Active' },
  { id: 2, name: 'Bob Smith', email: 'bob@acmebank.com', role: 'Analyst', status: 'Active' },
  { id: 3, name: 'Carol Davis', email: 'carol@acmebank.com', role: 'Viewer', status: 'Active' },
  { id: 4, name: 'Dan Wilson', email: 'dan@acmebank.com', role: 'Analyst', status: 'Inactive' },
  { id: 5, name: 'Eve Martinez', email: 'eve@acmebank.com', role: 'Admin', status: 'Active' },
];

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [MatTableModule, MatCardModule, MatChipsModule],
  templateUrl: './users.html',
  styleUrl: './users.scss',
})
export class UsersComponent {
  displayedColumns = ['id', 'name', 'email', 'role', 'status'];
  dataSource = MOCK_USERS;
}
