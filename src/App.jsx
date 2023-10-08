import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Wrapper from "./components/layouts/Wrapper";
import Cart from "./pages/Cart";

function App() {
  return (
    <Router>
      <Wrapper>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Wrapper>
    </Router>
  );
}

export default App;
