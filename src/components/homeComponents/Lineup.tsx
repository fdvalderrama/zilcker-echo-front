import lollapalooza from "../../assets/lollapalooza.png";

const Lineup = () => {
  return (
    <div className="w-full h-screen bg-[#4B3F72]">
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-1 grid-rows-12 h-screen">
        <div className="row-span-2 flex justify-center items-center">
          <h1 className="text-white text-4xl lg:text-6xl xl:text-7xl font-bold">
            LINEUP
          </h1>
        </div>
        <div className="row-span-10 flex justify-center items-center">
          <img
            src={lollapalooza}
            alt="lineup lollapalooza"
            className="w-120 lg:w-130 object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Lineup;
