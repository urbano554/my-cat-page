import React from 'react';
import {Link} from 'react-router-dom';
import {Tabs, TabList, Tab, useColorMode} from '@chakra-ui/react';

import {routes} from '../Pages/Routes';
import {MoonIcon, SunIcon} from '@chakra-ui/icons';
import {DARK_MODE_THEME} from '../Common/constants';

export const SideBar: any = ({showSidebar = true}) => {
  const {colorMode, toggleColorMode} = useColorMode();

  if (!showSidebar) {
    return null;
  }

  return (
    <Tabs align='center' >
      <TabList>
        <Link to={routes.home}>
          <Tab fontSize={12}>Inicio</Tab>
        </Link>
        <Link to={routes.favorites}>
          <Tab fontSize={12}>Favoritos</Tab>
        </Link>
        <Link to={routes.about}>
          <Tab fontSize={12} display='flex'>
            Sobre Nosotros
          </Tab>
        </Link>
        <Tab fontSize={12} onClick={toggleColorMode}>
          {colorMode === DARK_MODE_THEME.light ? <SunIcon /> : <MoonIcon />}
        </Tab>
      </TabList>
    </Tabs>
  );
};
