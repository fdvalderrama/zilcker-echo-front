import { useForm } from "react-hook-form";
import concertLogin from "../assets/concert-login.avif";
import InputLila from "../components/registerComponents/InputLila";
import { useNavigate } from "react-router-dom";

type LoginData = {
  email: string;
  password: string;
};

const LoginView = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/createAccount");
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginData>();

  return (
    <div className="w-full h-screen text-white relative flex flex-col md:flex-row ">
      <div className="relative h-4/12 w-full md:h-screen md:w-8/12 flex items-center justify-center">
        <img
          src={concertLogin}
          alt="concert login"
          className="absolute h-full w-full md:h-screen object-cover"
        />

        <h1 className="relative text-6xl font-bold">Zilcker Echo</h1>
      </div>

      <div className="h-8/12 md:h-screen md:w-1/2 bg-[#4B3F72] flex flex-col items-center justify-center">
        <h1 className=" font-semibold text-3xl mb-10 md:mt-30">Login</h1>
        <InputLila<LoginData>
          type="email"
          placeholder="Email"
          name="email"
          register={register}
          validation={{ required: "Email is required" }}
          error={errors.email?.message}
        />

        <InputLila<LoginData>
          type="password"
          placeholder="Password"
          name="password"
          register={register}
          validation={{ required: "Password is required" }}
          error={errors.password?.message}
        />

        <button className="bg-[#FF6B6B] mx-auto rounded-2xl w-50 h-10 text-lg font-semibold mb-3">
          Login
        </button>

        <p className=" mb-20 text-sm">
          Create account{" "}
          <button
            className="text-blue-400 cursor-pointer"
            onClick={handleClick}
          >
            here
          </button>
        </p>
      </div>
    </div>
  );
};

export default LoginView;
