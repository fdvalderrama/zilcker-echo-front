import { type FC } from "react";

type InputLilaProps = {
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const InputLila: FC<InputLilaProps> = ({
  type,
  placeholder,
  value,
  onChange,
}) => {
  return (
    <div>
      <label className="block text-white mb-2">{placeholder}</label>
      <input
        className="bg-[#8778BA] h-12 w-80 ps-4 rounded-xl mb-7"
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default InputLila;
