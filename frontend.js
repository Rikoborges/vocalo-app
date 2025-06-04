import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-white p-4">
      <h1 className="text-3xl font-bold text-blue-900 text-center">Vocalo Sensei</h1>
      <p className="text-center mt-4 text-gray-700">Seu professor de bolso para idiomas!</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
