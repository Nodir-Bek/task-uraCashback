import React from 'react';
import Button from '@mui/material/Button';
import { Tag } from './style';

export default ({ handleClearFilters, selectedFilter }) => {
  return (
    <Button
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      color="error"
      disabled={selectedFilter === 0}
      onClick={handleClearFilters}
    >
      clear Filters {selectedFilter !== 0 ? <Tag>{selectedFilter}</Tag> : null}
    </Button>
  );
};
