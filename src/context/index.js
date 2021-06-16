import { createContext } from "react";
import useReducerWithThunk from "use-reducer-thunk";
import products from "../json/products.json";
import {
  SET_PRODUCT_ITEMS,
  SET_NAVBAR_ACTIVEITEM,
  CART_ITEM_ADD,
  CART_ITEM_REMOVE,
  Compare_ITEM_ADD,
  Compare_ITEM_REMOVE,
} from "../utils/constants";

export const StoreContext = createContext();

let cartItems = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

let compareItems = localStorage.getItem("compareItems")
  ? JSON.parse(localStorage.getItem("compareItems"))
  : [];

const initialState = {
  page: {
    products,
  },
  navBar: {
    activeItem: "/",
  },
  cartItems,
  compareItems,
};

function reducer(state, action) {
  console.log(action);
  switch (action.type) {
    case SET_PRODUCT_ITEMS:
      return {
        ...state,
        page: {
          ...state.page,
          products: action.payload,
        },
      };
    case SET_NAVBAR_ACTIVEITEM:
      return {
        ...state,
        navBar: {
          activeItem: action.payload,
        },
      };
    case CART_ITEM_ADD:
      const item = action.payload;
      const product = state.cartItems.find((x) => x.id === item.id);
      if (product) {
        cartItems = state.cartItems.map((x) =>
          x.id === product.id ? item : x
        );
        return { ...state, cartItems };
      }
      cartItems = [...state.cartItems, item];
      return { ...state, cartItems };
    case CART_ITEM_REMOVE:
      cartItems = state.cartItems.filter((x) => x.id !== action.payload);
      return { ...state, cartItems };
    case Compare_ITEM_ADD:
      const Item = action.payload;
      const Product = state.cartItems.find((x) => x.id === Item.id);
      if (Product) {
        compareItems = state.compareItems.map((x) =>
          x.id === product.id ? Item : x
        );
        return { ...state, compareItems };
      }
      compareItems = [ ...state.compareItems, Item];
      return { ...state, compareItems };
    case Compare_ITEM_REMOVE:
      compareItems = state.compareItems.filter((x) => x.id !== action.payload);
      return { ...state, compareItems};
    default:
      return state;
  }
}

export function StoreProvider(props) {
  const [state, dispatch] = useReducerWithThunk(
    reducer,
    initialState,
    "example"
  );
  const value = { state, dispatch };

  return (
    <StoreContext.Provider value={value}>
      {" "}
      {props.children}{" "}
    </StoreContext.Provider>
  );
}
