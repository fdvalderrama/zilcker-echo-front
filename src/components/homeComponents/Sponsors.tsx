import budweiserLogo from "../../assets/budweiser-logo.png";
import cocaLogo from "../../assets/coca-logo.png";
import hsbcLogo from "../../assets/hsbc-logo.png";
import airbnbLogo from "../../assets/airbnb-logo.png";
import huluLogo from "../../assets/hulu-logo.png";
import visaLogo from "../../assets/visa-logo.png";

const Sponsors = () => {
  return (
    <div className="w-full h-screen bg-[#4B3F72] overflow-hidden">
      <h1 className="text-white text-4xl md:text-6xl font-bold mt-5 md:mt-20 md:ms-[12%] text-center md:text-start">
        SPONSORS
      </h1>
      <div className="flex flex-col md:flex-row justify-center mx-[12%] md:mt-20 md:gap-x-[18%]">
        <img
          className="w-56 md:w-1/5 mx-auto md:mx-0 object-contain"
          src={budweiserLogo}
          alt="budweise-logo"
        />
        <img
          className="w-52 md:w-1/5 mx-auto md:mx-0 object-contain"
          src={cocaLogo}
          alt="budweise-logo"
        />
        <img
          className="w-52 md:w-1/5 mx-auto md:mx-0 mt-10 md:mt-0 object-contain"
          src={hsbcLogo}
          alt="budweise-logo"
        />
      </div>
      <div className="flex flex-col md:flex-row justify-center mx-[12%] md:mt-20 md:gap-x-[18%]">
        <img
          className="w-52 md:w-1/5 mx-auto md:mx-0 mt-10 md:mt-0 object-contain"
          src={airbnbLogo}
          alt="budweise-logo"
        />
        <img
          className="w-48 md:w-1/5 mx-auto md:mx-0 mt-10 md:mt-0 object-contain"
          src={huluLogo}
          alt="budweise-logo"
        />
        <img
          className="w-48 md:w-1/5 mx-auto md:mx-0 mt-10 md:mt-0 object-contain"
          src={visaLogo}
          alt="budweise-logo"
        />
      </div>
    </div>
  );
};

export default Sponsors;
