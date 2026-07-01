# NGT E-Journal

A modern, responsive search interface for the National Green Tribunal (NGT) E-Journal with environmental case law and orders.

## Features

- **Advanced Search**: Search case laws, orders, and topics with real-time filtering
- **Responsive Design**: Fully responsive interface for desktop, tablet, and mobile devices
- **Material Design 3**: Modern color system with Material Design 3 styling
- **Dark Mode**: Built-in dark mode support
- **Case Cards**: Detailed case information including status, bench, dates, and topics
- **Filter & Sort**: Advanced filtering and sorting capabilities
- **Mobile Navigation**: Bottom navigation bar for mobile devices

## Quick Start

### Local Development

1. Clone the repository:
```bash
git clone https://github.com/pahwagazal-debug/NGT-Journal.git
cd NGT-Journal
```

2. Open `index.html` in your browser:
```bash
# Using Python
python -m http.server 8000

# Using Node.js (with http-server)
npx http-server

# Or simply open in your browser
open index.html
```

3. Visit `http://localhost:8000` in your browser

### GitHub Pages Deployment

This repository is set up for GitHub Pages deployment:

1. Go to repository Settings → Pages
2. Select "Deploy from a branch"
3. Choose `main` branch and `/root` folder
4. Your site will be available at: `https://pahwagazal-debug.github.io/NGT-Journal/`

## Technology Stack

- **HTML5**: Semantic markup
- **Tailwind CSS**: Utility-first CSS framework with CDN
- **Material Icons**: Google Material Symbols for icons
- **Google Fonts**: Public Sans and Source Serif 4 fonts
- **JavaScript**: Vanilla JS for interactivity

## Color Scheme

### Primary Colors
- **Primary**: `#003626` (Dark Green)
- **Secondary**: `#215eab` (Blue)
- **Tertiary**: `#003626` (Dark Green)

### Surface Colors
- **Background**: `#f8f9fa` (Light Gray)
- **Surface**: `#f8f9fa` (Light Gray)
- **Surface Container**: `#edeeef` (Light Gray)

### Semantic Colors
- **Success/Accent Green**: `#C4DDB6`
- **Error**: `#ba1a1a`

## Project Structure

```
NGT-Journal/
├── index.html          # Main search interface
├── README.md           # This file
└── .github/
    └── workflows/      # GitHub Actions workflows
```

## Features Documentation

### Search Bar
- Placeholder text guides users with "Search case laws, orders, or topics..."
- Search input accepts queries
- Real-time search submission

### Filters
- Filter button for advanced filtering options
- Active filter chips display current filters
- Clear All button to reset filters

### Sorting
- Dropdown menu with sorting options:
  - Most Relevant (default)
  - Newest First
  - Oldest First

### Case Cards
- Hover effects for improved interactivity
- Status badges (Disposed, Pending)
- Bench location and case date
- Topic tags for quick categorization
- Case excerpt preview
- Action buttons:
  - View Order (PDF)
  - Save to Library

### Pagination
- Page numbers with navigation controls
- Current page highlighted
- Previous/Next buttons

### Mobile Features
- Bottom navigation bar
- Floating filter button
- Touch-friendly spacing and controls

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Customization

### Colors
Edit the Tailwind config in the `<script id="tailwind-config">` section to customize colors, spacing, and typography.

### Fonts
Modify the Google Fonts imports in the `<head>` to change fonts:
```html
<link href="https://fonts.googleapis.com/css2?family=..." rel="stylesheet"/>
```

### Content
Update the case cards in the HTML to populate with real data or connect to an API.

## Performance

- CDN-hosted dependencies (Tailwind CSS, Google Fonts, Material Icons)
- Minimal JavaScript for better performance
- Optimized CSS with Tailwind's purge feature (when building)

## Future Enhancements

- [ ] Backend API integration for dynamic case data
- [ ] Advanced search filters (date range, bench type, etc.)
- [ ] User authentication and saved cases
- [ ] Export functionality (PDF, Excel)
- [ ] Dark mode toggle
- [ ] Accessibility improvements
- [ ] Progressive Web App (PWA) features

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is open source and available under the MIT License.

## Support

For support, issues, or suggestions, please open an issue in the GitHub repository.

---

**Last Updated**: July 1, 2026
**Repository**: [pahwagazal-debug/NGT-Journal](https://github.com/pahwagazal-debug/NGT-Journal)