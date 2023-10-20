import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Wrapper from "./components/layouts/Wrapper";
import Cart from "./pages/Cart";
import Product from "./pages/Product";
import Login from "./pages/Login";

function App() {
  return (
    <Router>
      <Wrapper>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Wrapper>
    </Router>
  );
}

export default App;
