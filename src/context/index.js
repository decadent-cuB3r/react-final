import { createContext } from "react";
import useReducerWithThunk from "use-reducer-thunk";
import products from "../json/products.json";
import {
  SET_PRODUCT_ITEMS,
  SET_NAVBAR_ACTIVEITEM,
  CART_ITEM_ADD,
  CART_ITEM_REMOVE,
  // Compare_ITEM_ADD,
  // Compare_ITEM_REMOVE,
  BEGIN_LOGIN_REQUEST,
  SUCCESS_LOGIN_REQUEST,
  FAIL_LOGIN_REQUEST,
  LOGOUT_REQUEST,
  REMEMBER_LOGIN,
  BEGIN_REGISTER_REQUEST,
  SUCCESS_REGISTER_REQUEST,
  FAIL_REGISTER_REQUEST,
  BEGIN_UPDATE_USERINFO,
  SUCCESS_UPDATE_USERINFO,
  FAIL_UPDATE_USERINFO,
  // BEGIN_PRODUCTS_FEED,
  // SUCCESS_PRODUCTS_FEED,
  // FAIL_PRODUCTS_FEED,
  BEGIN_COMMENT_REQUEST,
  SUCCESS_COMMENT_REQUEST,
  FAIL_COMMENT_REQUEST,
  SET_COMMENTS_LIST,
  SAVE_SHIPPING_ADDRESS,
  SAVE_PAYMENT_METHOD,
  BEGIN_ORDER_CREATE,
  SUCCESS_ORDER_CREATE,
  FAIL_ORDER_CREATE,
} from "../utils/constants";

export const StoreContext = createContext();

let cartItems = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

// let compareItems = localStorage.getItem("compareItems")
//   ? JSON.parse(localStorage.getItem("compareItems"))
//   : [];

const initialState = {
  page: {
    products,
  },
  navBar: {
    activeItem: "/",
  },
  cart: {
    cartItems,
    shippingAddress: localStorage.getItem('shippingAddress')
      ? JSON.parse(localStorage.getItem('shippingAddress'))
      : {},
    paymentMethod: 'Google',
  },
  orderInfo: {
    loading: false,
    order: localStorage.getItem('orderInfo')
      ? JSON.parse(localStorage.getItem('orderInfo'))
      : { id: "" }
  },
  userSignin: {
    loading: false,
    userInfo: localStorage.getItem("userInfo")
      ? JSON.parse(localStorage.getItem("userInfo"))
      : null,
    remember: true,
    error: "",
  },
  userRegister: {
    loading: false,
    userInfo: null,
    error: "",
  },
  commentInfo: {
    loading: false,
    success: false,
    error: null,
  },
  commentPage: {
    comments: [],
  },
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
      const product = state.cart.cartItems.find((x) => x.id === item.id);
      if (product) {
        cartItems = state.cart.cartItems.map((x) =>
          x.id === product.id ? item : x
        );
        return { ...state, cart: { ...state.cart, cartItems } };
      }
      cartItems = [...state.cart.cartItems, item];
      return { ...state, cart: { ...state.cart, cartItems } };
    case CART_ITEM_REMOVE:
      cartItems = state.cart.cartItems.filter((x) => x.id !== action.payload);
      return { ...state, cart: { ...state.cart, cartItems } };
    case SAVE_SHIPPING_ADDRESS:
      console.log('action.payload.shippingAddress = ')
      console.log(action.payload)
      return {
        ...state, cart: { ...state.cart, shippingAddress: action.payload }
      };
    case SAVE_PAYMENT_METHOD:
      return {
        ...state,
        cart: { ...state.cart, paymentMethod: action.payload }
      };
    case BEGIN_LOGIN_REQUEST:
      return { ...state, userSignin: { ...state.userSignin, loading: true } };
    case SUCCESS_LOGIN_REQUEST:
      return {
        ...state,
        userSignin: {
          ...state.userSignin,
          loading: false,
          userInfo: action.payload,
          error: "",
        },
      };
    case FAIL_LOGIN_REQUEST:
      return {
        ...state,
        userSignin: {
          ...state.userSignin,
          loading: false,
          userInfo: null,
          error: action.payload,
        },
      };
    case BEGIN_UPDATE_USERINFO:
      return { ...state, userSignin: { ...state.userSignin, loading: true } };
    case SUCCESS_UPDATE_USERINFO:
      return {
        ...state,
        userSignin: {
          ...state.userSignin,
          loading: false,
          userInfo: action.payload,
          error: "",
        },
      };
    case FAIL_UPDATE_USERINFO:
      return {
        ...state,
        userSignin: {
          ...state.userSignin,
          loading: false,
          error: action.payload,
        },
      };
    case LOGOUT_REQUEST:
      cartItems = [];
      return {
        ...state,
        userSignin: {
          ...state.userSignin,
          userInfo: null,
        },
      };
    case REMEMBER_LOGIN:
      return {
        ...state,
        userSignin: {
          ...state.userSignin,
          remember: action.payload,
        },
      };
    case BEGIN_REGISTER_REQUEST:
      return {
        ...state,
        userRegister: { ...state.userRegister, loading: true },
      };
    case SUCCESS_REGISTER_REQUEST:
      return {
        ...state,
        userRegister: {
          ...state.userRegister,
          loading: false,
          userInfo: action.payload,
          error: "",
        },
        userSignin: {
          ...state.userSignin,
          userInfo: action.payload,
        },
      };
    case FAIL_REGISTER_REQUEST:
      return {
        ...state,
        userRegister: {
          ...state.userRegister,
          loading: false,
          userInfo: null,
          error: action.payload,
        },
      };
    case BEGIN_COMMENT_REQUEST:
      return {
        ...state,
        commentInfo: {
          ...state.commentInfo,
          loading: true,
          success: false,
        }
      };
    case SUCCESS_COMMENT_REQUEST:
      return {
        ...state,
        commentInfo: {
          ...state.commentInfo,
          loading: false,
          success: true,
          error: null,
        },
      };
    case FAIL_COMMENT_REQUEST:
      return {
        ...state,
        commentInfo: {
          ...state.commentInfo,
          loading: false,
          success: false,
          error: action.payload,
        },
      };
    case SET_COMMENTS_LIST:
      return {
        ...state,
        commentPage: {
          ...state.page,
          ...action.payload
        },
      };
    case BEGIN_ORDER_CREATE:
      return { ...state, orderInfo: { ...state.orderInfo, loading: true } };
    case SUCCESS_ORDER_CREATE:
      return {
        ...state,
        orderInfo: {
          ...state.orderInfo,
          loading: false,
          order: action.payload,
          error: "",
        },
      };
    case FAIL_ORDER_CREATE:
      return {
        ...state,
        orderInfo: {
          ...state.orderInfo,
          loading: false,
          order: { id: "" },
          error: action.payload,
        },
      };
    // case Compare_ITEM_ADD:
    //   const Item = action.payload;
    //   const Product = state.cartItems.find((x) => x.id === Item.id);
    //   if (Product) {
    //     compareItems = state.compareItems.map((x) =>
    //       x.id === product.id ? Item : x
    //     );
    //     return { ...state, compareItems };
    //   }
    //   compareItems = [ ...state.compareItems, Item];
    //   return { ...state, compareItems };
    // case Compare_ITEM_REMOVE:
    //   compareItems = state.compareItems.filter((x) => x.id !== action.payload);
    //   return { ...state, compareItems};
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
