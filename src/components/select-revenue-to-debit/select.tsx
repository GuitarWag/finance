// @flow
import React, { ChangeEvent, ReactNode } from 'react';
import { map, get, uniqueId } from 'lodash';
import {
  FormControl,
  InputLabel,
  makeStyles,
  MenuItem,
  Select,
  Typography,
  Container,
} from '@material-ui/core';
import { useI18N } from 'store/ducks/language/hooks';
import { useCurrentMonthInputs } from '../../store/ducks/current-month/hooks';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
  },
}));

interface Props {
  item: any;
  value: string;
  onChange: (e: ChangeEvent<{ name?: string; value: unknown }>) => void;
}
const RevenuesSelect = ({ item, value, onChange }: Props) => {
  const inputs = useCurrentMonthInputs();
  const I18N = useI18N();
  const classes = useStyles();
  return (
    <FormControl variant="outlined" fullWidth>
      <InputLabel htmlFor="outlined-age-simple">
        {I18N.CHOOSE_A_OPTION.message}
      </InputLabel>
      <Select
        value={value}
        onChange={onChange}
        inputProps={{
          name: 'payWith',
        }}
      >
        {map<typeof inputs, ReactNode>(inputs, i => {
          if (Number(get(i, 'value')) > Number(item.value)) {
            return (
              <MenuItem
                value={get(i, 'identifier')}
                key={uniqueId()}
              >
                <Container classes={classes}>
                  <Typography>
                    {get(i, 'title')}
                  </Typography>
                  <Typography>
                    {I18N.UPDATED_VALUE.message}
                  </Typography>
                  <Typography>
                    {I18N.MONETARY_SIGN.message}
                    ${get(i, 'value')}
                  </Typography>
                </Container>
              </MenuItem>
            );
          }
          return null;
        })}
      </Select>
    </FormControl>
  );
};

export default RevenuesSelect;