import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Navigation from "./components/navigation/Navigation";
import ShopsPage from "./pages/ShopsPage";

const App = () => {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shops" element={<ShopsPage />} />
      </Routes>
    </Router>
  );
};

export default App;
