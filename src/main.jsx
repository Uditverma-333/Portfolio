import React from "react";
import ReactDOM from "react-dom/client";  // Vite uses React 18+ rendering API
import "./index.css";
import App from "./App";
// import reportWebVitals from "./reportWebVitals";

// Create a root element for rendering
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render the App component wrapped in StrictMode
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Optional: for measuring performance in your app
// reportWebVitals();
