# Mobile App Landing Page

A fully responsive landing page built with a comprehensive design token system and reusable components.

## Project Structure

```
cursorproject/
├── index.html          # Main HTML structure
├── styles/
│   └── main.css        # Design tokens and component styles
├── scripts/
│   └── main.js         # Interactive functionality
└── README.md           # Documentation
```

## Design Token System

### Primitive Tokens

Primitive tokens are the foundational design values that define raw colors, typography, spacing, and other design properties.

#### Color Primitives
- **Purple Scale**: `--color-purple-50` through `--color-purple-900` plus `--color-purple-base` (#673ab7)
- **Cyan Scale**: `--color-cyan-50` through `--color-cyan-900`
- **Gray Scale**: `--color-gray-50` through `--color-gray-900`
- **Base Colors**: `--color-white`, `--color-black`

#### Typography Primitives
- **Font Family**: `--font-family-primary` (Open Sans)
- **Font Sizes**: `--font-size-xs` (12px) through `--font-size-8xl` (96px)
- **Font Weights**: `--font-weight-normal` (400), `--font-weight-semibold` (600), `--font-weight-bold` (700)
- **Line Heights**: `--line-height-tight` (1.2), `--line-height-normal` (1.5), `--line-height-relaxed` (1.75)

#### Spacing Primitives
- **Spacing Scale**: `--spacing-0` through `--spacing-64` (0px to 256px)
- Increments follow a consistent scale for predictable spacing

#### Other Primitives
- **Border Radius**: `--border-radius-sm` through `--border-radius-full`
- **Shadows**: `--shadow-sm` through `--shadow-xl`, plus `--shadow-card`
- **Breakpoints**: `--breakpoint-sm` (640px) through `--breakpoint-2xl` (1536px)

### Semantic Tokens

Semantic tokens provide meaningful names that describe the purpose of design values rather than their appearance.

#### Semantic Colors
- **Brand Colors**:
  - `--color-primary`: Primary brand color (purple)
  - `--color-primary-light`: Light variant
  - `--color-primary-dark`: Dark variant
  - `--color-primary-gradient-start/end`: Gradient colors

- **Text Colors**:
  - `--color-text-primary`: Main text color
  - `--color-text-secondary`: Secondary text color
  - `--color-text-tertiary`: Tertiary text color
  - `--color-text-inverse`: Text on dark backgrounds
  - `--color-text-link`: Link color

- **Background Colors**:
  - `--color-bg-primary`: Main background
  - `--color-bg-secondary`: Secondary background
  - `--color-bg-tertiary`: Tertiary background
  - `--color-bg-dark`: Dark background
  - `--color-bg-gradient`: Brand gradient
  - `--color-bg-gradient-hero`: Hero section gradient

- **Border Colors**:
  - `--color-border-primary`: Main border color
  - `--color-border-secondary`: Secondary border color
  - `--color-border-accent`: Accent border color

#### Semantic Typography
- **Headings**: `--font-heading-1` through `--font-heading-6`
- **Body Text**: `--font-body-large`, `--font-body-base`, `--font-body-small`

#### Semantic Spacing
- **Section Spacing**: `--spacing-section`, `--spacing-section-sm`
- **Component Spacing**: `--spacing-component`, `--spacing-component-sm`

## Reusable Components

### Header
- Responsive navigation with mobile menu toggle
- Logo component
- Social media icons

### Hero Section
- Responsive two-column layout
- Call-to-action buttons
- Decorative background shapes

### Counter
- Three-column statistics display
- Responsive grid layout

### Feature
- Alternating left/right image layouts
- Responsive grid system

### Showcase
- Full-width gradient background
- Centered content layout

### Testimonials
- Quote display with author attribution
- Profile image carousel

### FAQ / Accordion
- Expandable question/answer items
- Smooth animations

### Partners
- Logo grid with hover effects

### CTA Section
- Call-to-action with app store buttons
- Gradient background with wave effect

### Footer
- Multi-column link layout
- Social media icons
- Language selector

## Responsive Design

The design is fully responsive across all screen sizes:

- **Mobile** (< 640px): Single column layouts, stacked navigation
- **Tablet** (640px - 1024px): Two-column layouts where appropriate
- **Desktop** (1024px - 1536px): Full multi-column layouts
- **Large Desktop** (> 1536px): Centered content with max-width constraints

### Breakpoints
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

## Usage

1. Open `index.html` in a web browser
2. All styles are contained in `styles/main.css`
3. Interactive functionality is in `scripts/main.js`

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- CSS Custom Properties (CSS Variables) required
- Flexbox and Grid layout support required

## Customization

To customize the design:

1. **Colors**: Modify semantic color tokens in `:root` selector
2. **Typography**: Adjust font size and weight tokens
3. **Spacing**: Update spacing scale values
4. **Components**: Modify component-specific styles in their respective sections

All changes should be made at the token level when possible to maintain design consistency.
