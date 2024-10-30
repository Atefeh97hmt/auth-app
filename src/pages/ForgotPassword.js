import React, { useState } from 'react';
import InputField from '../components/InputField';
import Button from '../components/Button';
import ErrorMessage from '../components/ErrorMessage'; 

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState(''); 
  const [error, setError] = useState(''); 

  const handlePasswordReset = (e) => {
    e.preventDefault();
    
    if (!email) {
      setError("Email can't be empty");
      return;
    }
    
    setError(''); 
    setMessage(`Password reset link sent to ${email}`);
    setEmail(''); 
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-indigo-50">
      <h2 className="text-3xl font-bold mb-6">Forgot Password</h2>
      <form 
        onSubmit={handlePasswordReset} 
        className="bg-white shadow-md rounded-lg p-8 w-full max-w-sm"
      >
        <InputField 
          type="email" 
          placeholder="Enter your email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
        />
        <Button type="submit" text="Reset Password" />
        
        {error && <ErrorMessage message={error} />} 
        {message && <p className="mt-4 text-green-500">{message}</p>}
      </form>
    </div>
  );
};

export default ForgotPassword;
