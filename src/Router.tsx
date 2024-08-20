import Borders from 'components/Layouts/Borders';
import PageNotFound from 'pages/Exceptions/PageNotFound';
import HomePage from 'pages/HomePage/HomePage';
import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import * as spaUrls from 'utils/spaUrls';
import HtmlLoader, { allPages } from 'components/HtmlLoader';


export default function Router() {
  return (
    <Borders>
      <Routes>
        <Route path='/' element={<Navigate to={spaUrls.homepage} replace />} />
        <Route path={spaUrls.homepage} element={<HomePage />} />
        {Object.keys(allPages).map((k) => (
          <React.Fragment key={k}>
            <Route path={`/demo/${k}`} element={<HtmlLoader load={k} />} />
          </React.Fragment>
        ))}
        <Route path='/404' element={<PageNotFound />} />
        <Route path='*' element={<Navigate to='/404' replace />} />
      </Routes>
    </Borders>
  );
}
