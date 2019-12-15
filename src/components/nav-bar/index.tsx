import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import { Toolbar, IconButton } from '@material-ui/core';
import Avatar from 'components/avatar';
import NewMonthButton from 'components/new-month-button';
import HideValuesButton from 'components/hide-values-button';
import { MdMenu } from 'react-icons/md';
import styled from 'styled-components';
import LanguageSelector from '../language-selector';
import { useLoggedUserInfo } from 'store/ducks/logged-user/hooks';

const Container = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
`;

const NavBar = () => {
  const user = useLoggedUserInfo();
  return (
    <AppBar>
      <Container>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MdMenu/>
        </IconButton>
        {user && <NewMonthButton/>}
        {user && <HideValuesButton/>}
        <LanguageSelector/>
        <Avatar/>
      </Container>
    </AppBar>
  );
};

export default NavBar;
