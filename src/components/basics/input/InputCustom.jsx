import "./inputCustom.scss";

export const InputCustom = ({
  text = "",
  type = "text",
  value = "",
  placeholder = "",
}) => {
  return (
    <div>
      <p className=" text-customGray text-sm text-left">{text}</p>
      <input
        className="input"
        type={type}
        defaultValue={value}
        placeholder={placeholder}
      />
    </div>
  );
};
