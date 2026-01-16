# Technology Stack

## Core Technologies

- **HTML5**: Semantic markup with accessibility attributes
- **CSS3**: Custom properties (CSS variables), Flexbox, Grid
- **Vanilla JavaScript**: No frameworks, pure DOM manipulation

## Build System

No build system or package manager is currently used. This is a static website that runs directly in the browser.

## External Dependencies

- **Google Fonts**: Open Sans (weights: 400, 600, 700)
- **Figma API**: Images hosted via Figma MCP asset URLs

## Browser Requirements

- Modern browsers (Chrome, Firefox, Safari, Edge)
- CSS Custom Properties support required
- Flexbox and Grid layout support required

## Development Workflow

### Running Locally

Simply open `index.html` in a web browser. No server or build process required.

### File Structure

- `index.html` - Main HTML structure
- `styles/main.css` - All styles including design tokens
- `scripts/main.js` - Interactive functionality

### Testing

Manual testing in browser. No automated test suite currently exists.

## Performance Considerations

- Images loaded from external CDN (Figma)
- No bundling or minification
- No lazy loading implemented
- Font preconnect for Google Fonts
