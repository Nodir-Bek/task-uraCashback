import React from 'react';
import UserCell from './CellUser';
import StatusCell from './CellStatus';
import PaymentStatusCell from './CellPayment';

export const headerMaker = (data) =>
  // eslint-disable-next-line implicit-arrow-linebreak
  data
    .filter(({ show }) => show)
    .map(({ type, ...rest }) => {
      if (type === 'user') {
        // eslint-disable-next-line react/react-in-jsx-scope
        return {
          ...rest,
          // eslint-disable-next-line react/jsx-props-no-spreading
          Cell: ({ cell: { value } }) => <UserCell {...value} />,
        };
      }
      if (type === 'status') {
        // eslint-disable-next-line react/react-in-jsx-scope
        return {
          ...rest,
          // eslint-disable-next-line react/jsx-props-no-spreading
          Cell: ({ cell: { value } }) => <StatusCell value={value} />,
        };
      }
      if (type === 'payment') {
        // eslint-disable-next-line react/react-in-jsx-scope
        return {
          ...rest,
          // eslint-disable-next-line react/jsx-props-no-spreading
          Cell: ({ cell: { value } }) => <PaymentStatusCell {...value} />,
        };
      }

      return rest;
    });
