# Internal Admin Portal

Internal administration dashboard for Acme Bank Inc. This is a fictional test application used for ETM ASMP testing scenarios.

## What This Is

A minimal Angular single page application that simulates an internal bank admin portal. It includes:

- **Login page** with mock authentication (any non empty username and password will work)
- **User management table** showing mock employee records with roles and statuses
- **Audit log view** displaying mock administrative activity events

The app uses Angular Material for UI components and styling.

## Prerequisites

- Node.js 18 or later
- npm

## Getting Started

```bash
make install
make dev
```

The app will be available at `http://localhost:4200`.

## Makefile Targets

| Target | Description |
|--------|-------------|
| `make install` | Install all npm dependencies |
| `make dev` | Start the development server |
| `make build` | Create a production build |
| `make clean` | Remove node_modules, dist, and Angular cache |

## Tech Stack

- Angular 21 (standalone components)
- Angular Material
- TypeScript
- SCSS
