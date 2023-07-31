import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './Components/Components/NavBar'
import Register from './Components/Components/register'
import RestaurantList from '../restaurants'
import { BrowserRouter } from 'react-router-dom'
import MenuList from './Components/Components/menu'
import ViewCart from './Components/Components/cart'
import PaymentPage from './Components/Components/payment'
// import App from './App'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <App/>
  
  </React.StrictMode>

  // <BrowserRouter>

  // <MenuList/>
  // </BrowserRouter>
)
