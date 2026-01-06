# FIROSTACK Web - AI Coding Instructions

## Project Overview
This is a Next.js 15 marketing website for FIROSTACK, an Indonesian tech services company. Built with T3 Stack (Next.js + TypeScript + Tailwind) but currently uses only the frontend portion. The site is a multi-page application showcasing tech services under 1 million rupiah.

## Architecture Patterns

### Component Organization
- **Page Components**: Route-level components in `src/app/` using App Router
- **Section Components**: Reusable page sections in `src/components/sections/` (Hero, Description, Jasa, FAQ, ContactUs)
- **Domain Components**: Feature-specific components in `src/components/{campus,idealabs}/` for sub-brands
- **Shared Components**: Common UI in `src/components/` (Navbar, Footer, TextType)

### Animation System
Uses two animation libraries working together:
- **Framer Motion**: For scroll-triggered animations and layout transitions
- **GSAP**: Specifically for the TextType component's typing animations
- **Motion Variants**: Centralized in `src/lib/motionVariants.ts` with consistent easing `[0.25, 0.46, 0.45, 0.94]`

### Navigation Patterns
Navigation uses a hybrid approach:
- **Cross-page**: Standard Next.js Link components
- **Same-page**: `scrollIntoView` with smooth behavior for section anchoring
- **Dynamic routing**: Navbar component detects current pathname and handles both scenarios

## Key Development Conventions

### Type Safety
- Uses `type` imports consistently: `import { type Metadata } from "next"`
- Environment variables validated with Zod schemas in `src/env.js`
- TypeScript strict mode enabled with custom ESLint rules

### Styling Approach
- **Tailwind CSS v4**: Uses new CSS-first approach, not config-based
- **Utility Composition**: `cn()` helper in `src/lib/utils.ts` combines clsx + tailwind-merge
- **Component Variants**: Uses `class-variance-authority` for component API design
- **Animation Classes**: Custom CSS in `TextType.css` for GSAP-specific animations

### SEO & Metadata
Comprehensive SEO setup in `layout.tsx`:
- Indonesian locale (`id_ID`) with local keywords
- Structured Open Graph with proper image dimensions
- Template-based titles with fallbacks
- Verification placeholders for search console integration

## Critical Commands
```bash
# Development with Turbo
npm run dev

# Type checking (recommended before commits)
npm run check           # Lint + TypeScript check
npm run typecheck       # TypeScript only

# Code formatting (auto-sorts Tailwind classes)
npm run format:write
```

## Integration Points

### Image Handling
- Uses `next/image` aliased as `Img` (see Navbar.tsx import)
- Assets in `public/` with SVG preference for icons/graphics
- Implements lazy loading and optimization by default

### Client-Side Features
- Scroll detection for navbar state changes
- Smooth scrolling with section targeting
- Mobile menu state management
- GSAP timeline animations in TextType component

## Debugging Notes
- Animation debugging: Check motion variants in console, GSAP timeline in DevTools
- Navigation issues: Verify pathname detection in Navbar component
- Environment: All validation happens in `src/env.js`, not Next.js config

## Files to Reference
- `src/lib/motionVariants.ts` - Animation patterns
- `src/components/Navbar.tsx` - Navigation logic
- `src/components/TextType.tsx` - Complex animation component
- `src/app/layout.tsx` - SEO and metadata patterns