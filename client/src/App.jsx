import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Navigation from "./components/navigation/Navigation";
import ShopsPage from "./pages/ShopsPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";

const App = () => {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shops" element={<ShopsPage />} />
        <Route path="/shops/products/:id" element={<ProductDetailsPage />} />
      </Routes>
    </Router>
  );
};

export default App;
