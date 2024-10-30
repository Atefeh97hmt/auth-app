import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import ForgotPassword from './pages/ForgotPassword';
import './styles/output.css'; 

function App() {
  return (
    <Router>
      <div className="flex flex-col items-center justify-center min-h-screen bg-indigo-50">
        <h1 className="text-4xl mb-4">Welcome to Auth App</h1>
        <nav className="mb-4">
          <Link to="/signup" className="mx-2 text-blue-500 hover:underline">Sign Up</Link>
          <Link to="/signin" className="mx-2 text-blue-500 hover:underline">Sign In</Link>
          <Link to="/forgot-password" className="mx-2 text-blue-500 hover:underline">Forgot Password</Link>
        </nav>
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          {/* <Route path="/" element={<h1>Welcome to Auth App</h1>} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;

