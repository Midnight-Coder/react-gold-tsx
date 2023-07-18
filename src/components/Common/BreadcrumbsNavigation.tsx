import Breadcrumbs from '@mui/material/Breadcrumbs';
import Chip from '@mui/material/Chip';
import { Link } from 'react-router-dom';


export type TBreadcrumb = {
    icon: React.ReactElement;
    label: string;
    href: string;
};

type Props = {
  items: Array<TBreadcrumb>;
}

export default function BreadcrumbsNavigation({ items } : Props) {
  return (
    <Breadcrumbs separator={null}>
      {items.map((item) => (
        <Chip
          clickable
          component={Link}
          icon={item.icon}
          key={item.label}
          label={item.label}
          to={item.href}
        />
      ))}
    </Breadcrumbs>
  );
}
