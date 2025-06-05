import concertLogin from "../assets/concert-login.avif";
import InputLila from "../components/registerComponents/InputLila";
import { useState } from "react";

const LoginView = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="w-full md:h-screen text-white">
      <div className="relative flex flex-col md:flex-row ">
        <div className="relative md:h-screen md:w-8/12 flex items-center justify-center">
          <img
            src={concertLogin}
            alt="concert login"
            className="absolute md:h-screen object-cover"
          />

          <h1 className="relative text-6xl font-bold">Zilcker Echo</h1>
        </div>

        <div className="h-screen md:w-1/2 bg-[#4B3F72] flex flex-col items-center justify-center">
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

          <button className="bg-[#FF6B6B] mx-auto rounded-2xl w-50 h-10 text-lg font-semibold mb-20">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginView;
