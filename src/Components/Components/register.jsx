import React from 'react';
import './Register.css'; 
import { Link } from 'react-router-dom';

const Register = () => {
  const handleRegister = (event) => {
    event.preventDefault();

  };

  return (
    
    <div className="register-container">
        <div className="png" style={{marginBottom:'20em',marginRight:'8%',width:'650px',height:'650px',display:'flex',backgroundSize:'contain',backgroundRepeat:'no-repeat',justifyContent:'space-between',alignItems:'center' ,backgroundImage:'url("https://res.cloudinary.com/dd2p99itq/image/upload/v1689274566/istockphoto-1022348094-170667a-removebg-preview_kt0vcg.png")'}}>

</div>

      <div className="register-card">
        <h2>Register</h2>
        <form onSubmit={handleRegister}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" required />
          </div>
          <div className="form-group">
            <label htmlFor="confirm-password">Confirm Password:</label>
            <input type="password" id="confirm-password" name="confirm-password" required />
          </div>
          <div className="form-group1">
           <Link to="/home"><button type="submit" className="register-button">Register</button></Link>
          </div>
          <h1 className="tin">Already have an account!?</h1>
          <div className="form-group">
            <button type="button" className="login-button">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
