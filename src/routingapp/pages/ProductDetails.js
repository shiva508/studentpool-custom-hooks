import { useParams } from "react-router-dom";

const ProductDetails = (props) => {
  const params = useParams();
  console.log(params);
  return (
    <section>
      <h1>Product Details</h1>
      <p>{params.productod}</p>
    </section>
  );
};

export default ProductDetails;
