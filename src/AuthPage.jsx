import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase';  // Only Firebase Auth needed
import './auth.css';
import carpet from './Decos/carpet.mp4';
import Confetti from 'react-confetti';

const AuthPage = () => {
  const [showConfetti, setShowConfetti] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // Define UIDs for admin and user
  const adminUID = 'uyHBVBIo2QXAMAnon3HeFPurGR83';
  const userUID = 'oJWjzAYftlWLsCvXGgjhjiWBVFE3';   

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);  

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Check if the UID matches the admin or regular user
      if (user.uid === adminUID) {
        // If the UID is for the admin, redirect to the admin dashboard
        setShowConfetti(true);
        setTimeout(() => {
          navigate('/dashboard');
        }, 4000);
      } else if (user.uid === userUID) {
        // If the UID is for a regular user, redirect to the regular user dashboard
        setShowConfetti(true);
        setTimeout(() => {
          navigate('/dashboard');
        }, 4000);
      } else {
        // If the UID is not recognized, show an error
        setError('Access denied. Invalid user.');
      }
    } catch (err) {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="auth-container">
      {showConfetti && <Confetti />}
      <div className="auth-box">
        <div className="video-container">
          <video className="auth-video" src={carpet} autoPlay loop muted></video>
          <div className="video-overlay-text">
            <h1>Exclusive Access</h1>
          </div>
        </div>
        <h2 className="auth-title">Only the Luckiest</h2>
        {error && <p className="auth-error">{error}</p>}
        <form className="auth-form" onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Put Your Email beautiful Princess"
            className="auth-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="And Your Password"
            className="auth-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="auth-button">Enter Your World</button>
        </form>
      </div>
    </div>
  );
};

export default AuthPage;



