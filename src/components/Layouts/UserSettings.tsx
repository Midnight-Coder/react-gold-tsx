import { useAuth0 } from '@auth0/auth0-react';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import ListItemIcon from '@mui/material/ListItemIcon';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Tooltip from '@mui/material/Tooltip';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { UserMenuTree } from 'utils/NavTree';


export default function UserSettings() {
  const { user } = useAuth0();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Tooltip title='Open settings'>
      <>
        <IconButton sx={{ p: 0 }} onClick={handleClick}>
          <Avatar
            alt={user?.name}
            imgProps={{ referrerPolicy: 'no-referrer' }}
            src={user?.picture}
          />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          onClick={handleClose}
          sx={{
            textTransform: 'none',
          }}
        >
          {UserMenuTree.map((item) => {
            const { Icon } = item;
            return (
              <MenuItem key={item.name}>
                <Link color='inherit' component={RouterLink} to={item.spaUrl} underline='none'>
                  <ListItemIcon><Icon fontSize='small' /></ListItemIcon>
                  {item.name}
                </Link>
              </MenuItem>
            );
          })}
        </Menu>
      </>
    </Tooltip>
  );
}
