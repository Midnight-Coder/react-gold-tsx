import { SvgIconComponent } from '@mui/icons-material';
import Anchor from '@mui/icons-material/Anchor';
import LogoutIcon from '@mui/icons-material/Logout';
import SettingsInputComponent from '@mui/icons-material/SettingsInputComponent';
import * as spaUrl from 'utils/spaUrls';


type TNavItemModel = {
  name: string;
  Icon: SvgIconComponent;
  spaUrl: string;
  createLink?: string;
}

type TNavTreeModel = TNavItemModel[];

type TAllItems = {
  [key: string]: TNavItemModel;
};

export const allItems: TAllItems = {
  connectionsList: {
    name: 'Connections',
    Icon: SettingsInputComponent,
    spaUrl: spaUrl.connections.list,
    createLink: '/do-it-yourself',
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

export const NavTree: TNavTreeModel = [
  allItems.landingPage,
];

export const UserMenuTree: TNavTreeModel = [
  allItems.connectionsList,
  allItems.logout,
];


const allTitles = Object.values(allItems).map((item) => item.name);

export type AllPageTitles = typeof allTitles[number]


