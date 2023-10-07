import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Wrapper from "./components/layouts/Wrapper";

function App() {
  return (
    <Router>
      <Wrapper>
        <Routes>
          <Route index element={<Home />} />
        </Routes>
      </Wrapper>
    </Router>
  );
}

export default App;
