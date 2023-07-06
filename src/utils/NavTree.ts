import { SvgIconComponent } from '@mui/icons-material';
import Anchor from '@mui/icons-material/Anchor';
import LogoutIcon from '@mui/icons-material/Logout';
import SettingsInputComponent from '@mui/icons-material/SettingsInputComponent';
import * as spaUrl from 'utils/spaUrls';


type NavItemModel = {
  name: string;
  Icon: SvgIconComponent;
  spaUrl: string;
}

type NavTreeModel = NavItemModel[];

export const allItems = {
  connectionsList: {
    name: 'Connections',
    Icon: SettingsInputComponent,
    spaUrl: spaUrl.connections.list,
  },
  landingPage: {
    name: 'Landing Page',
    Icon: Anchor,
    spaUrl: spaUrl.homepage,
  },
  logout: {
    name: 'Logout',
    Icon: LogoutIcon,
    spaUrl: spaUrl.auth.logout,
  },
};

export const NavTree: NavTreeModel = [
  allItems.landingPage,
];

export const UserMenuTree: NavTreeModel = [
  allItems.connectionsList,
  allItems.logout,
];

