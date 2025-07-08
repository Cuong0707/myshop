import React, { useState, useEffect, use } from 'react';
import './SignUp.css';
import { registerUser } from '../../../services/authService';
import { usePopup } from '../../../context/PopupContext';
import Loading from '../../../components/Global/ProcessLoading/Loading';

function SignUpPage() {
  const [currentImage, setCurrentImage] = useState('');
  const [fade, setFade] = useState(false);
  const [isSignUp, setIsSignUp] = useState(true);
  const [formData, setFormData] = useState({ userName: '', passWord: '', confirmPassword: '' });
  const [emailError, setEmailError] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const { setPopup } = usePopup();

  useEffect(() => {
    setFade(true);
    const timeout = setTimeout(() => {
      setCurrentImage(
        isSignUp
          ? `${process.env.PUBLIC_URL}/assets/products/set1.jpg`
          : `${process.env.PUBLIC_URL}/assets/images/item4.jpg`
      );
      setFade(false);
    }, 500);
    return () => clearTimeout(timeout);
  }, [isSignUp]);

  const handleImageLoad = () => setIsLoading(false);

  const handleToggleMode = () => setIsSignUp((prev) => !prev);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSignUp && formData.passWord !== formData.confirmPassword) {
      setEmailError('Passwords do not match');
      return;
    }
    try {
      const response = await registerUser(formData);
      setPopup(response.message || 'Đăng ký thành công');
    } catch (error) {
      const msg = error.response?.data?.message || 'Đăng ký thất bại';
      setPopup(msg);
    }
  };

  return (
    <div className="main-container">
      <div className="content-form">
        <form onSubmit={handleSubmit} className={`signup-form ${isSignUp ? 'hide-form' : 'show-form'}`}>
          <a href="/">
            <img src="assets/images/ella.jpg" alt="Ella Fashion Store Logo" />
          </a>
          <div className="title-container">Sign Up</div>
          <input
            className="input-container"
            type="email"
            placeholder="Your Email"
            value={formData.userName}
            name="userName"
            onChange={handleChange}
            required
          />
          <input
            className="input-container"
            type="password"
            placeholder="Password"
            value={formData.passWord}
            onChange={handleChange}
            name="passWord"
            required
          />
          <input
            className="input-container"
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
          <label className="error-label">{emailError}</label>
          <button className="input-container" type="submit">Sign Up</button>
          <p className="switch-button" onClick={handleToggleMode}>Already have an account? Login</p>
        </form>

        <form onSubmit={handleSubmit} className={`signin-form ${isSignUp ? 'show-form' : 'hide-form'}`}>
          <a href="/">
            <img src="assets/images/ella.jpg" alt="Ella Fashion Store Logo" />
          </a>
          <div className="title-container">Login</div>
          <input
            className="input-container"
            type="text"
            placeholder="Your Email"
            value={formData.userName}
            name="userName"
            onChange={handleChange}
            required
          />
          <input
            className="input-container"
            type="password"
            placeholder="Password"
            value={formData.passWord}
            onChange={handleChange}
            name="passWord"
            required
          />
          <label className="error-label">{emailError}</label>
          <button className="input-container" type="submit">Login</button>
          <p className="switch-button" onClick={handleToggleMode}>Don't have an account? Sign Up</p>
        </form>
      </div>

      <div className={`form-layer ${isSignUp ? 'left-form' : 'right-form'}`}>
        {isLoading && <Loading />}
        <img
          loading="lazy"
          src={currentImage}
          alt="Layer"
          className={`image ${fade ? 'fade-out' : 'fade-in'}`}
          onLoad={handleImageLoad}
        />
        <button onClick={handleToggleMode}>{isSignUp ? 'SignUp' : 'SignIn'}</button>
      </div>
    </div>
  );
}

export default SignUpPage;