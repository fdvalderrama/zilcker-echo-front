import InputLila from "../components/registerComponents/InputLila";
import { useState } from "react";
import { saveUserApi } from "../services/UserApis";

const CreateAccountView = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [acceptTerms, setAcceptTerms] = useState(false);

  const handleSaveUser = async () => {
    const user = { name, email, password, lastName, birthdate, phoneNumber };
    const result = await saveUserApi(user);
    console.log("User saved:", result);
    cleanFields();
  };

  const cleanFields = () => {
    setName("");
    setEmail("");
    setPassword("");
    setLastName("");
    setBirthdate("");
    setPhoneNumber("");
    setConfirmPassword("");
    setAcceptTerms(false);
  };

  return (
    <div className="w-full md:h-screen bg-[#4B3F72] text-white overflow-hidden">
      <h4 className="mt-7 ms-10 text-xl font-semibold">Zilcker Echo</h4>
      <h1 className="mt-5 font-bold text-center text-4xl">Create account</h1>
      <div className="flex flex-col md:flex-row justify-center mt-8 md:gap-x-30 lg:gap-x-60">
        <div className="flex flex-col mx-auto md:mx-0">
          <InputLila
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <InputLila
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />

          <InputLila
            type="date"
            placeholder="Birthdate"
            value={birthdate}
            onChange={(e) => setBirthdate(e.target.value)}
          />

          <InputLila
            type="number"
            placeholder="Phone Number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>
        <div className="flex flex-col mx-auto md:mx-0">
          <InputLila
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <InputLila
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <InputLila
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <div className="mt-4 mx-auto mb-8">
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
        <button
          onClick={handleSaveUser}
          className="bg-[#FF6B6B] mx-auto rounded-2xl w-60 h-12 text-xl font-semibold mb-20 cursor-pointer"
        >
          Register
        </button>
      </div>
    </div>
  );
};

export default CreateAccountView;
