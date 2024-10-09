// eslint-disable-next-line react/prop-types
const Input = ({ changeHolder, value, enterhandler }) => {
  return (
    <>
      <input
        type="text"
        onChange={(e) => changeHolder(e.target.value)}
        value={value}
        onKeyUp={(e) => {
          if (e.key === "Enter") {
            enterhandler();
          }
        }}
      />
    </>
  );
};
export default Input;
