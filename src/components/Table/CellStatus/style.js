import styled from 'styled-components';

const setColorContent = (val) => {
  switch (val) {
    case 1:
      return '#289744';
    case 0:
      return '#8c8c8c';
    // case 'canceled':
    //   return 'red';
    // case 'completed':
    //   return '#07C180';
    default:
      return '#000000';
  }
};
const setColorCircle = (val) => {
  switch (val) {
    case 1:
      return '#9ed0ab';
    case 0:
      return '#cbcbcb';
    case 'canceled':
      return 'red';
    case 'completed':
      return '#07C180';
    default:
      return '#FAC032';
  }
};
const setColorCircleContent = (val) => {
  switch (val) {
    case 1:
      return '#289744';
    case 0:
      return '#8c8c8c';
    case 'canceled':
      return 'red';
    case 'completed':
      return '#07C180';
    default:
      return '#FAC032';
  }
};

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
`;

export const Content = styled.div`
  margin-left: 16px;
  display: flex;
  color: ${({ active }) => setColorContent(active)};
  flex-direction: column;
`;
export const Circle = styled.div`
  background: ${({ active }) => setColorCircle(active)};
  padding: 3px;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  box-sizing: border-box;
`;
export const CircleContent = styled.div`
  background: ${({ active }) => setColorCircleContent(active)};
  padding: 3px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  box-sizing: border-box;
`;
