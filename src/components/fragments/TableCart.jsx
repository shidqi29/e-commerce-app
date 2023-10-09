import { useDispatch } from "react-redux";
import { formattedPrice } from "../../utils";
import PropTypes from "prop-types";
import { addToCart, decreaseQty } from "../../redux/cart/cartSlice";
import { MinusCircle, PlusCircle } from "@phosphor-icons/react";

const TableCart = ({ item }) => {
  const { title, image, category, price, qty } = item;

  const dispatch = useDispatch();

  const handleIncrementCart = () => {
    dispatch(addToCart({ ...item, qty: 1 }));
  };

  const handleDecreaseCart = () => {
    dispatch(decreaseQty(item));
  };

  return (
    <tr>
      <td className="w-1/6 translate-x-4">
        <div className="h-32 w-32 ">
          <img src={image} alt={title} className="h-full w-full object-fill" />
        </div>
      </td>
      <td className="w-3/6 -translate-x-6 text-start">
        <div className="flex flex-col">
          <p className="font-semibold">{title}</p>
          <span className="text-sm opacity-70">{category}</span>
        </div>
      </td>
      <td className="w-1/6">
        <div>{formattedPrice(price)}</div>
      </td>
      <td className="w-1/6">
        <div className="flex justify-center gap-4">
          <button
            onClick={handleDecreaseCart}
            type="button"
            disabled={qty === 1}
          >
            <MinusCircle size={20} />
          </button>
          <span className="font-semibold">{qty}</span>
          <button onClick={handleIncrementCart} type="button">
            <PlusCircle size={20} />
          </button>
        </div>
      </td>
      <td className="w-1/6">
        <div>{formattedPrice(price * qty)}</div> {/* total price */}
      </td>
    </tr>
  );
};

TableCart.propTypes = {
  item: PropTypes.object.isRequired,
};

export default TableCart;
