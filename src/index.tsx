/**
 * Punto de entrada principal para React
 * @author samuraicoderdev
 * @license MIT
 * @version 0.1.0
 */

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Renderizar la aplicación
const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  console.error('No se encontró el elemento con id "root"');
}
