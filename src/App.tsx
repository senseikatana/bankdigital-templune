/**
 * Componente principal de la aplicación
 */

import React from 'react';

const App: React.FC = () => {
  return (
    <div style={{ 
      padding: '40px', 
      maxWidth: '600px',
      margin: '0 auto',
      backgroundColor: 'white',
      borderRadius: '8px',
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
      textAlign: 'center'
    }}>
      <h1 style={{ color: '#646cff', fontSize: '2.5rem', marginBottom: '0.5rem' }}>
        🚀 bankdigital-templune
      </h1>
      <p style={{ fontSize: '1.2rem', color: '#333' }}>
        Proyecto inicializado con <strong>Bun</strong> y <strong>React</strong>
      </p>
      <div style={{ 
        marginTop: '20px',
        padding: '20px',
        backgroundColor: '#f8f9fa',
        borderRadius: '4px',
        textAlign: 'left'
      }}>
        <p><strong>👤 Autor:</strong> samuraicoderdev</p>
        <p><strong>📅 Año:</strong> 2026</p>
        <p><strong>📦 Versión:</strong> 0.1.0</p>
      </div>
      <div style={{ marginTop: '20px' }}>
        <p style={{ fontSize: '0.9rem', color: '#666' }}>
          🛠️ Edita <code>src/App.tsx</code> para comenzar
        </p>
      </div>
    </div>
  );
};

export default App;
