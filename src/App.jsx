import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Wrapper from "./components/layouts/Wrapper";
import Cart from "./pages/Cart";
import Product from "./pages/Product";
import Login from "./pages/Login";
import ProtectedRoute from "./components/layouts/ProtectedRoute";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { login } from "./redux/user/userSlice";
import { getUsername } from "./utils";

function App() {
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token) {
      dispatch(login({ token, name: getUsername(token) }));
    }
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Wrapper />}>
          <Route index element={<Home />} />
          <Route path="/product/:id" element={<Product />} />
          <Route
            path="/cart"
            element={
              <ProtectedRoute>
                <Cart />
              </ProtectedRoute>
            }
          />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
