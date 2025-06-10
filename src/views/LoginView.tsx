import concertLogin from "../assets/concert-login.avif";
import InputLila from "../components/registerComponents/InputLila";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginView = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/createAccount");
  };

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
        <InputLila
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <InputLila
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
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
