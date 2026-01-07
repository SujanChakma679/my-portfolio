# Meriem's Portfolio - React Version

A modern, responsive portfolio website built with React and Tailwind CSS, featuring a mobile-first design with dark mode support.

## Features

- 🌙 Dark mode by default with system preference detection
- 📱 Mobile-first responsive design
- ✨ Smooth animations and floating effects
- 🎨 Modern glassmorphism UI elements
- 🚀 Built with React and Tailwind CSS

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm run eject` - Ejects from Create React App (one-way operation)

## Project Structure

```
src/
├── components/
│   ├── BackgroundEffects.js    # Animated background elements
│   ├── BottomNavigation.js     # Bottom navigation bar
│   ├── Hero.js                 # Main hero section
│   ├── Navbar.js               # Top navigation
│   ├── ProfileSection.js       # Profile image with floating tech icons
│   ├── SocialLinks.js          # Social media links
│   └── StatsGrid.js            # Experience and projects stats
├── App.js                      # Main app component
├── index.js                    # React entry point
└── index.css                   # Global styles and animations
```

## Customization

- Update personal information in the Hero component
- Replace profile image URL in ProfileSection component
- Add your social media links in SocialLinks component
- Modify stats in StatsGrid component
- Customize colors in the Tailwind config within App.js

## Technologies Used

- React 18
- Tailwind CSS
- Google Fonts (Outfit)
- Material Icons

## License

This project is open source and available under the MIT License.