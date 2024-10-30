// src/SignUp.js
import React, { useState } from 'react';
import axios from 'axios';
import InputField from '../components/InputField';
import Button from '../components/Button';
import AuthLink from '../components/AuthLink';

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    username: '',
    password: '',
    confirmPassword: '',
  });
  const [statusMessage, setStatusMessage] = useState(''); 
  const [isError, setIsError] = useState(false); 

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setStatusMessage("Passwords don't match");
      setIsError(true); 
      return;
    }

    setStatusMessage(''); 

    const user = { ...formData };
    try {
      await axios.post('http://localhost:5000/users', user);
      setStatusMessage('User registered successfully!');
      setIsError(false); 
    } catch (error) {
      console.error('Error registering user:', error);
      setStatusMessage('Error registering user. Please try again.');
      setIsError(true); 
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-indigo-50">
      <h2 className="text-3xl font-bold mb-6">Sign Up</h2>
      <form 
        onSubmit={handleSignUp} 
        className="bg-white shadow-md rounded-lg p-8 w-full max-w-sm"
      >
        <InputField 
          type="text" 
          name="firstName" 
          placeholder="First Name" 
          value={formData.firstName} 
          onChange={handleChange} 
        />
        <InputField 
          type="text" 
          name="lastName" 
          placeholder="Last Name" 
          value={formData.lastName} 
          onChange={handleChange} 
        />
        <InputField 
          type="email" 
          name="email" 
          placeholder="Email Address" 
          value={formData.email} 
          onChange={handleChange} 
        />
        <InputField 
          type="text" 
          name="phone" 
          placeholder="Phone Number" 
          value={formData.phone} 
          onChange={handleChange} 
        />
        <InputField 
          type="text" 
          name="username" 
          placeholder="Username" 
          value={formData.username} 
          onChange={handleChange} 
        />
        <InputField 
          type="password" 
          name="password" 
          placeholder="Password" 
          value={formData.password} 
          onChange={handleChange} 
        />
        <InputField 
          type="password" 
          name="confirmPassword" 
          placeholder="Confirm Password" 
          value={formData.confirmPassword} 
          onChange={handleChange} 
        />
    
        
        <Button type="submit" text="Sign Up" />
            
        {statusMessage && (
          <p
            className={`text-center mt-4 ${
              isError ? 'text-red-500' : 'text-green-500'
            }`}
          >
            {statusMessage}
          </p>
        )}
        <AuthLink to="/signin" text="Already have an account? Sign In" />
      </form>
    </div>
  );
};

export default SignUp;
