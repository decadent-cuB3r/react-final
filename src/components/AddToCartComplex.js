import { Button, notification } from "antd";
import { StoreContext } from "../context"
import { useContext, useEffect } from "react"
import { cartItemAdd } from "../actions"

export default function AddToCart({product, qty}) {
  const { state: { cartItems }, dispatch } = useContext(StoreContext);

  const addToCart = () => {
    openNotification();
    cartItemAdd(dispatch, product, qty);
  };

  useEffect(()=>{
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems])

  const openNotification = placement => {
    notification.open({
      message: "購物車通知",
      description: `${qty} ${product.quantifier} ${product.name} 已加入購物車！`,
      placement: "bottomRight",
      onClick: () => {
        console.log("Notification Clicked!");
      },
    });
  };
  return (
    <Button className="btn-color" type="default" onClick={addToCart}>
      加入購物車
    </Button>
  );
}
