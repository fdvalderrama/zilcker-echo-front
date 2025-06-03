import Footer from "../components/homeComponents/Footer";
import Hero from "../components/homeComponents/Hero";
import Lineup from "../components/homeComponents/Lineup";
import Promotion from "../components/homeComponents/Promotion";
import Sponsors from "../components/homeComponents/Sponsors";

const Home = () => {
  return (
    <div>
      <Hero />
      <Lineup />
      <Promotion />
      <Sponsors />
      <Footer />
    </div>
  );
};

export default Home;
