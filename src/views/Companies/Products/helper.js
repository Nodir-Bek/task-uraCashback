// import VisibilityIcon from '@mui/icons-material/Visibility';
import React from 'react';
import EditIcon from '@mui/icons-material/Edit';
import BlockIcon from '@mui/icons-material/Block';

export const a11yProps = (index) => ({
  id: `scrollable-auto-tab-${index}`,
  'aria-controls': `scrollable-auto-tabpanel-${index}`,
});

export const toolTips = [
  {
    name: 'Edit',
    icon: <EditIcon color="action" fontSize="small" />,
    onClick: (id, { history }) => {
      // history('/app/manage/create', { state: id });
      console.log('product id', id);
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
