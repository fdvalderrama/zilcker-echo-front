import type {
  RegisterOptions,
  UseFormRegister,
  Path,
  FieldValues,
} from "react-hook-form";

interface InputLilaProps<T extends FieldValues> {
  type: string;
  placeholder: string;
  name: Path<T>;
  register: UseFormRegister<T>;
  validation?: RegisterOptions<T, Path<T>>;
  error?: string;
}

const InputLila = <T extends FieldValues>({
  type,
  placeholder,
  name,
  register,
  validation,
  error,
}: InputLilaProps<T>) => {
  return (
    <div>
      <label className="block text-white mb-2">{placeholder}</label>
      <input
        className={`bg-[#8778BA] h-12 w-80 ps-4 rounded-xl ${!error && "mb-7"}`}
        type={type}
        placeholder={placeholder}
        {...register(name, validation)}
      />
      {error && (
        <div className=" mb-7">
          <span className="text-red-500 text-sm">{error}</span>
        </div>
      )}
    </div>
  );
};

export default InputLila;
