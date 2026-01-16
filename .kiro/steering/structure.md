# Project Structure

## Directory Layout

```
/
├── index.html          # Main HTML file with all page sections
├── styles/
│   └── main.css        # Complete stylesheet with design tokens
├── scripts/
│   └── main.js         # Interactive functionality
├── .kiro/              # Kiro configuration
│   ├── settings/       # IDE settings
│   └── steering/       # Project guidance documents
└── README.md           # Project documentation
```

## CSS Architecture

The stylesheet follows a structured organization:

1. **Design Tokens** (top of file)
   - Primitive tokens: Raw values (colors, spacing, typography)
   - Semantic tokens: Purpose-based tokens referencing primitives

2. **Reset & Base Styles**: Browser normalization

3. **Utility Classes**: Reusable helpers (container, text utilities)

4. **Components**: Organized by section
   - Header (navigation, logo, social icons)
   - Hero (main banner with CTA)
   - Counter (statistics display)
   - Features (alternating image/text layouts)
   - Showcase (app screenshots)
   - Testimonials (quotes and profiles)
   - FAQ (accordion component)
   - Partners (logo grid)
   - News (latest updates)
   - CTA (download section)
   - Footer (links, social, language selector)
   - Modal (contact form overlay)

5. **Responsive Utilities**: Media query adjustments

## Design System

### Token Hierarchy

- **Primitive tokens**: Define raw values (`--color-purple-500`, `--spacing-4`)
- **Semantic tokens**: Reference primitives with meaning (`--color-primary`, `--spacing-section`)
- **Component styles**: Use semantic tokens for consistency
- **Dark mode tokens**: Override semantic tokens via `[data-theme="dark"]` attribute

### Naming Conventions

- **CSS Classes**: BEM methodology
  - Block: `.component`
  - Element: `.component__element`
  - Modifier: `.component--modifier`
  
- **CSS Variables**: Kebab-case with prefixes
  - Colors: `--color-{category}-{variant}`
  - Spacing: `--spacing-{size}`
  - Typography: `--font-{category}-{size}`

### Responsive Breakpoints

- `sm`: 640px (mobile landscape)
- `md`: 768px (tablet)
- `lg`: 1024px (desktop)
- `xl`: 1280px (large desktop)
- `2xl`: 1536px (extra large)

## JavaScript Organization

All interactive functionality in `scripts/main.js`:

- Theme toggle with localStorage persistence
- Mobile navigation toggle
- FAQ accordion interactions
- Smooth scroll for anchor links
- Contact modal open/close
- Form submission handling

## Component Patterns

### Reusable Components

- **Section Header**: Title with gradient indicator
- **Social Icons**: Circular gradient backgrounds
- **Buttons**: App store download badges
- **Cards**: Shadow-based elevation

### Layout Patterns

- **Two-column**: Hero, Features (alternating)
- **Three-column**: Counter statistics
- **Grid**: Partners, Testimonials faces
- **Centered**: Showcase, CTA sections
