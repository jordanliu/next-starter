# next-starter

A highly opinionated Next.js starter with better-auth, drizzle, postgres, shadcn/ui, react-email, and turborepo. Pre-configured for rapid, scalable development.

## Project Structure

```
nextjs-starter/
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
- Database using [Drizzle ORM](https://orm.drizzle.team/) and [PostgreSQL](https://www.postgresql.org/)
- UI components built with [shadcn/ui](https://ui.shadcn.com) and [Tailwind CSS](https://tailwindcss.com)
- Email support with [react-email](https://react.email)
- Form handling via [react-hook-form](https://react-hook-form.com)
- Monorepo setup using [Turborepo](https://turbo.build/repo)

## Getting Started

### 1. Create a New Project

```bash
npx create-next-app@latest [project-name] --use-pnpm --example https://github.com/jordanliu/next-starter
cd [project-name]
```

### 2. Install Dependencies

```bash
pnpm install
```

### 3. Set Up Environment Variables

```bash
cp apps/web/.env.example apps/web/.env.local
# Edit the .env.local file with your database and authentication configuration
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
```

### Database Operations
```bash
pnpm --filter @repo/database generate  # Generate database migrations
pnpm --filter @repo/database migrate   # Apply database migrations
pnpm --filter @repo/database studio    # Open Drizzle Studio for database management
pnpm --filter @repo/database seed      # Seed database with initial data
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

# Reset database (development only)
pnpm --filter @repo/database reset
```

## Deployment

### 1. Set Up Production Database
Ensure your production PostgreSQL database is ready and accessible. Update your production environment variables with the database connection string.

### 2. Run Database Migrations
```bash
# Apply migrations to production database
DATABASE_URL="your-production-db-url" pnpm --filter @repo/database migrate
```

### 3. Build Application
```bash
pnpm build
```

### 4. Deploy
Deploy the built application using your preferred hosting platform. Ensure the following environment variables are configured:

```env
DATABASE_URL=your-production-database-url
BETTER_AUTH_SECRET=your-secret-key
BETTER_AUTH_URL=https://your-domain.com
# Add other environment variables as needed
```
