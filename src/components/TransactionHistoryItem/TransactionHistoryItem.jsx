import PropTypes from 'prop-types';
import { TableRow, TableData } from './TransactionHistoryItem.styled';

export const TransactionHistoryItem = ({ id, type, amount, currency }) => {
  return (
    <TableRow>
      <TableData>{type}</TableData>
      <TableData>{amount}</TableData>
      <TableData>{currency}</TableData>
    </TableRow>
  );
};

TransactionHistoryItem.prototype = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
