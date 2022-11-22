import React from 'react';
import {BrowserRouter, Routes as NativeRoutes, Route} from 'react-router-dom';
import DetailCat from '../Components/DetailCat';
import {SideBar} from '../Components/SideBar';
import {AboutUs} from './AboutUs';
import {Favorites} from './Favorites';

import {Home} from './Home/index';
import {NotFound} from './NotFound';

export const routes = {
  home: '/',
  favorites: '/favorites',
  about: '/about-us',
  detail: '/detail/:detailId',
};

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <SideBar />
      <NativeRoutes>
        <Route path={routes.home} element={<Home />} />
        <Route path={routes.favorites} element={<Favorites />} />
        <Route path={routes.about} element={<AboutUs />} />
        <Route path='*' element={<NotFound />} />
      </NativeRoutes>
    </BrowserRouter>
  );
};

export default Routes;
