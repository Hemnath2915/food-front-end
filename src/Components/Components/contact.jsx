import React from 'react';
import './Contact.css'; 

const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="contact-container">
       
        <div className="png" style={{width:'650px',height:'650px',display:'flex',backgroundSize:'contain',backgroundRepeat:'no-repeat' ,backgroundImage:'url("https://res.cloudinary.com/dd2p99itq/image/upload/v1689271842/ordering_food_online_preview-removebg-preview_fjm5ga.png")'}}>

        </div>

      <div className="contact-card">
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" required></textarea>
          </div>
          <button type="submit" className="submit-button">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
