import InputLila from "../components/registerComponents/InputCreateAccount";
import { useState } from "react";

const CreateAccountView = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [acceptTerms, setAcceptTerms] = useState(false);

  return (
    <div className="w-full md:h-screen bg-[#4B3F72] text-white overflow-hidden">
      <h4 className="mt-7 ms-10 text-xl font-semibold">Zilcker Echo</h4>
      <h1 className="mt-5 font-bold text-center text-4xl">Create account</h1>
      <div className="flex flex-col md:flex-row justify-center mt-16 md:gap-x-30 lg:gap-x-60">
        <div className="flex flex-col mx-auto md:mx-0">
          <InputLila
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <InputLila
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />

          <InputLila
            placeholder="Birthdate"
            value={birthdate}
            onChange={(e) => setBirthdate(e.target.value)}
          />

          <InputLila
            placeholder="Phone Number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>
        <div className="flex flex-col mx-auto md:mx-0">
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

          <InputLila
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <div className="mt-3 mb-12 mx-auto">
            <input
              type="checkbox"
              checked={acceptTerms}
              onChange={(e) => setAcceptTerms(e.target.checked)}
              id="terms"
            />
            <label className="ms-5 font-semibold text-md" htmlFor="terms">
              Accept agreement
            </label>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <button className="bg-[#FF6B6B] mx-auto rounded-2xl w-60 h-12 text-xl font-semibold mb-20">
          Register
        </button>
      </div>
    </div>
  );
};

export default CreateAccountView;
