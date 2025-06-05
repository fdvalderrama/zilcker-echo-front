import { type FC } from "react";

type InputLilaProps = {
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const InputLila: FC<InputLilaProps> = ({ placeholder, value, onChange }) => {
  return (
    <input
      className="bg-[#8778BA] h-12 w-80 ps-4 rounded-xl mb-12"
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default InputLila;
