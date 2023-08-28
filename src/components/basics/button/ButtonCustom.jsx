import "./buttonCustom.scss";

export const ButtonCustom = ({ text = "" }) => {
  return (
    <>
      <button className="button">{text}</button>
    </>
  );
};
