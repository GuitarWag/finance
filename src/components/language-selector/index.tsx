import React, { useMemo } from 'react';
import Button from '@material-ui/core/Button';
import {
  Avatar,
  Grow,
  Paper,
  Popper,
  MenuItem,
  MenuList,
  ClickAwayListener,
  makeStyles,
} from '@material-ui/core';
import { useIsVisible } from 'hooks';
import { ptBR, enUS, esES } from 'theme/assets';
import { useLanguage } from '../../store/ducks/language/hooks';
import {
  ptBR as PTBR,
  enUS as ENUS,
  esES as ESES,
} from '../../store/ducks/language';

const useStyles = makeStyles({
  root: {
    margin: 0,
    height: 25,
    width: 25,
  },
});
const style = { transformOrigin: 'center bottom' };

const LanguageSelector = () => {
  const { isVisible, toggle, anchorRef, onClickAway } = useIsVisible();
  const { setLanguage, currentFlag } = useLanguage();
  const classes = useStyles();
  const avaliableLanguages = useMemo(
    () => [
      {
        flag: ptBR,
        onClick: () => {
          setLanguage(PTBR);
          toggle();
        },
      },
      {
        flag: esES,
        onClick: () => {
          setLanguage(ESES);
          toggle();
        },
      },
      {
        flag: enUS,
        onClick: () => {
          setLanguage(ENUS);
          toggle();
        },
      },
    ],
    [setLanguage, toggle],
  );
  return (
    <>
      <Button
        ref={anchorRef}
        aria-controls="menu-list-grow"
        aria-haspopup="true"
        onClick={toggle}
      >
        <Avatar src={currentFlag} classes={classes} />
      </Button>
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
                  {avaliableLanguages.map(language => (
                    <MenuItem onClick={language.onClick} key={language.flag}>
                      <Avatar src={language.flag} classes={classes} />
                    </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </>
  );
};

export default LanguageSelector;
