// src/components/AuthLink.js
import React from 'react';
import { Link } from 'react-router-dom';

const AuthLink = ({ to, text }) => (
  <Link to={to} className="text-blue-500 hover:underline mt-4 block text-center">
    {text}
  </Link>
);

export default AuthLink;
