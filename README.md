# next-starter

A highly opinionated Next.js starter with better-auth, drizzle, postgres, shadcn/ui, react-email, and turborepo. Pre-configured for rapid, scalable development.

## Project Structure

```
next-starter/
├── apps/
│   └── web/                 # Main Next.js application
├── packages/
│   ├── auth/               # Authentication utilities
│   ├── database/           # Database schema and utilities
│   ├── email/              # Email templates and providers
│   ├── eslint-config/      # Shared ESLint configurations
│   ├── typescript-config/  # Shared TypeScript configurations
│   └── ui/                 # Shared UI components
└── turbo/                  # Turborepo configuration
```

## Features

- Authentication with [Better Auth](https://www.better-auth.com/)
- Email/password registration, required verification, sign-in, and password reset
- Optional GitHub and Google sign-in (buttons appear only when configured)
- Database using [Drizzle ORM](https://orm.drizzle.team/) and [PostgreSQL](https://www.postgresql.org/)
- UI components built with [shadcn/ui](https://ui.shadcn.com) and [Tailwind CSS](https://tailwindcss.com)
- Email support with [react-email](https://react.email)
- Form handling via [react-hook-form](https://react-hook-form.com)
- Monorepo setup using [Turborepo](https://turbo.build/repo)

## Getting Started

### 1. Create a New Project

```bash
npx create-next-app@latest new-project --use-pnpm -e https://github.com/jordanliu/next-starter
cd new-project
```

### 2. Install Dependencies

```bash
pnpm install
```

### 3. Set Up Environment Variables

```bash
cp apps/web/.env.example apps/web/.env.local
# Edit .env.local with your database, authentication, and email configuration
# Generate `BETTER_AUTH_SECRET` with `openssl rand -base64 32`.
# GitHub and Google sign-in are optional; each provider is enabled only when both its client ID and client secret are configured.
```

### 4. Set Up the Database

```bash
pnpm --filter @repo/database generate
pnpm --filter @repo/database migrate
```

### 5. Start the Development Server

```bash
pnpm dev
```

The application will be available at [http://localhost:3000](http://localhost:3000).

## Available Commands

### Development

```bash
pnpm dev          # Start development servers for all packages
pnpm build        # Build all packages for production
pnpm start        # Start production server (requires build)
```

### Code Quality

```bash
pnpm lint         # Run ESLint across all packages
pnpm format       # Format code with Prettier
pnpm check-types  # Run TypeScript type checking
pnpm test         # Run package integration tests
```

### Database Operations

```bash
pnpm --filter @repo/database generate  # Generate database migrations
pnpm --filter @repo/database migrate   # Apply database migrations
pnpm --filter @repo/database push      # Sync a development database without a migration
pnpm --filter @repo/database studio    # Open Drizzle Studio for database management
```

### Package-Specific

```bash
pnpm --filter web dev           # Run only the Next.js application
pnpm --filter @repo/email dev   # Preview email templates
```

## Project Management

### Adding New Packages

```bash
turbo gen
```

Follow the prompts to scaffold a new package with proper TypeScript and build configurations.

### Adding shadcn/ui Components

```bash
cd apps/web
pnpm dlx shadcn@canary add [component-name]
```

Components are automatically added to the UI package and can be imported across the monorepo.

### Managing Dependencies

```bash
# Add to specific package
pnpm --filter web add [package-name]
pnpm --filter @repo/ui add [package-name]
pnpm --filter @repo/database add [package-name]

# Add to workspace root (affects all packages)
pnpm add -w [package-name]

# Add dev dependencies
pnpm --filter web add -D [package-name]
```

### Working with Database Schema

```bash
# After modifying schema files
pnpm --filter @repo/database generate  # Generate new migration
pnpm --filter @repo/database migrate   # Apply to local database
```

Commit the generated SQL and Drizzle metadata in `packages/database/drizzle`.
Use `push` only for disposable development databases; use reviewed migrations
for shared and production databases.

## Deployment

### 1. Set Up Production Database

Ensure your production PostgreSQL database is ready and accessible. Configure
the deployment environment variables before building or starting the app.

### 2. Run Database Migrations

```bash
# Apply committed migrations once per deployment, before starting the new app
DATABASE_URL="your-production-db-url" pnpm --filter @repo/database migrate
```

### 3. Build Application

```bash
pnpm build
```

### 4. Deploy

For a Node.js deployment, start the production server after the build:

```bash
pnpm start
```

On Vercel, set the repository root as the project root and use `pnpm build` as
the build command. Run database migrations as a separate, single-run release
step rather than from every application instance.

Ensure the following environment variables are configured:

```env
DATABASE_URL=your-production-database-url
BETTER_AUTH_SECRET=your-secret-key
BETTER_AUTH_URL=https://your-domain.com
EMAIL_FROM=noreply@your-domain.com

# Configure Resend...
EMAIL_API_KEY=your-resend-api-key

# ...or configure SMTP instead.
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USER=your-smtp-user
SMTP_PASS=your-smtp-password
SMTP_SECURE=false

# Optional social providers
GITHUB_CLIENT_ID=your-github-client-id
GITHUB_CLIENT_SECRET=your-github-client-secret
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
```
