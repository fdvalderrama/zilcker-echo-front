import concertLights from "../../assets/concert-light.webp";
import { useNavigate } from "react-router-dom";

const Promotion = () => {
  const navigate = useNavigate();
  const handleNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <img
        src={concertLights}
        alt="concert lights"
        className="absolute w-full h-full object-cover"
      />
      <div className="relative w-10/12 md:w-8/12 lg:9/12 xl:w-1/2 mx-auto aspect-video mt-20 md:mt-10">
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/Vn_rrTfKEJQ"
          title="YouTube video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </div>

      <h4 className="relative text-white text-2xl mt-10 text-center">
        TAKE A LOOK OF THE FESTIVAL
      </h4>

      <div className="relative flex flex-col md:flex-row justify-center gap-y-6 md:gap-y-0 md:gap-x-32 mt-10 text-white font-bold text-lg mx-12 md:mx-0">
        <button
          onClick={() => handleNavigation("/getTickets")}
          className="bg-[#FF6B6B] py-4 w-full md:w-52 lg:w-60 xl:py-5 xl:w-80 border border-white rounded-4xl cursor-pointer"
        >
          BUY TICKETS
        </button>
        <button className="bg-[#FF6B6B] py-4 w-full md:w-52 lg:w-60 xl:py-5 xl:w-80 border border-white rounded-4xl cursor-pointer">
          FAQ'S
        </button>
        <button className="bg-[#FF6B6B] py-4 w-full md:w-52 lg:w-60 xl:py-5 xl:w-80 border border-white rounded-4xl cursor-pointer">
          GALLERY
        </button>
      </div>
    </div>
  );
};

export default Promotion;
