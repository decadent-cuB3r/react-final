import { Card, Button } from "antd";
import { Link } from "react-router-dom";
import AddToCart from "./AddToCart";

export default function ProductItem({ product }) {
  return (
    <Card className="bg-gray productItem">
      <Link to={`/detail/${product.id}`}>
        <img style={{ width: "100%" }} src={product.image} alt={product.name} />
      </Link>
      <div className="productItem-info">
        <h2 className="productItem-name">{product.name}</h2>
      </div>
      <div className="productItem-functions">
        <span className="text-gray">NTD {product.price}</span>
        <AddToCart product={product} qty={1} />
      </div>
    </Card>
  );
}
