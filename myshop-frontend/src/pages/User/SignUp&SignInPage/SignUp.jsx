import React, { useState } from 'react';
import './SignUp.css'
import { registerUser } from "../../../services/authService"
import { usePopup } from '../../../context/PopupContext';
function SignUpPage() {
  const [formData, setFormData] = useState({
    userName: "",
    passWord: "",
    confirmPassword: "",
  });
  const [isSignUp, setIsSignUp] = useState(true);
  const onToggleTransfer = (e) => {
    e.preventDefault();
    setIsSignUp((prev) => !prev);
  }
  console.log("nè: " + isSignUp)
  const { setPopup } = usePopup();
  // const [username,setUsername] = useState('')
  // const [password,setPassword] = useState('')
  // const [confirmPassword,setconfirmPassword] = useState('')
  const [emailError, setemailError] = useState('');
  const onButtonClick = async (e) => {
    e.preventDefault();
    try {
      const response = await registerUser(formData);
      setPopup(response.data); // Hiển thị thông báo thành công
    } catch (error) {
      setPopup(error.response.data); // Hiển thị thông báo lỗi
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  return (
    <div className="main-container">
      <div className='content-form'>
        <form action="/signup" className='signup-form'>
          <a href="/">
            <img src='assets/images/ella.jpg' alt='Ella Fashion Store Logo' />
          </a>
          <div className="title-container">
            Sign Up
          </div>
          <input className='input-container'
            type="text" placeholder='UserName'
            value={formData.userName}
            name='userName'
            onChange={handleChange}
          />
          <label className="error-label">{emailError}</label>
          <input className='input-container'
            type="password"
            placeholder='PassWord'
            value={formData.passWord}
            onChange={handleChange}
            name='passWord'
          />
          <label className="error-label">{emailError}</label>
          <input className='input-container'
            type="password"
            placeholder='Confirm PassWord'
            name='confirmPassword'
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          <label className="error-label">{emailError}</label>
          <input className='input-container'
            type='submit'
            value={'Sign Up'}
            onClick={onButtonClick}
          />
        </form>
        <form action="/signin" className='signin-form'>
          <a href="/">
            <img src='assets/images/ella.jpg' alt='Ella Fashion Store Logo' />
          </a>
          <div className="title-container">
            Sign Up
          </div>
          <input className='input-container'
            type="text" placeholder='UserName'
            value={formData.userName}
            name='userName'
            onChange={handleChange}
          />
          <label className="error-label">{emailError}</label>
          <input className='input-container'
            type="password"
            placeholder='PassWord'
            value={formData.passWord}
            onChange={handleChange}
            name='passWord'
          />
          <label className="error-label">{emailError}</label>
          <input className='input-container'
            type="password"
            placeholder='Confirm PassWord'
            name='confirmPassword'
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          <label className="error-label">{emailError}</label>
          <input className='input-container'
            type='submit'
            value={'Sign Up'}
            onClick={onButtonClick}
          />
        </form>
      </div>
      {/*${process.env.PUBLIC_URL}/assets/products/set1.jpg */}
      <div className={`form-layer ${isSignUp ? 'left-form' : 'right-form'}`}>
        <img
          src={isSignUp
            ? `${process.env.PUBLIC_URL}/assets/products/set1.jpg`
            : `${process.env.PUBLIC_URL}/assets/images/item4.jpg`
          }
          alt="Layer"
        />

        <button onClick={onToggleTransfer}>Transfer</button>
      </div>
    </div>
  );
}

export default SignUpPage;
