import { SvgIconProps } from '@mui/material/SvgIcon';


type NavItemModel = {
  name: string;
  icon: (props: SvgIconProps) => JSX.Element;
  spaUrl: string;
}

export type NavTreeModel = NavItemModel[];
