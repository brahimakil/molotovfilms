import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./css/bootstrap.min.css";
import "./css/slick.css";
import "./css/nice-select.css";
import "./css/style.css";
import "./css/responsive.css";
import "./css/custom-colors.css";

// AGGRESSIVE CACHE CLEAR - Clear ALL localStorage on version mismatch
const CACHE_VERSION = 'v3'; // Increment this whenever you deploy
const currentVersion = localStorage.getItem('cache_version');

if (currentVersion !== CACHE_VERSION) {
  console.log('Clearing all localStorage cache...');
  localStorage.clear(); // Clear EVERYTHING
  localStorage.setItem('cache_version', CACHE_VERSION);
  console.log('Cache cleared successfully');
}

// Add global error handler for unhandled promise rejections
window.addEventListener('unhandledrejection', (event) => {
  console.error('Unhandled promise rejection:', event.reason);
  event.preventDefault(); // Prevent page from hanging
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
