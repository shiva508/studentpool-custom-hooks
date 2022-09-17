import { Link } from "react-router-dom";

const Product = () => {
  return (
    <section>
      <h1>Product</h1>
      <ul>
        <li>
          <Link to="/product/p1">Product1</Link>
        </li>
        <li>
          <Link to="/product/p2">Product2</Link>
        </li>
        <li>
          <Link to="/product/p3">Product3</Link>
        </li>
      </ul>
    </section>
  );
};
export default Product;
