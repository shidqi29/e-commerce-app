import { useDispatch } from "react-redux";
import { useGetAllProductsQuery } from "../redux/api/apiSlice";
import { addToCart } from "../redux/cart/cartSlice";

const Home = () => {
  const { data } = useGetAllProductsQuery();
  const dispatch = useDispatch();

  const handleAddToCart = (id) => {
    dispatch(addToCart(data[id]));
  };

  return (
    <div>
      {data?.map((item) => (
        <div key={item.id}>
          <h1>{item.title}</h1>
          <button onClick={() => handleAddToCart(item.id)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default Home;
