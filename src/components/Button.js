// src/components/Button.js
import React from 'react';

const Button = ({ text, type = 'button', onClick }) => (
  <button 
    type={type} 
    onClick={onClick}
    className="w-full py-3 bg-cyan-700 text-white font-semibold rounded-lg hover:bg-cyan-900 transition duration-200"
  >
    {text}
  </button>
);

export default Button;
