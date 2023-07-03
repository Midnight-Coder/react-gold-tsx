import BrandingBorder from 'components/Layouts/BrandingBorder';
import Login from 'pages/Authentication/Login';
import Logout from 'pages/Authentication/Logout';
import LandingPad from 'pages/Authentication/components/LandingPad';
import { Route, Routes } from 'react-router-dom';


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
