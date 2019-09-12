import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import { Toolbar, IconButton } from '@material-ui/core';
import Avatar from 'components/avatar';
import NewMonthButton from 'components/new-month-button';
import { MdMenu } from 'react-icons/md';
import styled from 'styled-components';
import LanguageSelector from '../language-selector';

const Container = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
`;

const NavBar = () => (
  <AppBar>
    <Container>
      <IconButton edge="start" color="inherit" aria-label="menu">
        <MdMenu />
      </IconButton>
      <NewMonthButton />
      <LanguageSelector />
      <Avatar />
    </Container>
  </AppBar>
);

export default NavBar;
