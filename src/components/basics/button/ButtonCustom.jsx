import "./buttonCustom.scss";

export const ButtonCustom = ({ text = "", type = "button" }) => {
  return (
    <>
      <button type={type} className="button text-base">
        {text}
      </button>
    </>
  );
};
