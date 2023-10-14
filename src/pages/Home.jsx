import { useGetAllProductsQuery } from "../redux/api/apiSlice";
import CardProduct from "../components/fragments/CardProduct";

const Home = () => {
  const { data } = useGetAllProductsQuery();

  return (
    <article className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 py-10">
      {data?.map((item) => (
        <CardProduct product={item} key={item.id} />
      ))}
    </article>
  );
};

export default Home;
