import PrivateRoute from 'components/Common/PrivateRoute';
import Borders from 'components/Layouts/Borders';
import { trackPageView } from 'instrumentation/analytics';
import AuthRouter from 'pages/Authentication/Router';
import ConnectionRouter from 'pages/Connections/Router';
import PageNotFound from 'pages/Exceptions/PageNotFound';
import HomePage from 'pages/HomePage/HomePage';
import React from 'react';
import {
  Navigate, Route, Routes, useLocation,
} from 'react-router-dom';
import * as spaUrls from 'utils/spaUrls';


export default function Router() {
  const location = useLocation();

  React.useEffect(() => { trackPageView(); }, [location]);

  return (
    <Borders>
      <Routes>
        <Route path='/auth/*' element={<AuthRouter />} />
        <Route path='/connections/*' element={<ConnectionRouter />} />
        <Route path='/' element={<Navigate to={spaUrls.homepage} replace />} />
        <Route
          path={spaUrls.homepage}
          element={<PrivateRoute outlet={<HomePage />} />}
        />
        <Route path='/404' element={<PageNotFound />} />
        <Route path='*' element={<Navigate to='/404' replace />} />
      </Routes>
    </Borders>
  );
}
