import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';

interface AuditEntry {
  timestamp: string;
  user: string;
  action: string;
  resource: string;
  detail: string;
}

const MOCK_AUDIT: AuditEntry[] = [
  { timestamp: '2026-04-02 09:15:22', user: 'alice@acmebank.com', action: 'LOGIN', resource: 'Session', detail: 'Successful login from 10.0.1.50' },
  { timestamp: '2026-04-02 09:18:03', user: 'alice@acmebank.com', action: 'UPDATE', resource: 'User #4', detail: 'Changed role from Viewer to Analyst' },
  { timestamp: '2026-04-02 09:22:41', user: 'bob@acmebank.com', action: 'LOGIN', resource: 'Session', detail: 'Successful login from 10.0.2.12' },
  { timestamp: '2026-04-02 09:30:15', user: 'bob@acmebank.com', action: 'EXPORT', resource: 'Report', detail: 'Exported monthly compliance report' },
  { timestamp: '2026-04-02 09:45:00', user: 'eve@acmebank.com', action: 'CREATE', resource: 'User #6', detail: 'Created new user frank@acmebank.com' },
  { timestamp: '2026-04-02 10:01:33', user: 'alice@acmebank.com', action: 'DELETE', resource: 'API Key', detail: 'Revoked API key ending in ...x4f2' },
  { timestamp: '2026-04-02 10:15:07', user: 'carol@acmebank.com', action: 'LOGIN', resource: 'Session', detail: 'Failed login attempt from 192.168.1.99' },
];

@Component({
  selector: 'app-audit-log',
  standalone: true,
  imports: [MatTableModule, MatCardModule],
  templateUrl: './audit-log.html',
  styleUrl: './audit-log.scss',
})
export class AuditLogComponent {
  displayedColumns = ['timestamp', 'user', 'action', 'resource', 'detail'];
  dataSource = MOCK_AUDIT;
}
