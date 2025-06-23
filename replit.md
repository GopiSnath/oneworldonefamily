# Angalaparameshwari Trust Website

## Overview

This is a full-stack web application for the Angalaparameshwari Trust, a Hindu spiritual organization. The website serves as a digital presence for the temple, providing information about events, donation opportunities, and allowing devotees to submit contact requests and prayer requests. The application features a beautiful, culturally-appropriate design with multilingual support (English and Tamil).

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **Styling**: Tailwind CSS with custom Hindu spiritual color palette
- **UI Components**: Radix UI components with shadcn/ui styling
- **State Management**: TanStack Query for server state management
- **Internationalization**: react-i18next for English/Tamil language support
- **Animations**: Framer Motion for smooth animations and transitions
- **Build Tool**: Vite for fast development and optimized builds

### Backend Architecture
- **Runtime**: Node.js with TypeScript
- **Framework**: Express.js for REST API
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Validation**: Zod schemas for type-safe data validation
- **Development**: tsx for TypeScript execution in development

### Project Structure
- `client/` - React frontend application
- `server/` - Express.js backend API
- `shared/` - Shared TypeScript schemas and types
- `migrations/` - Database migration files (auto-generated)

## Key Components

### Frontend Components
- **Hero Section**: Landing section with divine imagery and call-to-action
- **About Section**: Trust history and mission information
- **Gallery Section**: Divine darshan images and temple photography
- **Events Section**: Upcoming sacred events and festivals
- **Donation Section**: Seva opportunities with progress tracking
- **Contact Section**: Contact form with prayer request functionality
- **Navigation**: Responsive navbar with smooth scrolling and language toggle
- **Floating Petals**: Decorative animated elements for spiritual ambiance

### Backend API Endpoints
- `GET /api/events` - Retrieve upcoming events
- `GET /api/donations` - Retrieve donation categories
- `POST /api/contact` - Submit contact/prayer requests
- `GET /api/contact` - Retrieve contact submissions (admin)

### Database Schema
- **contact_requests**: User contact forms and prayer requests
- **events**: Sacred events and festival information
- **donations**: Donation categories with progress tracking

## Data Flow

1. **Frontend Request**: User interactions trigger API calls via TanStack Query
2. **API Processing**: Express routes validate data using Zod schemas
3. **Database Operations**: Drizzle ORM handles PostgreSQL interactions
4. **Response Handling**: Data is returned to frontend and cached by React Query
5. **UI Updates**: Components re-render with updated data automatically

The application uses a memory storage fallback when database is not available, ensuring development continues smoothly.

## External Dependencies

### UI and Styling
- Tailwind CSS for utility-first styling
- Radix UI primitives for accessible components
- Framer Motion for animations
- Lucide React for consistent iconography

### Data and State Management
- TanStack React Query for server state
- React Hook Form with Hookform Resolvers for form handling
- Zod for runtime type validation

### Development Tools
- Vite for fast builds and HMR
- TypeScript for type safety
- ESBuild for production bundling
- Drizzle Kit for database migrations

### Database and Backend
- PostgreSQL (via Neon Database)
- Drizzle ORM for type-safe database operations
- Express.js for REST API
- Connect-pg-simple for session storage

## Deployment Strategy

### Development
- `npm run dev` - Starts both frontend and backend in development mode
- Vite dev server proxies API requests to Express backend
- Hot module replacement for fast development iteration
- TypeScript compilation checking via `npm run check`

### Production Build
- `npm run build` - Creates optimized production builds
- Frontend built to `dist/public` directory
- Backend bundled with ESBuild to `dist/index.js`
- Static assets served from Express in production

### Database Management
- `npm run db:push` - Pushes schema changes to database
- Drizzle migrations automatically generated from schema changes
- Environment variable `DATABASE_URL` required for database connection

### Deployment Configuration
- Configured for Replit autoscale deployment
- PostgreSQL 16 module enabled in Replit environment
- Build and start scripts configured for production deployment

## Changelog
- June 23, 2025. Initial setup

## User Preferences

Preferred communication style: Simple, everyday language.