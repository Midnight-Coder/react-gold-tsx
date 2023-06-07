import Anchor from '@mui/icons-material/Anchor';
import { NavTreeModel } from 'types/NavTreeModel';
import * as spaUrl from 'utils/spaUrls';


const NavTree: NavTreeModel = [
  {
    name: 'Landing Page',
    Icon: Anchor,
    spaUrl: spaUrl.homepage,
  },
];

export default NavTree;
