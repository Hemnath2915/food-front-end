import React from 'react';

// import CircularImages from './circular_img';
// import ImageColumn from './ImageColumn';
import Slideshow from './Components/Components/imagesliders';
import ImageColumn from './Components/Components/ImageColumn';
import NavBar from './Components/Components/NavBar';
import Login from './Components/Components/login';
import Register from './Components/Components/register';
import { Routes,BrowserRouter as Router,Route } from 'react-router-dom';
import Home from './Components/Components/home';
import About from './Components/Components/about';
import RestaurantList from '../restaurants';
import MenuList from './Components/Components/menu';
import ViewCart from './Components/Components/cart';
import PaymentPage from './Components/Components/payment';

const App = () => {
  return (
    <Router>
     
      <Routes>
        {/* <Route path="/" element={<Home/>}/> */}
       <Route path="/" element={<Login/>}/>
       <Route path='/register' element={<Register/>}/>
       <Route path='/home' element={<Home/>}/>
       <Route path='/res' element={<RestaurantList/>}/>
       <Route path='/menu' element={<MenuList/>}/>
       <Route path='/menu/cart' element={<ViewCart/>}/>
       <Route path='/payment' element={<PaymentPage/>}/>
       
      {/* Rest of your application */}
      </Routes>
      </Router>
  
    
  );
};

export default App;
