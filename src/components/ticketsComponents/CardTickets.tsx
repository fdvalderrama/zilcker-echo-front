import { Check } from "lucide-react";
import { type FC } from "react";

interface CardTicketsProps {
  name: string;
  price: number;
  benefits: string[];
}

const CardTickets: FC<CardTicketsProps> = ({ name, price, benefits }) => {
  let isFirstColumn = true;
  const chunks = Array.from(
    { length: Math.ceil(benefits.length / 3) },
    (_, i) => benefits.slice(i * 3, i * 3 + 3)
  );

  return (
    <div className="mt-20 mx-20 bg-[#8778BA] flex flex-col lg:flex-row rounded-2xl h-150 lg:h-60 mb-10">
      <div className="flex flex-col justify-center items-center w-full lg:w-1/4 font-bold mb-5 lg:mb-0">
        <h1 className="text-2xl mb-2 lg:mb-5 mt-5 lg:mt-0">{name}</h1>
        <h3 className=" mb-2 lg:mb-5 text-xl">${price}</h3>
        <button className="bg-[#FF6B6B] rounded-2xl w-20 h-10 text-md font-semibold">
          Buy
        </button>
      </div>
      <div className="h-1 lg:h-40 lg:w-1 mx-10 lg:mx-0 lg:my-10 bg-white mb-5 lg:mb-0" />

      {chunks.map((group, index) => (
        <div
          key={index}
          className="w-full lg:w-1/6 xl:w-1/7 flex flex-col items-center lg:items-start lg:ms-5 xl:ms-15"
        >
          {isFirstColumn && (
            <h2 className="font-semibold text-2xl mb-1 mt-8">Includes</h2>
          )}

          {group.map((feature, i) => (
            <div
              key={i}
              className={`flex mb-2 ${
                i === 0 ? (isFirstColumn ? "lg:mt-3" : "lg:mt-20") : ""
              }`}
            >
              <Check className="text-green-400 me-2 w-5 h-5" />
              <p>{feature}</p>
            </div>
          ))}

          {(isFirstColumn = false)}
        </div>
      ))}
    </div>
  );
};

export default CardTickets;
