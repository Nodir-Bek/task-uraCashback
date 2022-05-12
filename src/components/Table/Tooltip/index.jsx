import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MoreHoriz from '@mui/icons-material/MoreHoriz';
import { useDispatch } from 'react-redux';
import { ClickOutside } from '../../../hooks/click-outside';
import { Button, OptionButton, ToolTip } from './style';

export default ({ index, indexT, setIndexT, data = [], itemId, status }) => {
  const [open, setOpen] = useState(false);
  const refClick = useRef(null);
  const dispatch = useDispatch();
  const history = useNavigate();
  return (
    <>
      <Button
        ref={refClick}
        onClick={() => {
          setIndexT(index);
          setOpen((prevState) => !prevState);
        }}
      >
        <MoreHoriz color="action" />
      </Button>
      <ClickOutside
        outClickRef={refClick}
        outsideClicked={() => {
          setOpen(false);
        }}
      >
        <ToolTip index={index} indexT={indexT} open={open}>
          {data.map(({ name, icon, onClick: ItemClick }, positionIndex) => (
            <OptionButton
              onClick={() =>
                ItemClick(itemId, {
                  history,
                  status,
                  dispatch,
                })
              }
              key={`${positionIndex + 1}`}
            >
              {icon}
              <span>{name}</span>
            </OptionButton>
          ))}
        </ToolTip>
      </ClickOutside>
    </>
  );
};
