import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import TableCart from "../components/fragments/TableCart";
import EmptyCart from "../components/fragments/EmptyCart";
import { formattedPrice } from "../utils";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const cart = useSelector((state) => state.cart.data);
  const [totalPrice, setTotalPrice] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const sumItemPrice = cart.reduce(
      (total, item) => total + item.price * item.qty,
      0,
    );
    setTotalPrice(sumItemPrice);
  }, [cart]);

  return (
    <div className="container flex w-full max-w-6xl flex-col">
      {/* check if cart is not empty */}
      {cart.length > 0 ? (
        <div className="text-center">
          <div className="py-4 text-4xl font-bold">Your cart items</div>
          <Link to="/" className="link-primary link">
            Back to shopping
          </Link>
          <div className="mt-6 overflow-x-auto py-4">
            <table className="table">
              {/* head */}
              <thead className="text-center text-base text-base-content">
                <tr>
                  <th>Product</th>
                  <th></th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody className="text-center">
                {cart.map((item) => (
                  <TableCart key={item.id} item={item} />
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4 w-full ">
            <div className="flex items-center justify-end gap-10 p-2">
              <div className="text-xl font-bold">Sub-Total</div>
              <div className="text-xl font-bold">
                {formattedPrice(totalPrice)}
              </div>
              <button
                className="btn btn-primary btn-wide"
                aria-label="checkout"
                onClick={() => navigate("/")}
              >
                Check Out
              </button>
            </div>
          </div>
        </div>
      ) : (
        <EmptyCart /> /* if cart is empty */
      )}
    </div>
  );
};

export default Cart;
