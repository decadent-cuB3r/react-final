import { Card, Button } from "antd";
import { Link } from "react-router-dom";
import AddToCart from './AddToCart'

export default function ProductItem({ product }) {
  return (
    <Card className="bg-gray productItem">
      <Link to={`/detail/${product.id}`}>
        <img style={{ width: "100%" }} src={product.image} alt={product.name} />
      </Link>
      <div className="productItem-info">
        <h2 className="productItem-name">{product.name}</h2>
        <span className="text-gray">NTD {product.price}</span>
      </div>
      <div className="productItem-functions">
        <AddToCart product={product} qty={1} />
        <Link to={`/detail/${product.id}`}>
          <Button className="btn-color" type="ghost">More</Button>
        </Link>
      </div>
    </Card>
  );
}

