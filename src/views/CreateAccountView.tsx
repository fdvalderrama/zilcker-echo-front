import InputLila from "../components/registerComponents/InputLila";
import { useState } from "react";
import { saveUserApi } from "../services/UserApis";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import type { User } from "../models/User";

const CreateAccountView = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<User>();

  const [acceptTerms, setAcceptTerms] = useState(false);

  const handleSaveUser = async (data: User) => {
    const user = {
      name: data.name,
      lastName: data.lastName,
      birthdate: data.birthdate,
      phoneNumber: data.phoneNumber,
      email: data.email,
      password: data.password,
    };
    const result = await saveUserApi(user);
    if (result) {
      toast.success("User created successfully!");
      navigate("/login");
    } else {
      toast.error("Error creating user. Please try again.");
    }
  };

  const navigate = useNavigate();

  return (
    <form
      onSubmit={handleSubmit(handleSaveUser)}
      className="w-full md:h-screen bg-[#4B3F72] text-white overflow-hidden"
    >
      <h4
        className="mt-7 ms-10 text-xl font-semibold cursor-pointer"
        onClick={() => navigate("/")}
      >
        Zilcker Echo
      </h4>
      <h1 className="mt-5 font-bold text-center text-4xl">Create account</h1>
      <div className="flex flex-col md:flex-row justify-center mt-8 md:gap-x-30 lg:gap-x-60">
        <div className="flex flex-col mx-auto md:mx-0">
          <InputLila<User>
            type="text"
            placeholder="Name"
            name="name"
            register={register}
            error={errors.name?.message}
            validation={{ required: "Name is required" }}
          />

          <InputLila<User>
            type="text"
            placeholder="Last Name"
            name="lastName"
            register={register}
            error={errors.lastName?.message}
            validation={{ required: "Last name is required" }}
          />

          <InputLila<User>
            type="date"
            placeholder="Birthdate"
            name="birthdate"
            register={register}
            error={errors.birthdate?.message}
            validation={{ required: "Birthdate is required" }}
          />

          <InputLila<User>
            type="number"
            placeholder="Phone Number"
            name="phoneNumber"
            register={register}
            error={errors.phoneNumber?.message}
            validation={{
              required: "Phone number is required",
              minLength: {
                value: 10,
                message: "Phone number must be at least 10 digits",
              },
            }}
          />
        </div>
        <div className="flex flex-col mx-auto md:mx-0">
          <InputLila<User>
            type="email"
            placeholder="Email"
            name="email"
            register={register}
            error={errors.email?.message}
            validation={{
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Invalid email format",
              },
            }}
          />

          <InputLila<User>
            type="password"
            placeholder="Password"
            name="password"
            register={register}
            error={errors.password?.message}
            validation={{
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
            }}
          />

          <InputLila<User>
            type="password"
            placeholder="Confirm Password"
            name="password"
            register={register}
            error={errors.password?.message}
            validation={{
              required: "Confirm Password is required",
              validate: (value, formValues) =>
                value === formValues.password || "Passwords do not match",
            }}
          />

          <div className="mt-4 mx-auto mb-8">
            <input
              type="checkbox"
              checked={acceptTerms}
              onChange={(e) => setAcceptTerms(e.target.checked)}
              id="terms"
              className=" cursor-pointer"
            />
            <label
              className="ms-5 font-semibold text-md cursor-pointer"
              htmlFor="terms"
            >
              Accept agreement
            </label>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <button
          type="submit"
          className="bg-[#FF6B6B] mx-auto rounded-2xl w-60 h-12 text-xl font-semibold mb-20 cursor-pointer"
        >
          Register
        </button>
      </div>
    </form>
  );
};

export default CreateAccountView;
