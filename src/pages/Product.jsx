import { useParams } from "react-router-dom";
import { useGetProductByIdQuery } from "../redux/api/apiSlice";
import DetailProduct from "../components/fragments/DetailProduct";

const Product = () => {
  const { id } = useParams();
  const { data } = useGetProductByIdQuery(id);

  return (
    <div className="my-5">
      <div className="mb-5 flex justify-center ">
        <h1 className="border-b border-secondary text-4xl font-bold text-primary shadow-md">
          Detail Product
        </h1>
      </div>
      <article className="shadow-2xl p-2">
      {data && <DetailProduct product={data} />}
      </article>
    </div>
  );
};

export default Product;
