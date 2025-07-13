import { forwardRef } from "react";
import type { InputHTMLAttributes } from "react";

type InputLilaProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  error?: string;
};

const InputLila = forwardRef<HTMLInputElement, InputLilaProps>(
  ({ label, error, ...rest }, ref) => {
    return (
      <div>
        <label className="block text-white mb-2">{label}</label>
        <input
          className={`bg-[#8778BA] h-12 w-80 ps-4 rounded-xl ${
            !error && "mb-7"
          }`}
          ref={ref}
          {...rest}
        />
        {error && (
          <div className=" mb-7">
            <span className="text-red-500 text-sm">{error}</span>
          </div>
        )}
      </div>
    );
  }
);

InputLila.displayName = "InputLila";

export default InputLila;
