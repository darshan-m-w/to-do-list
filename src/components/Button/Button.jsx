// eslint-disable-next-line react/prop-types
const Button = ({ btnClickhandler, btnLable, disabled, btnclass }) => {
  return (
    <button onClick={btnClickhandler} disabled={disabled} className={btnclass}>
      {btnLable}
    </button>
  );
};
export default Button;
