import React from 'react';
import { Routes, Route } from 'react-router-dom';
import routes from './routes';
import NotFound from '../../Pages/NotFound';
import HomePage from '../../Pages/HomePage';
import UseStatePage from '../../Pages/UseStatePage';
import UseEffectPage from '../../Pages/UseEffectPage';
import UseRefPage from '../../Pages/UseRefPage';

export default function AppRoutes() {
  return (
    <>
      <Routes>
        <Route path={routes.home.fullPath} element={<HomePage />} />
        <Route path={routes.useStatePage.fullPath} element={<UseStatePage />} />
        <Route path={routes.useEffectPage.fullPath} element={<UseEffectPage />} />
        <Route path={routes.useRefPage.fullPath} element={<UseRefPage />} />
        <Route path={'*'} element={<NotFound />} />
      </Routes>
    </>
  );
}
