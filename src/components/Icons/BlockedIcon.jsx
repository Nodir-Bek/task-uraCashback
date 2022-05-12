import React from 'react';

const BlockedIcon = ({ active }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.19 0.36L4.19 3.47C3.47 3.79 3 4.51 3 5.3V10C3 15.55 6.84 20.74 12 22C17.16 20.74 21 15.55 21 10V5.3C21 4.51 20.53 3.79 19.81 3.47L12.81 0.36C12.3 0.13 11.7 0.13 11.19 0.36ZM12 10.99H19C18.47 15.11 15.72 18.78 12 19.93V11H5V5.3L12 2.19V10.99Z"
        fill="#969696"
      />
    </svg>
  );
};

export default BlockedIcon;
