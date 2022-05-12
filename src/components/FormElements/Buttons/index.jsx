import { CustomButton } from './style';

export default (props) => {
  const { children, onClick } = props;
  return (
    <CustomButton {...props} onClick={onClick}>
      {children}
    </CustomButton>
  );
};
