import { useState, useEffect } from "react";
import "./App.css";
import AvatarCreator from "./components/AvatarCreator";
import AvatarPreview from "./components/AvatarPreview";
import SplineBackground from "./components/SplineBackground";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { saveAs } from "file-saver";

function App() {
  // Default avatar options
  const defaultAvatarOptions = {
    topType: "ShortHairDreads01",
    accessoriesType: "Blank",
    hairColor: "BrownDark",
    facialHairType: "Blank",
    facialHairColor: "BrownDark",
    clotheType: "BlazerShirt",
    clotheColor: "PastelBlue",
    eyeType: "Default",
    eyebrowType: "Default",
    mouthType: "Default",
    skinColor: "Light",
    hatColor: "Black",
    graphicType: "Bat",
  };

  // State for avatar options
  const [avatarOptions, setAvatarOptions] = useState(defaultAvatarOptions);
  const [isExporting, setIsExporting] = useState(false);

  // Load saved avatar from localStorage if available
  useEffect(() => {
    const savedAvatar = localStorage.getItem("savedAvatarOptions");
    if (savedAvatar) {
      setAvatarOptions(JSON.parse(savedAvatar));
    }
  }, []);

  // Handle option change
  const handleOptionChange = (category, value) => {
    setAvatarOptions((prevOptions) => ({
      ...prevOptions,
      [category]: value,
    }));
  };

  // Save avatar to localStorage
  const saveAvatarToLocalStorage = () => {
    localStorage.setItem("savedAvatarOptions", JSON.stringify(avatarOptions));

    // Show notification
    const notification = document.getElementById("notification");
    notification.classList.add("show");
    setTimeout(() => {
      notification.classList.remove("show");
    }, 3000);
  };

  // Reset avatar to default
  const resetAvatar = () => {
    setAvatarOptions(defaultAvatarOptions);
    localStorage.removeItem("savedAvatarOptions");
  };

  // Export avatar as PNG - Completely new approach
  const exportAvatarAsPNG = () => {
    setIsExporting(true);
    
    // Create a new hidden canvas element
    const canvas = document.createElement("canvas");
    canvas.width = 600; // Higher resolution
    canvas.height = 600;
    const ctx = canvas.getContext("2d");
    
    // Create a new image from the SVG data
    const svgElement = document.querySelector("#avatar-preview-container svg");
    
    if (!svgElement) {
      console.error("SVG element not found");
      setIsExporting(false);
      return;
    }
    
    // Get SVG data
    const svgData = new XMLSerializer().serializeToString(svgElement);
    const svgBlob = new Blob([svgData], { type: "image/svg+xml;charset=utf-8" });
    const DOMURL = window.URL || window.webkitURL || window;
    const url = DOMURL.createObjectURL(svgBlob);
    
    // Create image and draw to canvas when loaded
    const img = new Image();
    img.crossOrigin = "anonymous";
    
    img.onload = () => {
      // Fill with transparent background
      ctx.fillStyle = "transparent";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Draw image centered
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      
      // Convert to blob and save
      canvas.toBlob((blob) => {
        saveAs(blob, "my-custom-avatar.png");
        setIsExporting(false);
        DOMURL.revokeObjectURL(url);
      }, "image/png");
    };
    
    img.onerror = (error) => {
      console.error("Error loading image:", error);
      setIsExporting(false);
      DOMURL.revokeObjectURL(url);
    };
    
    img.src = url;
  };

  return (
    <div className="app">
      <div className="background-container">
        <SplineBackground />
      </div>

      <div className="content">
        <Header />

        <main>
          <div className="avatar-section">
            <div className="avatar-container">
              <div className="avatar-card">
                <h2 className="section-title">Your Avatar</h2>
                <AvatarPreview options={avatarOptions} />
              </div>

              <div className="action-buttons">
                <button onClick={saveAvatarToLocalStorage} className="glow-button save-button">
                  <span className="button-icon">💾</span> Save Avatar
                </button>
                <button onClick={exportAvatarAsPNG} className="glow-button export-button" disabled={isExporting}>
                  <span className="button-icon">📥</span>
                  {isExporting ? "Exporting..." : "Export as PNG"}
                </button>
                <button onClick={resetAvatar} className="glow-button reset-button">
                  <span className="button-icon">🔄</span> Reset
                </button>
              </div>
            </div>
          </div>

          <div className="controls-section">
            <div className="controls-container">
              <AvatarCreator options={avatarOptions} onOptionChange={handleOptionChange} />
            </div>
          </div>
        </main>

        <Footer />

        <div id="notification" className="notification">
          Avatar saved successfully!
        </div>
      </div>
    </div>
  );
}

export default App;
