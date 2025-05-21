import concerHero from "../assets/concert-hero.jpg";

const Hero = () => {
  return (
    <div className="relative w-full h-screen">
      <img
        src={concerHero}
        alt="concert hero"
        className="absolute w-full h-full object-cover"
      />
    </div>
  );
};

export default Hero;
