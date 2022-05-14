import BrandingBorder from 'components/Layouts/BrandingBorder';
import Login from 'pages/Authentication/Login';
import LandingPad from 'pages/Authentication/components/LandingPad';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Logout from 'pages/Authentication/Logout';


export default function Router() {
  return (
    <BrandingBorder>
      <Routes>
        <Route path='login' element={<Login />} />
        <Route path='landing-pad' element={<LandingPad />} />
        <Route path='logout' element={<Logout />} />
      </Routes>
    </BrandingBorder>
  );
}
