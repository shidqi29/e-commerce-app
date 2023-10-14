import PropTypes from "prop-types";

import { formattedPrice } from "../../utils";
import { addToCart } from "../../redux/cart/cartSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { Minus, Plus, ShoppingCart } from "@phosphor-icons/react";

const DetailProduct = ({ product }) => {
  const { title, image, description, category, price, rating } = product;
  const [quantity, setQuantity] = useState(1);

  const dispatch = useDispatch();

  const handleIncrementCart = () => {
    setQuantity((prevQty) => prevQty + 1);
  };

  const handleDecreaseCart = () => {
    setQuantity((prevQty) => prevQty - 1);
  };

  const handleAddToCart = () => {
    dispatch(addToCart({ ...product, qty: quantity }));
    setQuantity(1);
  };

  return (
    <div className="hero">
      <div className="hero-content h-max flex-col lg:flex-row">
        <div className="h-52 lg:h-80 lg:w-1/4 ">
          <img
            src={image}
            alt={title}
            className="h-52 w-full rounded-lg object-fill shadow-2xl lg:h-80"
          />
        </div>
        <div className="flex flex-col justify-between py-2 lg:w-2/4 ">
          <div>
            <h1 className="text-3xl font-bold">{title}</h1>
            <div className="badge badge-outline">{category}</div>
            <span className="ml-4 text-sm font-medium">⭐{rating.rate}</span>
            <h2 className="pt-2 text-2xl font-semibold text-primary">
              {formattedPrice(price)}
            </h2>
            <p className="py-4 tracking-wide">{description}</p>
          </div>
          <div className="flex flex-1 flex-col gap-6">
            <div className="flex gap-4">
              <p>Quantity: </p>
              <button
                onClick={handleDecreaseCart}
                type="button"
                disabled={quantity === 1}
                className="btn-primary btn-xs disabled:opacity-50"
              >
                <Minus size={20} />
              </button>
              <span className="font-semibold">{quantity}</span>
              <button
                onClick={handleIncrementCart}
                type="button"
                className="btn-primary btn-xs"
              >
                <Plus size={20} />
              </button>
            </div>
            <div className="">
              <button
                className="btn btn-primary w-full"
                onClick={handleAddToCart}
              >
                <ShoppingCart size={24} />
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

DetailProduct.propTypes = {
  product: PropTypes.object.isRequired,
  qty: PropTypes.number.isRequired,
};

export default DetailProduct;
