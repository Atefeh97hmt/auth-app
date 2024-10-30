// src/SignIn.js
import React, { useState } from 'react';
import axios from 'axios';
import InputField from '../components/InputField';
import Button from '../components/Button';
import AuthLink from '../components/AuthLink';

const SignIn = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [statusMessage, setStatusMessage] = useState('');
  const [isError, setIsError] = useState(false); 

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get('http://localhost:5000/users');
      const users = response.data;

      const user = users.find((user) => user.username === username && user.password === password);

      if (user) {
        setStatusMessage('Sign in successful!');
        setIsError(false); 
      } else {
        setStatusMessage('Invalid username or password');
        setIsError(true); 
      }
    } catch (error) {
      setStatusMessage('Error fetching user data. Please try again later.');
      setIsError(true); 
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-indigo-50">
      <h2 className="text-3xl font-bold mb-6">Sign In</h2>
      <form 
        onSubmit={handleSignIn} 
        className="bg-white shadow-md rounded-lg p-8 w-full max-w-sm"
      >
        <InputField 
          type="text" 
          placeholder="Username" 
          value={username} 
          onChange={(e) => setUsername(e.target.value)} 
        />
        <InputField 
          type="password" 
          placeholder="Password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
        />
        <Button type="submit" text="Sign In" />
        {statusMessage && (
          <p
            className={`text-center mt-4 ${
              isError ? 'text-red-500' : 'text-green-500'
            }`}
          >
            {statusMessage}
          </p>
        )}
        <AuthLink to="/signup" text="Don't have an account? Sign Up" />
        <AuthLink to="/forgot-password" text="Forgot Password?" />
      </form>
    </div>
  );
};

export default SignIn;
