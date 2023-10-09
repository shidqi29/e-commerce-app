import PropTypes from "prop-types";
import { formattedPrice } from "../../utils";
import { ShoppingCart } from "@phosphor-icons/react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cart/cartSlice";
import { Link } from "react-router-dom";

const CardProduct = ({ product }) => {
  const { id, title, image, price, rating } = product;
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart({ ...product, qty: 1 }));
  };

  return (
    <article className=" transition-transform hover:-translate-y-1">
      <div className="card-compact card card-bordered h-80 w-60 border-secondary">
        <div className="flex-1 border-b border-secondary">
          <Link to={`/product/${id}`}>
            <figure className="h-40 w-full">
              <img
                src={image}
                alt={title}
                className="h-40 w-full object-fill"
              />
            </figure>
            <div className="card-body justify-between">
              <h3 className="card-title line-clamp-2 text-sm font-semibold">
                {title}
              </h3>
              <p className="text-base font-bold">{formattedPrice(price)}</p>
            </div>
          </Link>
        </div>
        <div className="card-actions mx-2 items-center justify-between px-2 py-3">
          <p className="text-sm">⭐ {rating.rate}</p>
          <button
            onClick={handleAddToCart}
            type="button"
            className="tooltip tooltip-primary"
            data-tip="Add to cart"
          >
            <ShoppingCart size={24} />
          </button>
        </div>
      </div>
    </article>
  );
};

CardProduct.propTypes = {
  product: PropTypes.object.isRequired,
};

export default CardProduct;
