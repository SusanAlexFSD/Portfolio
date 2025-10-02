// main.jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import './styles.css';
import App from "./App.jsx";



// Grab the root div from index.html
const rootElement = document.getElementById("root");

// Create a React root and render your App
createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>
);
