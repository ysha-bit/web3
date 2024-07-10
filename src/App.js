// import './App.css';

import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Homes from './Pages/Homes';
import Mistake from './Pages/Mistake';
import Dashboard from './Pages/Dashboard';
// import MainLayout from './Layout/MainLayout';
import Login from './Pages/Login';
// import  Navbar from './Component/Navbar';
import Profile from './Pages/Profile';
import Number from './Pages/Number.js';
import LogOut from './Pages/logout.js';
import TopHeader from './Pages/TopHeader.js';
import ManageTraffic from './Pages/ManageTraffic.js';
import ManageLicence from './Pages/ManageLicence.js';
import Punishment from './Pages/Punishment.js';




function App() {
  return (
   
    <BrowserRouter>

    <Routes>
      <Route path='/' element={<Login/>}/>
      


      {/* <Route path='main' element={<MainLayout/>}>  */}



      {/* <Route path='nav' element={<Navbar/>}/> */}
      <Route path='dashbroad' element={<Dashboard/>}/>
      {/* <Route path='home' element={<Homes/>}/> */}
      <Route path='mistakes' element={<Mistake/>}/>
      <Route path='profile' element={<Profile/>}/>
      <Route path='number' element={< Number/>}/>
      <Route path='logout' element={< LogOut/>}/>
      <Route path='topheader' element={< TopHeader/>}/>
      <Route path='manageTraffic' element={< ManageTraffic/>}/>
      <Route path='manageLicence' element={< ManageLicence/>}/>
      <Route path='/editProfile/:id' element={< Profile/>}/>
      <Route path='/editProfile/:id' element={< Profile/>}/>
      <Route path='Punishment' element={< Punishment/>}/>

      
    </Routes>
    </BrowserRouter>
  );
}

export default App;
