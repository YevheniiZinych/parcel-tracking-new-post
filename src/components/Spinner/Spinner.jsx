import { ThreeCircles } from 'react-loader-spinner';

export const Spinner = () => {
  return (
    <ThreeCircles
      height="40"
      width="40"
      radius="9"
      color="red"
      ariaLabel="three-dots-loading"
      wrapperStyle={{
        marginTop: '20px',
        marginLeft: '20px',
      }}
      wrapperClassName=""
      visible={true}
    />
  );
};
