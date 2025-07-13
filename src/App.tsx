import HomeView from "./views/HomeView";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreateAccountView from "./views/CreateAccountView";
import LoginView from "./views/LoginView";
import TicketsView from "./views/TicketsView";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <Router>
      <Toaster />
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/createAccount" element={<CreateAccountView />} />
        <Route path="/login" element={<LoginView />} />
        <Route path="/getTickets" element={<TicketsView />} />
      </Routes>
    </Router>
  );
}

export default App;
