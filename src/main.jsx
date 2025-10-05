import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./assets/webfont/css/all.min.css";
import ".//css/slick.css";
import "./sass/style.scss";
import "./css/responsive.css";
import "./css/custom-colors.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import App from "./App.jsx";

// Add this at the top, before ReactDOM.render
// Clear old Firebase URL cache on app load (one-time fix)
const CACHE_VERSION = 'v2'; // Increment this to force cache clear
const currentVersion = localStorage.getItem('cache_version');

if (currentVersion !== CACHE_VERSION) {
  // Clear all Firebase video caches
  const firebaseKeys = Object.keys(localStorage).filter(key => 
    key.includes('video_url') || key.includes('video_timestamp')
  );
  
  firebaseKeys.forEach(key => localStorage.removeItem(key));
  localStorage.setItem('cache_version', CACHE_VERSION);
  console.log('Cache cleared and updated to', CACHE_VERSION);
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
