import Wallet from './Wallet';
import Login from './Login'
import React from 'react'
import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Navbar from './Navbar';
import KYCRegistration from './KYCRegistration';
import Dashboard from './Dashboard';
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login/>}/>
        <Route exact path="/wallet" element={<><Navbar/><Wallet/></>}/>
        <Route exact path="/kyc" element={<><Navbar/><KYCRegistration/></>}/>
        <Route exact path="/dashboard" element={<Dashboard/>}/>
      </Routes>
      </BrowserRouter>
  )
}

export default App