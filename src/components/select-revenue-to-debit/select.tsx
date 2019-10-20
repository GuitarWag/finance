// @flow
import React, { ReactNode, useCallback } from 'react';
import { map, get, uniqueId, find } from 'lodash';
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
import { Invoice } from '../../services/types';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
  },
}));

interface Props {
  item: any;
  value: string;
  onChange: (p: Invoice) => void;
}
const RevenuesSelect = ({ item, value, onChange }: Props) => {
  const inputs = useCurrentMonthInputs();
  const I18N = useI18N();
  const classes = useStyles();

  const onChangePay = useCallback((e) => {
    const payWith = find(inputs, (o) => o.identifier === e.target.value);
    onChange(payWith);
  }, [inputs, onChange]);

  return (
    <FormControl variant="outlined" fullWidth>
      <InputLabel htmlFor="outlined-age-simple">
        {I18N.CHOOSE_A_OPTION.message}
      </InputLabel>
      <Select
        value={value}
        onChange={onChangePay}
        inputProps={{
          name: 'payWith',
        }}
      >
        <MenuItem
          value=""
        >
          <Container classes={classes}>
            <Typography>
              {I18N.NONE.message}
            </Typography>
          </Container>
        </MenuItem>
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
