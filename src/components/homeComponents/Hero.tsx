import concerHero from "../../assets/concert-hero.jpg";
import Navbar from "../Navbar";

const Hero = () => {
  return (
    <div className="relative w-full h-screen">
      <img
        src={concerHero}
        alt="concert hero"
        className="absolute w-full h-full object-cover"
      />
      <div className="absolute w-full">
        <Navbar />
        <div className="flex justify-start ms-[5%] mt-12 text-white">
          <div className="text-center font-semibold">
            <h5>Austin, TX</h5>
            <h5>Zilker Park</h5>
            <h5>July 11 - July 14</h5>
          </div>
        </div>
      </div>

      <div className="absolute flex justify-center items-center w-full h-screen">
        <div className="text-center text-white mx-8">
          <h1 className="text-5xl md:text-7xl mb-3 font-semibold">
            Echoes of indie
          </h1>
          <h1 className="text-5xl md:text-7xl font-semibold">
            Rock in Zilcker park
          </h1>
          <button className="bg-[#FF6B6B] rounded-3xl px-12 py-3 mt-10 font-bold">
            BUY TICKETS
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
