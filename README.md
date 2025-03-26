# Glassmorphic Dashboard

![Glassmorphic Dashboard Preview](https://github.com/MuhammadFahru/glassmorphic-dashboard/blob/main/assets/images/Desktop.png)

## Overview

A modern, fully responsive admin dashboard built with the glassmorphic design trend. This dashboard features a clean interface with frosted glass effects, beautiful data visualizations, and a responsive layout that works across all devices.

## Demo

Live preview: [Glassmorphic Dashboard Demo](https://muhammadfahru.github.io/glassmorphic-dashboard)

## Features

- **Glassmorphic UI**: Beautiful frosted glass effect applied to UI components
- **Responsive Design**: Fully responsive layout that adapts to desktop, tablet, and mobile screens
- **Interactive Charts**: Dynamic charts built with ApexCharts
- **Collapsible Sidebar**: Toggleable sidebar that adapts to screen size
- **Mobile Optimizations**: Special UI considerations for mobile users
- **Dark Mode Compatible**: Works beautifully against dark backgrounds
- **Clean Code Structure**: Well-organized HTML, CSS, and JavaScript

## Screenshots

### Desktop View

![Desktop View](https://github.com/MuhammadFahru/glassmorphic-dashboard/blob/main/assets/images/Desktop.png)

### Desktop View Sidebar Collapsed

![Desktop View Sidebar Collapsed](https://github.com/MuhammadFahru/glassmorphic-dashboard/blob/main/assets/images/Desktop%20Sidebar%20Collapsed.png)

### Tablet View

![Tablet View](https://github.com/MuhammadFahru/glassmorphic-dashboard/blob/main/assets/images/Tablet.png)

### Mobile View

![Mobile View](https://github.com/MuhammadFahru/glassmorphic-dashboard/blob/main/assets/images/Mobile.png)

### Mobile View with SideBar

![Mobile View with SideBar](https://github.com/MuhammadFahru/glassmorphic-dashboard/blob/main/assets/images/Mobile%20Sidebar.png)

## Technologies Used

- HTML5
- CSS3 (with modern features like backdrop-filter)
- JavaScript (ES6+)
- [Font Awesome](https://fontawesome.com/) for icons
- [ApexCharts](https://apexcharts.com/) for data visualization

## Key Components

1. **Navigation Sidebar**

   - Collapsible sidebar with smooth transitions
   - Navigation menu with icon and text labels
   - Toggle button for easier navigation

2. **Statistics Cards**

   - Key metrics visualization
   - Growth indicators with up/down trends
   - Color-coded categories

3. **Data Charts**

   - Bar chart showing performance metrics
   - Doughnut chart displaying revenue sources
   - Interactive controls with time period selection

4. **Responsive Header**
   - Search functionality
   - User notifications
   - Profile access

## Browser Compatibility

The dashboard works best in modern browsers that support CSS `backdrop-filter`:

- Chrome 76+
- Firefox 70+ (with flag)
- Safari 9+
- Edge 17+

For browsers that don't support backdrop-filter, a fallback background is provided.

## Installation and Usage

1. Clone this repository:

   ```
   git clone https://github.com/muhammadfahru/glassmorphic-dashboard.git
   ```

2. Open the index.html file in your browser, or set up a local server:

   ```
   cd glassmorphic-dashboard
   python -m http.server
   ```

3. Navigate to `http://localhost:8000` in your browser

## Customization

### Changing the Background

To change the background image, modify the `background-image` property in the `body` selector in style.css:

```css
body {
  background-image: url("your-image-url.jpg");
}
```

### Chart Customization

Chart data and options can be modified in the script.js file. Refer to the [ApexCharts documentation](https://apexcharts.com/docs/) for more customization options.

### Color Schemes

The color scheme can be adjusted by modifying the color values in style.css. The main colors used are:

- Text: white and rgba(255, 255, 255, 0.7)
- Glass effect: rgba(255, 255, 255, 0.1) to rgba(255, 255, 255, 0.2)
- Accent colors for cards: various rgba values

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Acknowledgments

- Background photo by [Ken Cheung](https://unsplash.com/photos/tree-on-body-of-water-near-mountains-KonWFWUaAuk) on Unsplash
- Inspired by the glassmorphism UI design trend

---

Created with ❤️ by [Muhammad Fahru Rozi](https://github.com/muhammadfahru)
