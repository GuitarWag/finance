import React, { useState, useCallback, ReactNode } from 'react';
import { noop } from 'lodash';
import {
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Table,
  Paper,
  Button,
  Typography,
  ClickAwayListener,
  Divider,
  makeStyles,
  createStyles,
} from '@material-ui/core';
import styled, { StyledComponent } from 'styled-components';
import {
  MdEdit,
  MdDelete,
  MdArrowBack,
  MdArrowForward,
  MdCheck,
} from 'react-icons/md';
import { Invoice } from 'services/types';
import uuid from 'uuid';
import { usePagination } from 'hooks';
import { FlexRow, InputField, TextEllipsis } from 'ui-blocks';
import { Formik } from 'formik';
import { EDIT_INVOICE_VALIDATION_SCHEMA, FIELDPATHS } from 'validation';
import SubmitButton from 'components/submit-button';
import {
  useDeleteInvoice,
  useEditInvoice,
  usePayInvoice,
} from 'store/ducks/invoices/hooks';
import { useI18N } from 'i18n/context';
import { SuccessButton } from 'components/error-success-buttons';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      maxWidth: 120,
    },
  }),
);

export const StyledPaper = styled(Paper)`
  height: fit-content;
`;

const PaidText: StyledComponent<
  typeof Typography,
  HTMLParagraphElement
> = styled(Typography)`
  text-decoration: line-through;
  opacity: 0.5;
  margin-right: 2px;
  align-content: baseline;
`;
const PaidIcon: StyledComponent<typeof MdCheck, HTMLOrSVGElement> = styled(
  MdCheck,
)`
  fill: green;
`;
const Header = styled(FlexRow)`
  padding: 5px;
  box-sizing: border-box;
`;

const INPUTS = 'inputs';
const OUTPUTS = 'outputs';

interface Props {
  data: [Invoice] | any[];
  total: number;
  type?: 'inputs' | 'outputs';
  headerLabel: string | ReactNode;
  toggleModal?: (type: 'inputs' | 'outputs') => void;
}

const MAX = 20;
const InvoicesTable = ({
  data,
  total,
  type = INPUTS,
  headerLabel,
  toggleModal = noop,
}: Props) => {
  const [onEditIndex, setOnEditIndex] = useState<number>(-1);
  const I18N = useI18N();
  const editInvoice = useEditInvoice();
  const deleteInvoice = useDeleteInvoice();
  const payInvoice = usePayInvoice();
  const cellClasses = useStyles();
  const onClickAway = useCallback(() => {
    setOnEditIndex(-1);
  }, []);

  const onClick = useCallback(() => {
    toggleModal(type);
  }, [type, toggleModal]);

  const onClickDelete = useCallback(
    (invoice: Invoice) => {
      deleteInvoice(invoice);
    },
    [deleteInvoice],
  );
  const onClickPay = useCallback(
    (invoice: Invoice) => {
      payInvoice(invoice);
    },
    [payInvoice],
  );
  const handleSubmit = useCallback(
    (
      values: {
        value: number;
      },
      invoice: Invoice,
    ) => {
      const { value } = values;
      editInvoice(invoice, value);
      setOnEditIndex(-1);
    },
    [editInvoice],
  );
  const {
    page,
    paginationData,
    paginationIndex,
    onArrowBackward,
    onArrowForward,
  } = usePagination(data, MAX);
  return (
    <StyledPaper>
      <Header>
        <Typography variant="h5">{headerLabel}</Typography>
        <Button
          onClick={onClick}
          size="small"
          color="primary"
          variant="outlined"
        >
          {
            {
              [INPUTS]: I18N.ADD_NEW_REVENUE.message,
              [OUTPUTS]: I18N.ADD_NEW_EXPENSE.message,
            }[type]
          }
        </Button>
      </Header>
      <Divider />
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell align="left">{I18N.TITLE.message}</TableCell>
            <TableCell align="left">{I18N.VALUE.message}</TableCell>
            {type === OUTPUTS && (
              <TableCell align="center">{I18N.PAID.message}</TableCell>
            )}
            <TableCell align="center">{I18N.EDIT.message}</TableCell>
            <TableCell align="center">{I18N.DELETE.message}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {paginationData &&
            paginationData.map((item, i) => (
              <Formik
                key={uuid.v4()}
                initialValues={{
                  value: item.value,
                }}
                onSubmit={values => handleSubmit(values, item)}
                validationSchema={EDIT_INVOICE_VALIDATION_SCHEMA}
              >
                <TableRow hover>
                  <TableCell align="left">
                    <TextEllipsis width="150px">{item.title}</TextEllipsis>
                  </TableCell>
                  {onEditIndex !== i ? (
                    <TableCell align="left">
                      {item.paid ? (
                        <FlexRow>
                          <PaidText variant="caption">
                            {I18N.MONETARY_SIGN.message} {item.paid}
                          </PaidText>
                          <Typography>
                            {I18N.MONETARY_SIGN.message} 0
                          </Typography>
                        </FlexRow>
                      ) : (
                        <Typography>
                          {I18N.MONETARY_SIGN.message} {item.value}
                        </Typography>
                      )}
                    </TableCell>
                  ) : (
                    <ClickAwayListener onClickAway={onClickAway}>
                      <TableCell classes={cellClasses}>
                        <InputField
                          fieldPath={FIELDPATHS.VALUE}
                          margin="dense"
                          type="number"
                          label={I18N.NEW_VALUE.message}
                          autoFocus
                        />
                      </TableCell>
                    </ClickAwayListener>
                  )}
                  {type === OUTPUTS && (
                    <TableCell align="center">
                      <SuccessButton
                        disabled={item.paid}
                        onClick={() => onClickPay(item)}
                        variant={!item.paid ? 'outlined' : undefined}
                      >
                        {item.paid ? <PaidIcon /> : I18N.PAY.message}
                      </SuccessButton>
                    </TableCell>
                  )}
                  <TableCell align="center">
                    {onEditIndex === i ? (
                      <SubmitButton>
                        <MdCheck />
                      </SubmitButton>
                    ) : (
                      <Button onClick={() => setOnEditIndex(i)}>
                        <MdEdit />
                      </Button>
                    )}
                  </TableCell>
                  <TableCell align="center">
                    <Button onClick={() => onClickDelete(item)}>
                      <MdDelete />
                    </Button>
                  </TableCell>
                </TableRow>
              </Formik>
            ))}
          <TableRow key={uuid.v4()} hover>
            <TableCell align="left" size="medium">
              <Typography>{I18N.TOTAL.message}</Typography>
            </TableCell>
            <TableCell>
              <Typography color={type === INPUTS ? 'primary' : 'error'}>
                {I18N.MONETARY_SIGN.message}
                {total}
              </Typography>
            </TableCell>
            {!(data.length < MAX + 1) ? (
              <>
                <TableCell align="left">
                  <Button
                    onClick={onArrowBackward}
                    disabled={paginationIndex[0] === 0}
                  >
                    <MdArrowBack />
                  </Button>
                </TableCell>
                <TableCell align="center">{`
                  ${page} /
                  ${Math.ceil(data.length / MAX)}
                `}</TableCell>
                <TableCell align="right">
                  <Button
                    onClick={onArrowForward}
                    disabled={paginationData.length < MAX}
                  >
                    <MdArrowForward />
                  </Button>
                </TableCell>
              </>
            ) : (
              <>
                <TableCell align="left" />
                <TableCell align="right" />
              </>
            )}
          </TableRow>
        </TableBody>
      </Table>
    </StyledPaper>
  );
};
export default InvoicesTable;
