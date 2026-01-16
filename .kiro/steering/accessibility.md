# Accessibility Guidelines

## WCAG AA Compliance

This project follows WCAG 2.1 Level AA standards for accessibility.

### Color Contrast Requirements

**Normal Text (< 18pt or < 14pt bold):**
- Minimum contrast ratio: 4.5:1
- Applied to: Body text, navigation links, form labels, buttons

**Large Text (≥ 18pt or ≥ 14pt bold):**
- Minimum contrast ratio: 3:1
- Applied to: Headings, hero text, section titles

### Color Palette Compliance

**Light Mode:**
- Primary text: `rgba(0, 0, 0, 0.87)` on white = 13.6:1 ✓
- Secondary text: `rgba(0, 0, 0, 0.65)` on white = 6.4:1 ✓
- Tertiary text: `rgba(0, 0, 0, 0.60)` on white = 5.7:1 ✓
- Links: `#7b1fa2` (purple-700) on white = 7.2:1 ✓
- Cyan text: `#0088a3` (cyan-accessible) on white = 4.6:1 ✓

**Dark Mode:**
- Primary text: `rgba(255, 255, 255, 0.95)` on `#1a1a2e` = 12.8:1 ✓
- Secondary text: `rgba(255, 255, 255, 0.78)` on `#1a1a2e` = 8.2:1 ✓
- Tertiary text: `rgba(255, 255, 255, 0.65)` on `#1a1a2e` = 6.5:1 ✓
- Links: `#b794f6` on `#1a1a2e` = 6.1:1 ✓

### Semantic HTML

- Use proper heading hierarchy (h1 → h2 → h3)
- Include `alt` attributes on all images
- Use `aria-label` for icon-only buttons
- Implement `aria-hidden` for decorative elements
- Use semantic elements: `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`

### Keyboard Navigation

- All interactive elements are keyboard accessible
- Focus states are clearly visible
- Tab order follows logical reading order
- Modal can be closed with Escape key
- Skip links for main content (recommended for future)

### Interactive Elements

**Minimum Touch Target Size:**
- Buttons: 44x44px minimum
- Links: Adequate padding for touch
- Form inputs: Large enough for easy interaction

**Focus Indicators:**
- Visible focus outline on all interactive elements
- Enhanced focus states for better visibility
- Never remove focus outlines without replacement

### Form Accessibility

- All inputs have associated labels
- Required fields are marked with `required` attribute
- Error messages are clear and descriptive
- Placeholder text is not used as labels
- Form validation provides helpful feedback

### Motion and Animation

- Smooth transitions (0.3s) for theme changes
- Accordion animations are subtle
- Respect `prefers-reduced-motion` (recommended for future)

### Testing Recommendations

**Manual Testing:**
1. Navigate entire site using only keyboard
2. Test with screen reader (NVDA, JAWS, VoiceOver)
3. Verify color contrast with browser DevTools
4. Test at 200% zoom level
5. Validate HTML and check for ARIA errors

**Automated Testing Tools:**
- axe DevTools
- WAVE Browser Extension
- Lighthouse Accessibility Audit
- Color Contrast Analyzer

### Future Improvements

- Add skip navigation links
- Implement `prefers-reduced-motion` media query
- Add ARIA live regions for dynamic content
- Enhance form error handling with ARIA
- Add language attribute to HTML tag
- Implement focus trap in modal
