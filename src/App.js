import React, { useEffect, useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Register from './component/SignUP/Register';
import Login from './component/Login/Login';
import Logout from './component/Logout/Logout';
import NavBar from './component/Navigation/NavBar';
import Home from './component/Home/Home';
import ResetPassword from './component/ResetPassword/ResetPassword';
import Profile from '../src/component/Profile/Profile'
import { auth } from './component/FireBase/FireBase';
import ViewProduct from './component/ViewProduct/ViewProduct';
import { CartProvider } from './component/context/CartContext';
import Cart from './component/Cart/Cart';
import Search from './component/Search/Search';

const App = () => {
  const [user, setUser] = useState(null);
  const [justRegistered, setJustRegistered] = useState(false);
  // useEffect(() => {
  //   const unsubscribe = auth.onAuthStateChanged((user) => {
  //     setUser(user);
  //   });
  //   return () => unsubscribe();
  // }, []);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
      if (justRegistered) {
        setJustRegistered(false);
      }
    });
    return () => unsubscribe();
  }, [justRegistered]);

  return (
    <div>
      <NavBar user={user} />
      <CartProvider>
        <Routes>
          <Route path="/" element={user ? <Home /> : <Navigate to="/login" />} />
          <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
          {/* <Route path="/register" element={user ? <Login /> : <Register />} /> */}
          <Route path="/register" element={user ? <Navigate to="/" /> : <Register setJustRegistered={setJustRegistered} />} />
          <Route path="/resetpass" element={<ResetPassword />} />
          <Route path="/profile" element={user ? <Profile /> : <Navigate to="/login" />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/viewproduct/:id" element={<ViewProduct />} />
          <Route path='/cart' element={<Cart />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </CartProvider>
    </div>
  );
};

export default App;
