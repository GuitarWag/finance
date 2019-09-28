import React, { useCallback } from 'react';
import Button from '@material-ui/core/Button';
import {
  CircularProgress,
  Grow,
  Paper,
  Popper,
  MenuItem,
  MenuList,
  Avatar as AvatarMd,
  ClickAwayListener,
} from '@material-ui/core';
import {
  useLoggedUserInfo,
  useLoggedUserLoading,
} from 'store/ducks/logged-user/hooks';
import { getSrc } from 'utils';
import useLogout from './useLogout';
import { useIsVisible } from 'hooks';
import { useI18N } from 'store/ducks/language/hooks';

const style = { transformOrigin: 'center bottom' };

const Avatar = () => {
  const loggedUserInfo = useLoggedUserInfo();
  const loading = useLoggedUserLoading();
  const logout = useLogout();
  const I18N = useI18N();
  const { isVisible, toggle, anchorRef, onClickAway } = useIsVisible();

  const onClickLogout = useCallback(() => {
    logout();
    setTimeout(toggle, 500);
  }, [logout, toggle]);
  return (
    <>
      {loggedUserInfo && !loading && (
        <Button
          ref={anchorRef}
          aria-controls="menu-list-grow"
          aria-haspopup="true"
          onClick={toggle}
        >
          <AvatarMd src={getSrc(loggedUserInfo.photoURL)} />
        </Button>
      )}
      {loading && <CircularProgress color="secondary" />}
      <Popper
        open={isVisible}
        anchorEl={anchorRef.current}
        transition
        disablePortal
      >
        {({ TransitionProps }) => (
          <Grow {...TransitionProps} style={style}>
            <Paper id="menu-list-grow">
              <ClickAwayListener onClickAway={onClickAway}>
                <MenuList>
                  {/* <MenuItem onClick={handleClose}>Profile</MenuItem>
                  <MenuItem onClick={handleClose}>My account</MenuItem> */}
                  <MenuItem onClick={onClickLogout}>
                    {I18N.LOGOUT.message}
                  </MenuItem>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </>
  );
};

export default Avatar;
