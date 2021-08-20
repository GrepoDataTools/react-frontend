import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../../redux/user/user.selector';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import colors from '../../../utils/colors';
import { Avatar, Button, Divider, ListItemIcon, Menu, MenuItem, Tooltip } from '@material-ui/core';
import PersonAdd from '@material-ui/icons/PersonAdd';
import Settings from '@material-ui/icons/Settings';
import { logOut } from '../../../redux/user/user.reducer';
import Logout from '@material-ui/icons/Logout';
import { useHistory } from 'react-router-dom';

const UserBox: React.FC = () => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLAnchorElement | null>(null);

  const history = useHistory();
  const dispatch = useDispatch();
  const open = Boolean(anchorEl);
  const { username } = useSelector(selectUser);

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <FontAwesomeIcon icon={faBell} color={colors.snowDrop} style={{ marginRight: 20, fontSize: '1.5rem' }} />
      <Avatar style={{ marginRight: 10 }} sx={{ width: 32, height: 32 }}>
        {username &&
          username
            .match(/(^\S\S{L}+?|\bL\S)/g)
            ?.join('')
            .match(/(^\S|\SL+$)?/g)
            ?.join('')
            .toUpperCase()}
      </Avatar>
      <Tooltip title={'Account settings'}>
        <Button onClick={handleClick} variant={'text'}>
          {username}
        </Button>
      </Tooltip>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={() => history.push('/profile')}>
          <Avatar /> Profile
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          Add another account
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem onClick={() => dispatch(logOut())}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </>
  );
};

export default UserBox;
