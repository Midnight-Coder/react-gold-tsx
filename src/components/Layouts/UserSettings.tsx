import { useAuth0 } from '@auth0/auth0-react';
import { Button } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Tooltip from '@mui/material/Tooltip';
import Logout from 'pages/Authentication/Logout';
import React from 'react';
import { Link } from 'react-router-dom';
import { connections } from 'utils/spaUrls';


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
          <Logout />
          <MenuItem><Button color='primary' component={Link} to={connections.list}>Connnections</Button></MenuItem>
        </Menu>
      </>
    </Tooltip>
  );
}
