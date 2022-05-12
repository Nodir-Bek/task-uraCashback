// import * as React from 'react';
import { makeStyles } from '@mui/styles';
import styled from 'styled-components';

export const useStyles = makeStyles((theme) => ({
  addBtn: {
    color: 'white',
    backgroundColor: '#080D85',
    minWidth: '149px',
    fontSize: '14px',
    textTransform: 'capitalize',
    height: 40,
    borderRadius: '6px',
    padding: '11px 16px',
    '&:hover': {
      backgroundColor: '#080D85',
      opacity: 0.8,
    },
    '&.Mui-disabled': {
      cursor: 'not-allowed',
      border: '1px solid #22222260',
      backgroundColor: '#F4F6F8',
    },
  },
  cancelBtn: {
    color: '#222222',
    backgroundColor: '#fff',
    minWidth: 111,
    height: 40,
    borderRadius: '6px',
    border: '1px solid #BFBFBF',
    '&:hover': {
      // backgroundColor: '#999999',
      border: '1px solid #999999',
      opacity: 0.8,
    },
    '&.Mui-disabled': {
      cursor: 'not-allowed',
      backgroundColor: '#F4F6F8',
      border: '1px solid #22222260',
    },
  },
  saveBtn: {
    color: 'white',
    backgroundColor: '#080D85',
    minWidth: 111,
    height: 40,
    borderRadius: '6px',
    '&:hover': {
      backgroundColor: '#080D85',
      opacity: 0.8,
    },
    '&.Mui-disabled': {
      cursor: 'not-allowed',
      backgroundColor: '#F4F6F8',
      border: '1px solid #22222260',
    },
  },
}));

export const CustomButton = styled.div`
  background-color: ${({ bg }) => bg || '#fff'};
  color: ${({ color }) => color || '#000'};
  display: 'flex';
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  padding: 10px 16px;
  box-sizing: border-box;
  border-radius: 6px;
  border: 1px solid ${({ color }) => color || '#000000'};
  display: inline-block;
  margin: 5px;
  cursor: pointer;
  &:hover {
    background-color: ${({ bg }) => bg || '#fff'};
    color: ${({ color }) => color || '#000'};
    opacity: 0.8;
  }
  &:active {
    boxshadow: 'none';
    backgroundcolor: '#E1743650';
    bordercolor: '#080D85';
  }
  &:focus {
    boxshadow: '0 0 0 0.2rem rgba(225, 116, 54, 0.5)';
  }
`;
