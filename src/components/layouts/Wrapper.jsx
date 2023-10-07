import Navbar from "./Navbar";
import PropTypes from "prop-types";

const Wrapper = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="container mx-auto flex flex-col items-center">
        {children}
      </main>
    </>
  );
};

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Wrapper;
