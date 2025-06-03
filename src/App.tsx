import HomeView from "./views/HomeView";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreateAccountView from "./views/CreateAccountView";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/createAccount" element={<CreateAccountView />} />
      </Routes>
    </Router>
  );
}

export default App;
