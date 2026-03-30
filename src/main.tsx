import React from 'react'
import { createRoot } from 'react-dom/client' // Додай цей рядок!
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx' // або .tsx
import './index.css'

// Тепер TypeScript знатиме, що таке createRoot
const container = document.getElementById('root');

if (container) {
  const root = createRoot(container);
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  );
}