import React from 'react';
import './about.css'; 

const About = () => {
  return (
    <div className="about-container">
      <div className="about-image">
        <img src="src\Components\Components\images\R.gif" alt="AI Image" />
      </div>
      <div className="topic">
      <h1>About Us!</h1>
      </div>
      <div className="about-content">
        <p>Welcome to our food ordering portal!</p>
        <p>We are passionate about delivering delicious and fresh food to your doorstep. Our mission is to provide a convenient and enjoyable dining experience for our customers.</p>
        <p>At our portal, you can explore a wide range of cuisines, browse through our menu, and place your order with just a few clicks. We partner with top restaurants and chefs to offer you a diverse selection of mouthwatering dishes.</p>
        <p>Whether you're craving pizza, sushi, burgers, or desserts, we have something to satisfy every taste bud. Our team works tirelessly to ensure that your orders are prepared with the highest quality ingredients and delivered to you promptly.</p>
        <p>We strive to make your food ordering experience seamless and hassle-free. Our user-friendly interface allows you to customize your orders, track the delivery status, and provide feedback on your dining experience.</p>
        <p>Thank you for choosing our food ordering portal. We look forward to serving you and providing you with a delightful culinary journey.</p>
      </div>
    </div>
  );
};

export default About;
