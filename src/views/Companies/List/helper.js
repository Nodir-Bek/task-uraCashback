// import VisibilityIcon from '@mui/icons-material/Visibility';
import React from 'react';
import EditIcon from '@mui/icons-material/Edit';
import BlockIcon from '@mui/icons-material/Block';
import VisibilityIcon from '@mui/icons-material/Visibility';

export const a11yProps = (index) => ({
  id: `scrollable-auto-tab-${index}`,
  'aria-controls': `scrollable-auto-tabpanel-${index}`,
});

export const toolTips = [
  {
    name: 'View',
    icon: <VisibilityIcon color="action" fontSize="small" />,
    onClick: (id, { history }) => {
      history(`/app/companies/products/${id}`, { state: id });
    },
  },
  // {
  //   name: 'Disable',
  //   icon: <BlockIcon color="action" fontSize="small"/>,
  //   onClick: (id, { dispatch, showBlured }) => {
  //     showBlured({
  //       title: 'Confirm the status change process',
  //       maxWidth: '600px',
  //       body: () => <ChangeStatusModal/>
  //     });
  //   }
  //   // onClick: (id, { dispatch, status }) => {
  //   //   if (status === 'true') {
  //   //     service
  //   //       .disable(id)
  //   //       .then((resp) => dispatch(fetchData()))
  //   //       .catch((err) => console.log(err));
  //   //   }
  //   // },
  // }
];
