import React from 'react'
import Menu from './components/nav/Menu'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/home'
import PageNotFound from './pages/pageNotFound';
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import PrivateRoute from './components/routes/PrivateRoute';
import UserDashboard from './pages/user/Dashboard';
import AdminDashboard from './pages/admin/adminDashboard'
import AdminRoute from './components/routes/AdminRoute';
import Profile from './pages/user/Profile';
import Order from './pages/user/Order';
import Category from './pages/admin/Category';
import Product from './pages/admin/product';
const App = () => {
  return (
    <div>
     <BrowserRouter>
      <Menu/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path='/dashboard' element={<PrivateRoute/>}>
          <Route path='user' element={<UserDashboard/>} />
          <Route path='user/profile' element={<Profile/>}/>
          <Route path='user/order' element={<Order/>} />
        </Route>

        <Route path='/dashboard' element={<AdminRoute/>}>
          <Route path='admin' element={<AdminDashboard />} />
          <Route path='admin/category' element={<Category/>}/>
          <Route path='admin/product' element={<Product/>}/>
        </Route>

        <Route path='*' element={<PageNotFound/>} replace/>
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App

