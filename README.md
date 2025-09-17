# 🎨 Custom Avatar Creator

A futuristic React application that allows users to create and customize their own avatars with various options like face shape, skin tone, hair style, eyes, clothes, and more. The application features a stunning 3D Spline background that creates an immersive experience.

---

## ✨ Features

- 🎭 Extensive customization: facial features, accessories, clothes, and more  
- 🔄 Real-time preview of changes  
- 💾 Save your avatar using `localStorage`  
- 🖼️ High-quality PNG export with transparent background  
- 📱 Responsive design for desktop & mobile  
- 🌌 Spline 3D background for a futuristic feel  
- 💡 Modern UI with smooth animations  

---

## 🚀 Technologies Used

- **React** – Frontend library  
- **avataaars** – Avatar generation library  
- **file-saver** – Image download support  
- **Spline** – 3D background scenes  
- **Canvas API** – PNG export rendering  
- **CSS3** – Styling and animations  

---

## 🛠️ Installation & Setup

```bash
git clone https://github.com/VPPranav/custom-avatar-creator.git
cd custom-avatar-creator
npm install
npm start
````

Then open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📦 Build for Production

```bash
npm run build
```

Builds the app for production to the `build/` folder.

---

## 🧩 Customization Options

* **Hair**: Short, long, hats, turbans, hijabs
* **Accessories**: Glasses, sunglasses, eyepatches
* **Hair Colors**: Auburn, Blonde, Red, Silver, etc.
* **Facial Hair**: Medium beards, majestic styles
* **Clothing**: Hoodies, blazers, sweaters, T-shirts
* **Eyes & Eyebrows**: Happy, sad, angry, hearts
* **Mouth**: Smile, grimace, scream, tongue, etc.
* **Skin Tones**: Light, tan, brown, black

---

## 💾 Data Storage

* Uses `localStorage` to persist avatar settings
* No server-side storage required

---

## 📤 Exporting Your Avatar

* Click "Export as PNG"
* Avatar will be downloaded with transparent background
* High quality for social media, games, or profile pictures

---

## 📱 Responsive Design

* Works on all devices
* Layout adapts seamlessly to screen sizes

---

## 🔍 Troubleshooting

### Export Issues

* Use a modern browser (Chrome, Firefox)
* Ensure JavaScript is enabled

### 3D Background Issues

* Ensure WebGL is enabled
* Update GPU drivers
* Disable hardware acceleration (if needed)

---

## 🔮 Future Enhancements

* Cloud saves & user accounts
* Avatar presets and animation
* SVG export support
* Social media sharing

---

## 🧪 Development Guide

### Project Structure

```
custom-avatar-creator/
├── public/                  # Static files
├── src/                     # Source code
│   ├── components/          # UI components
│   │   ├── AvatarCreator.js
│   │   ├── AvatarPreview.js
│   │   ├── Header.js
│   │   ├── Footer.js
│   │   └── SplineBackground.js
│   ├── App.js
│   ├── index.js
│   └── *.css
└── package.json
```

### Add New Options

1. Update `AvatarCreator.js` with new feature
2. Ensure compatibility with avataaars
3. Set default in `App.js`

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

## 🙏 Acknowledgements

* [avataaars](https://github.com/fangpenlin/avataaars)
* [Spline](https://spline.design)
* The open-source community 🌍


## 🙏 Acknowledgements

- [avataaars](https://github.com/fangpenlin/avataaars) for the avatar generation library
- [Spline](https://spline.design/) for the 3D design tool
- All the open-source libraries that made this project possible
plaintext

## requirements.txt

# Node.js dependencies (install using npm install)

# Core Dependencies

react@18.2.0                  # React library for building user interfaces
react-dom@18.2.0              # React DOM-specific methods
react-scripts@5.0.1           # Scripts and configuration used by Create React App

# Avatar Generation

avataaars@2.0.0               # Library for generating customizable avatars

# File Operations

file-saver@2.0.5              # Library to save files on the client-side

# 3D Background

@splinetool/react-spline@2.2.6 # React component for Spline 3D scenes
@splinetool/runtime@0.9.493    # Runtime for Spline 3D scenes

# Performance Monitoring

web-vitals@2.1.4              # Library for measuring web vitals metrics

# Development Dependencies

@testing-library/jest-dom@5.17.0     # Custom jest matchers for testing DOM elements
@testing-library/react@13.4.0        # Testing utilities for React
@testing-library/user-event@13.5.0   # Simulate user events for testing

# System Requirements

Node.js >= 14.0.0             # JavaScript runtime
npm >= 6.14.0                 # Package manager for Node.js
Modern web browser with WebGL support (Chrome, Firefox, Safari, Edge)
Graphics card with WebGL support for 3D background

# Browser Requirements

- Modern browser with ES6 support
- WebGL support for 3D background
- localStorage support for saving avatar configurations
- Canvas API support for exporting avatars


# Hardware Recommendations

- 4GB RAM minimum (8GB recommended)
- Modern GPU for smooth 3D background rendering
- Multi-core CPU recommended for better performance
plaintext

These updated documentation files provide comprehensive information about your project, including detailed installation instructions, feature descriptions, and technical requirements. The README.md is formatted with clear sections and emojis for better readability, while the requirements.txt file includes detailed information about each dependency and system requirement.


---
