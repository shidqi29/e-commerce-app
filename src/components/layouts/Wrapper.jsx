import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Wrapper = () => {
  return (
    <>
      <Navbar />
      <main className="container mx-auto flex flex-col items-center">
        <Outlet />
      </main>
    </>
  );
};

export default Wrapper;
