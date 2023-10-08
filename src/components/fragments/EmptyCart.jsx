import { Link } from "react-router-dom";

const EmptyCart = () => {
  return (
    <div className="-mt-20 flex min-h-screen flex-col items-center justify-center gap-5">
      <div className="flex flex-col items-center">
        <h2 className="text-5xl font-bold ">Oops...</h2>
        <p className="text-2xl font-semibold">Your cart is empty</p>
        <p className="text-base">
          Come on, fill it with the items of your dreams!
        </p>
      </div>
      <Link to="/" className="btn btn-primary btn-wide text-base normal-case">
        Start Shopping
      </Link>
    </div>
  );
};

export default EmptyCart;
