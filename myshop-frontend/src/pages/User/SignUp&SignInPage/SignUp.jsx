import React, {useState} from 'react';
import './SignUp.css'
import {registerUser} from "../../../services/authService"
import { usePopup } from '../../../context/PopupContext';
function SignUpPage() {
  const [formData, setFormData] = useState({
      userName: "",
      passWord: "",
      confirmPassword: "",
    });
    const { setPopup } = usePopup();
    // const [username,setUsername] = useState('')
    // const [password,setPassword] = useState('')
    // const [confirmPassword,setconfirmPassword] = useState('')
    const [emailError,setemailError] = useState('')
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
        <div className="mainContainer">
            <a href="/">
                <img src='assets/images/ella.jpg' alt='Ella Fashion Store Logo'/>
            </a>
            <div className="titleContainer">
                Sign Up
            </div>
            <input className='inputContainer' 
                type="text" placeholder='UserName' 
                value={formData.userName} 
                name='userName'
                onChange={handleChange}
            />
            <label className="errorLabel">{emailError}</label>
            <input className='inputContainer' 
                type="password" 
                placeholder='PassWord'
                value={formData.passWord}
                onChange={handleChange}
                name='passWord'
            />
            <label className="errorLabel">{emailError}</label>
            <input className='inputContainer' 
                type="password" 
                placeholder='Confirm PassWord'
                name='confirmPassword'
                value={formData.confirmPassword}
                onChange={handleChange}
            />
            <label className="errorLabel">{emailError}</label>
            <input className='inputContainer' 
                type='submit' 
                value={'Sign Up'}
                onClick={onButtonClick}
            />
        </div>
    );
}

export default SignUpPage;
