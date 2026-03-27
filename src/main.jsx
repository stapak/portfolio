import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';

// Disable right click globally
document.addEventListener("contextmenu", (e) => e.preventDefault());

// Disable some DevTools shortcuts
document.onkeydown = function (e) {
  if (e.keyCode === 123) return false; // F12
  if (e.ctrlKey && e.shiftKey && e.keyCode === "I".charCodeAt(0)) return false;
  if (e.ctrlKey && e.keyCode === "U".charCodeAt(0)) return false;
};


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
