import Navbar from "../components/Navbar";
import concertTickets from "../assets/concert-tickets.jpg";
import Footer from "../components/homeComponents/Footer";
import CardTickets from "../components/ticketsComponents/CardTickets";

const TicketsView = () => {
  return (
    <div className="w-full bg-[#4B3F72] text-white overflow-hidden">
      <Navbar />
      <div className="relative w-full h-64 flex justify-center items-center">
        <img
          className="absolute w-full h-full object-cover "
          src={concertTickets}
          alt="concert tickets"
        />
        <h1 className="relative text-7xl font-bold">Tickets</h1>
      </div>

      <CardTickets
        name="General"
        price={700}
        benefits={[
          "Access to all scenerios",
          "Rent of lockers",
          "Foodtruck area",
          "Free hidratation zone",
          "Medical assistant",
        ]}
      />

      <CardTickets
        name="Comfort Pass"
        price={1500}
        benefits={[
          "Access to all scenerios",
          "Rent of lockers",
          "Foodtruck area",
          "Free hidratation zone",
          "Medical assistant",
          "Private Bathrooms",
          "Exclusive and fast entry to the festival",
        ]}
      />

      <CardTickets
        name="VIP Pass"
        price={2500}
        benefits={[
          "Access to all scenerios",
          "Rent of lockers",
          "Foodtruck area",
          "Free hidratation zone",
          "Private Bathrooms",
          "Exclusive entry to the festival",
          "Access to VIP areas",
          "Rest areas",
          "Lateral pit",
          "Medical assistant",
          "Fast line",
        ]}
      />

      <Footer />
    </div>
  );
};

export default TicketsView;
