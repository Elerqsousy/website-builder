# Website Builder

## Initialization

This project has been initialized with the following configurations:

### Technology Stack

- Next.js 15 with Turbopack for enhanced development experience
- React 19 for UI components
- TypeScript for type safety
- Tailwind CSS for styling
- Zustand for state management
- Zod for schema validation
- React Hook Form for form handling
- Framer Motion for animations
- dnd-kit for drag-and-drop functionality

### Development Tools

- ESLint for code linting
- Prettier for code formatting
- GitHub Actions for CI/CD pipeline (configured in `.github/workflows/ci.yml`)
- Vercel for deployment

### Project Structure

The project follows a feature-based architecture, organizing code by business domains rather than technical concerns.

### Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Run development server: `npm run dev`
4. Build for production: `npm run build`

### Quality Assurance

- Linting: `npm run lint`
- Formatting: `npm run format`
- CI pipeline validates all PRs and pushes to main branch
