import { SvgIconComponent } from '@mui/icons-material';


type NavItemModel = {
  name: string;
  Icon: SvgIconComponent;
  spaUrl: string;
}

export type NavTreeModel = NavItemModel[];
