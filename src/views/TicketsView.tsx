import Navbar from "../components/Navbar";
import concertTickets from "../assets/concert-tickets.jpg";
import { Check } from "lucide-react";
import Footer from "../components/homeComponents/Footer";

const TicketsView = () => {
  return (
    <div className="w-full bg-[#4B3F72] text-white overflow-hidden">
      <Navbar />
      <div className="relative w-full md:h-64 flex justify-center items-center">
        <img
          className="absolute w-full h-full object-cover "
          src={concertTickets}
          alt="concert tickets"
        />
        <h1 className="relative text-7xl font-bold">Tickets</h1>
      </div>
      <div className="mt-20 mx-20 bg-[#8778BA] flex flex-col lg:flex-row rounded-2xl h-120 lg:h-60 mb-10">
        <div className="flex flex-col justify-center items-center w-full lg:w-1/4 font-bold mb-5 lg:mb-0">
          <h1 className="text-2xl mb-2 lg:mb-5 mt-5 lg:mt-0">General</h1>
          <h3 className=" mb-2 lg:mb-5 text-xl">$700</h3>
          <button className="bg-[#FF6B6B] rounded-2xl w-20 h-10 text-md font-semibold">
            Buy
          </button>
        </div>
        <div className="h-1 lg:h-40 lg:w-1 mx-10 lg:mx-0 lg:my-10 bg-white mb-5 lg:mb-0"></div>
        <div className="w-full lg:w-1/6 xl:w-1/7 flex flex-col lg:justify-center items-center lg:items-start lg:ms-5 xl:ms-15">
          <h2 className="font-semibold text-2xl mb-5">Includes</h2>
          <div className="flex mb-2">
            <Check className="text-green-400 me-2 w-5 h-5" />
            <p>Access to all scenerios</p>
          </div>
          <div className="flex mb-2">
            <Check className="text-green-400 me-2 w-5 h-5" />
            <p>Rent of lockers</p>
          </div>
          <div className="flex mb-2">
            <Check className="text-green-400 me-2 w-5 h-5" />
            <p>Foodtruck area</p>
          </div>
        </div>
        <div className="w-full lg:w-1/6 xl:w-1/7 flex flex-col lg:justify-center items-center lg:items-start lg:ms-5 xl:ms-15">
          <div className="flex mb-2">
            <Check className="text-green-400 me-2 w-5 h-5" />
            <p>Free hidratation zone</p>
          </div>
          <div className="flex">
            <Check className="text-green-400 me-2 w-5 h-5" />
            <p>Medical assistant</p>
          </div>
        </div>
      </div>
      <div className="mt-20 mx-20 bg-[#8778BA] flex flex-col lg:flex-row rounded-2xl h-120 lg:h-60 mb-10">
        <div className="flex flex-col justify-center items-center w-full lg:w-1/4 font-bold mb-5 lg:mb-0">
          <h1 className="text-2xl mb-2 lg:mb-5 mt-5 lg:mt-0">Confort Pass</h1>
          <h3 className=" mb-2 lg:mb-5 text-xl">$1500</h3>
          <button className="bg-[#FF6B6B] rounded-2xl w-20 h-10 text-md font-semibold">
            Buy
          </button>
        </div>
        <div className="h-1 lg:h-40 lg:w-1 mx-10 lg:mx-0 lg:my-10 bg-white mb-5 lg:mb-0"></div>
        <div className="w-full lg:w-1/6 xl:w-1/7 flex flex-col lg:justify-center items-center lg:items-start lg:ms-5 xl:ms-15">
          <h2 className="font-semibold text-2xl mb-5">Includes</h2>
          <div className="flex mb-2">
            <Check className="text-green-400 me-2 w-5 h-5" />
            <p>Access to all scenerios</p>
          </div>
          <div className="flex mb-2">
            <Check className="text-green-400 me-2 w-5 h-5" />
            <p>Rent of lockers</p>
          </div>
          <div className="flex mb-2">
            <Check className="text-green-400 me-2 w-5 h-5" />
            <p>Foodtruck area</p>
          </div>
        </div>
        <div className="w-full lg:w-1/6 xl:w-1/7 flex flex-col lg:justify-center items-center lg:items-start lg:ms-5 xl:ms-15">
          <div className="flex mb-2 lg:mt-12">
            <Check className="text-green-400 me-2 w-5 h-5" />
            <p>Free hidratation zone</p>
          </div>
          <div className="flex">
            <Check className="text-green-400 me-2 w-5 h-5" />
            <p>Medical assistant</p>
          </div>
          <div className="flex mb-2">
            <Check className="text-green-400 me-2 w-5 h-5" />
            <p>Private Bathrooms</p>
          </div>
        </div>
        <div className="w-full lg:w-1/6 xl:w-1/7 flex flex-col lg:justify-center items-center lg:items-start lg:ms-5 xl:ms-15">
          <div className="flex">
            <Check className="text-green-400 me-2 w-5 h-5" />
            <p>Exclusive and fast entry to the festival</p>
          </div>
        </div>
      </div>
      <div className="mt-20 mx-20 bg-[#8778BA] flex flex-col lg:flex-row rounded-2xl h-150 lg:h-60 mb-10">
        <div className="flex flex-col justify-center items-center w-full lg:w-1/4 font-bold mb-5 lg:mb-0">
          <h1 className="text-2xl mb-2 lg:mb-5 mt-5 lg:mt-0">VIP Pass</h1>
          <h3 className=" mb-2 lg:mb-5 text-xl">$2500</h3>
          <button className="bg-[#FF6B6B] rounded-2xl w-20 h-10 text-md font-semibold">
            Buy
          </button>
        </div>
        <div className="h-1 lg:h-40 lg:w-1 mx-10 lg:mx-0 lg:my-10 bg-white mb-5 lg:mb-0" />
        <div className="w-full lg:w-1/6 xl:w-1/7 flex flex-col lg:justify-center items-center lg:items-start lg:ms-5 xl:ms-15">
          <h2 className="font-semibold text-2xl mb-1 lg:mb-5">Includes</h2>
          <div className="flex mb-2">
            <Check className="text-green-400 me-2 w-5 h-5" />
            <p>Access to all scenerios</p>
          </div>
          <div className="flex mb-2">
            <Check className="text-green-400 me-2 w-5 h-5" />
            <p>Rent of lockers</p>
          </div>
          <div className="flex mb-2">
            <Check className="text-green-400 me-2 w-5 h-5" />
            <p>Foodtruck area</p>
          </div>
        </div>
        <div className="w-full lg:w-1/6 xl:w-1/7 flex flex-col lg:justify-center items-center lg:items-start lg:ms-5 xl:ms-15">
          <div className="flex mb-2 lg:mt-5">
            <Check className="text-green-400 me-2 w-5 h-5" />
            <p>Free hidratation zone</p>
          </div>

          <div className="flex mb-2">
            <Check className="text-green-400 me-2 w-5 h-5" />
            <p>Private Bathrooms</p>
          </div>
          <div className="flex">
            <Check className="text-green-400 me-2 w-5 h-5" />
            <p>Exclusive and fast entry to the festival</p>
          </div>
        </div>

        <div className="w-full lg:w-1/6 xl:w-1/7 flex flex-col lg:justify-center items-center lg:items-start lg:ms-5 xl:ms-15">
          <div className="flex mb-2 lg:mt-12">
            <Check className="text-green-400 me-2 w-5 h-5" />
            <p>Access to VIP areas</p>
          </div>

          <div className="flex mb-2">
            <Check className="text-green-400 me-2 w-5 h-5" />
            <p>Rest areas</p>
          </div>
          <div className="flex">
            <Check className="text-green-400 me-2 lg:mb-10 w-5 h-5" />
            <p>Lateral pit</p>
          </div>
        </div>

        <div className="w-full lg:w-1/6 xl:w-1/7 flex flex-col lg:justify-center items-center lg:items-start lg:ms-5 xl:ms-15">
          <div className="flex mb-2 ">
            <Check className="text-green-400 me-2 w-5 h-5" />
            <p>Medical assistant</p>
          </div>

          <div className="flex">
            <Check className="text-green-400 me-2 w-5 h-5" />
            <p>Fast line</p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default TicketsView;
