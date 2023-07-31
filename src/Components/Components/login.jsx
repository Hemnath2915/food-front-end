import React from 'react';
import './Login.css'; 
import { Link } from 'react-router-dom';
// import aiImage from './ai_image.png'; // Import the AI image?

const Login = () => {
  const handleLogin = (event) => {
    event.preventDefault();

  };

  return (

    <div className="login-container">
        <div className="pnng" style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
        <img src={"https://res.cloudinary.com/dd2p99itq/image/upload/v1689309080/8f81fef1eec11ccfcd7612d1416ee0d0-removebg-preview_1_utrmey.png"} alt="Image Description" />
        </div>
      <div className="login-card">
      <div className="png" >

</div>
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" required />
          </div>
          <div className="form-group">
            <label htmlFor="remember">Remember me</label>
            <input type="checkbox" id="remember" name="remember" />
          </div>
          <div className="form-group">
            <button type="submit" className="login-button">Login</button>
          </div>
          <div className="form-group">
            <Link to="/register"> <button type="button" className="register-button">Register</button></Link>
            <button type="button" className="forgot-button">Forgot Password</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
