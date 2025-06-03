import InputLila from "../components/registerComponents/InputCreateAccount";
import { useState } from "react";

const CreateAccountView = () => {
  const [name, setName] = useState("");

  return (
    <div className="w-full h-screen bg-[#4B3F72] text-white overflow-hidden">
      <h4 className="mt-7 ms-10 text-xl font-semibold">Zilcker Echo</h4>
      <h1 className="mt-5 font-bold text-center text-4xl">Create account</h1>
      <div className="flex justify-center mt-16 gap-x-60">
        <div className="flex flex-col">
          <InputLila
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            className="bg-[#8778BA] h-12 w-80 ps-4 rounded-xl mt-12"
            type="text"
            placeholder="Email"
          />

          <input
            className="bg-[#8778BA] h-12 w-80 ps-4 rounded-xl mt-12"
            type="text"
            placeholder="Confirm Password"
          />

          <input
            className="bg-[#8778BA] h-12 w-80 ps-4 rounded-xl mt-12"
            type="text"
            placeholder="Phone number"
          />
        </div>
        <div className="flex flex-col">
          <input
            className="bg-[#8778BA] h-12 w-80 ps-4 rounded-xl"
            type="text"
            placeholder="Last Name"
          />

          <input
            className="bg-[#8778BA] h-12 w-80 ps-4 rounded-xl mt-12"
            type="text"
            placeholder="Password"
          />

          <input
            className="bg-[#8778BA] h-12 w-80 ps-4 rounded-xl mt-12"
            type="text"
            placeholder="Birthdate"
          />
        </div>
      </div>
    </div>
  );
};

export default CreateAccountView;
