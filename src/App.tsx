import HomeView from "./views/HomeView";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreateAccountView from "./views/CreateAccountView";
import LoginView from "./views/LoginView";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/createAccount" element={<CreateAccountView />} />
        <Route path="/login" element={<LoginView />} />
      </Routes>
    </Router>
  );
}

export default App;
