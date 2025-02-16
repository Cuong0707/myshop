import React, { useState, useEffect } from 'react';
import './SignUp.css'
import { registerUser } from "../../../services/authService"
import { usePopup } from '../../../context/PopupContext';
import Loading from '../../../components/Global/ProcessLoading/Loading'
function SignUpPage() {
  const [currentImage, setCurrentImage] = useState("");
  const [fade, setFade] = useState(false);
  const [isSignUp, setIsSignUp] = useState(true);

  const { setPopup } = usePopup();
  const [emailError] = useState('');
  const [isLoading, setIsLoading] = useState(true); 

  const handleImageLoad = () => {
    setIsLoading(false); 
  };
  useEffect(() => {
    // Kích hoạt hiệu ứng fade-out
    setFade(true);
    // Thay đổi hình ảnh sau khi fade-out
    const timeout = setTimeout(() => {
      setCurrentImage(
        isSignUp
          ? `${process.env.PUBLIC_URL}/assets/products/set1.jpg`
          : `${process.env.PUBLIC_URL}/assets/images/item4.jpg`
      );

      // Kích hoạt fade-in
      setFade(false);
    }, 500); 

    return () => clearTimeout(timeout);
  }, [isSignUp]);

  const [formData, setFormData] = useState({
    userName: "",
    passWord: "",
    confirmPassword: "",
  });

  const onToggleTransfer = (e) => {
    e.preventDefault();
    setIsSignUp((prev) => !prev);
  }
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
        <form action="/signup" className={`signup-form ${isSignUp?'hide-form':'show-form'}`}>
          <a href="/">
            <img src='assets/images/ella.jpg' alt='Ella Fashion Store Logo' />
          </a>
          <div className="title-container">
            Sign Up
          </div>
          <input className='input-container'
            type="email" placeholder='Your Email'
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
          <p
            className='switch-button'
            onClick={onToggleTransfer}>{isSignUp ?'Creat Account':'Login'}
           </p>
        </form>
        <form action="/signup" className={`signin-form ${isSignUp?'show-form':'hide-form'}`}>
          <a href="/">
            <img src='assets/images/ella.jpg' alt='Ella Fashion Store Logo' />
          </a>
          <div className="title-container">
            Login
          </div>
          <input className='input-container'
            type="text" placeholder='Your Email'
            value={formData.userName}
            name='userName'
            onChange={handleChange}
          />
          <label className="error-label">{emailError}</label>
          <input className='input-container'
            type="password"
            placeholder='Password'
            value={formData.passWord}
            onChange={handleChange}
            name='passWord'
          />
          <label className="error-label">{emailError}</label>
          <input className='input-container'
            type='submit'
            value={'Login'}
            onClick={onButtonClick}
          />
          <p
            className='switch-button'
            onClick={onToggleTransfer}>{isSignUp ?'Creat Account':'Login'}
           </p>
        </form>
      </div>
      {/*${process.env.PUBLIC_URL}/assets/products/set1.jpg */}
      <div className={`form-layer ${isSignUp ? 'left-form' : 'right-form'}`}>
        {isLoading&&<Loading/>}
        <img
          loading='lazy'
          src={currentImage}
          alt="Layer"
          className={`image ${fade ? "fade-out" : "fade-in"}`}
          onLoad={handleImageLoad}
        />
        <button onClick={onToggleTransfer}>{isSignUp&&fade ?'SignUp':'SignIn'}</button>
      </div>
    </div>
  );
}

export default SignUpPage;
