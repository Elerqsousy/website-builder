# Website Builder

## Structure

- `components/` – UI components (builder, sections, preview, import-export, shared UI)
- `features/` – Feature logic (sections state, import/export config)
- `pages/` – Next.js pages
- `styles/` – Global and component styles
- `utils/` – Utility functions
- `types/` – TypeScript types/interfaces
- `public/` – Static assets

## Getting Started

1. Install dependencies: `npm install`
2. Run dev server: `npm run dev`

## Features

- Section Library (Click-to-Add): Add pre-made sections to your page layout.
- Live Preview: See your page update in real-time as you edit.
- Import/Export: Save and load your designs as JSON files.
- Editable Sections: Edit, delete, and reorder sections with drag-and-drop.
- Drag-and-Drop: Reorder sections using mouse or keyboard (DnD Kit).
- Accessibility: ARIA roles/labels on sortable items and controls, keyboard-accessible drag-and-drop, tooltips for drag handles.
- Fully Responsive: Works across all screen sizes.
- SSR Friendly: Optimized for Next.js server-side rendering.
- Performance Focused: Minimizes unnecessary re-renders.
- Subtle Animations: Smooth transitions and UI feedback.

## Development

- Feature-based folder structure for scalability and maintainability.
- Built with Next.js and TypeScript.
- Easily extendable with new sections or features.

## How to Contribute

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Submit a pull request with a clear description.

## License

MIT

## Roadmap

- [ ] Section Library UI
- [ ] Section State Management (add, edit, delete, reorder)
- [ ] Live Preview Area
- [ ] Import/Export Functionality
- [ ] Responsive Design & Animations
- [ ] Performance Optimization
- [ ] Documentation & Deployment

## Tech Stack

- Next.js
- TypeScript
- (You may add: Zustand/Redux, Framer Motion, TailwindCSS, etc.)

## Final Polish & Accessibility

- Drag-and-drop reordering is accessible via mouse and keyboard (DnD Kit).
- ARIA roles/labels are added to sortable items and controls for accessibility.
- The drag handle includes a tooltip and ARIA label for clarity.
- The section list and items are keyboard accessible via DnD Kit's KeyboardSensor.
- For best results, test on various devices and browsers, and adjust UI polish as needed.
