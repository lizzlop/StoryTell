import "./inputCustom.scss";

export const InputCustom = ({
  text = "",
  type = "text",
  value = "",
  placeholder = "",
  register,
}) => {
  const { ...inputProps } = register;
  return (
    <div>
      <p className=" text-customGray text-sm text-left font-sans">{text}</p>
      <input
        className="input"
        type={type}
        defaultValue={value}
        placeholder={placeholder}
        {...inputProps}
      />
    </div>
  );
};
