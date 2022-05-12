// import VisibilityIcon from '@mui/icons-material/Visibility';
import React from 'react';
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
];
