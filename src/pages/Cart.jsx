import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import TableCart from "../components/fragments/TableCart";
import EmptyCart from "../components/fragments/EmptyCart";

const Cart = () => {
  const cart = useSelector((state) => state.cart.data);

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
        </div>
      ) : (
        <EmptyCart /> /* if cart is empty */
      )}
    </div>
  );
};

export default Cart;
