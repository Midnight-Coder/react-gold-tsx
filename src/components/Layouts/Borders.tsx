import { useAuth0 } from '@auth0/auth0-react';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import Header from 'components/Layouts/Header';
import SideNav from 'components/Layouts/SideNav';
import React from 'react';


interface ISideNavCtx {
  drawerWidth: string,
  isFullNav: boolean,
  setIsFullNav: React.Dispatch<React.SetStateAction<boolean>>,
}

export const SideNavCtx = React.createContext<Partial<ISideNavCtx>>({});

export default function Borders({ children }: { children: React.ReactNode }) {
  const theme = useTheme();
  const { isAuthenticated, isLoading } = useAuth0();
  const [isFullNav, setIsFullNav] = React.useState<boolean>(false);
  const drawerWidth = isFullNav ? theme.custom.sidebarWidth : theme.custom.smSidebarWidth;
  const sideNavCtxValue = React.useMemo(
    () => ({ drawerWidth, isFullNav, setIsFullNav }),
    [drawerWidth, isFullNav, setIsFullNav],
  );
  if (isLoading) {
    return null;
  }
  else if (!isAuthenticated) {
    return (<Box>{children}</Box>);
  }
  return (
    <SideNavCtx.Provider value={sideNavCtxValue}>
      <Header />
      <Box component='nav' mx='10px' mt={`calc(${theme.custom.appBarHeight} + 15px)`}>
        <SideNav />
        <Box component='main' ml={`calc(${drawerWidth} + 15px)`}>{children}</Box>
      </Box>
    </SideNavCtx.Provider>
  );
}
