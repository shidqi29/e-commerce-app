import { formattedPrice } from "../../utils";
import PropTypes from "prop-types";

const TableCart = ({ item }) => {
  const { title, image, category, price, qty } = item;

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
      <td>
        <div>{formattedPrice(price)}</div>
      </td>
      <td>
        <div>{qty}</div>
      </td>
      <td>
        <div>{formattedPrice(price * qty)}</div> {/* total price */}
      </td>
    </tr>
  );
};

TableCart.propTypes = {
  item: PropTypes.object.isRequired,
};

export default TableCart;
