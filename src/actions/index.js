import {
  SET_PRODUCT_ITEMS,
  SET_NAVBAR_ACTIVEITEM,
  CART_ITEM_ADD,
  CART_ITEM_REMOVE,
  Compare_ITEM_ADD,
  Compare_ITEM_REMOVE,
} from "../utils/constants";

export const pageContentsSet = (dispatch, products) => {
  dispatch({
    type: SET_PRODUCT_ITEMS,
    payload: products,
  });
};

export const activeNavItemSet = (dispatch, activeNavItem) => {
  dispatch({
    type: SET_NAVBAR_ACTIVEITEM,
    payload: activeNavItem,
  });
};

export const cartItemAdd = (dispatch, product, qty) => {
  const item = {
    id: product.id,
    name: product.name,
    image: product.image,
    price: product.price,
    countInStock: product.countInStock,
    qty,
  };
  dispatch({
    type: CART_ITEM_ADD,
    payload: item,
  });
};

export const cartItemRemove = (dispatch, productId) => {
  dispatch({
    type: CART_ITEM_REMOVE,
    payload: productId,
  });
};

export const compareItemAdd = (dispatch, product, qty) => {
  const item = {
    id: product.id,
    image: product.image,
    name: product.name,
    description: product.description,
    price: product.price,
    qty,
  };
  dispatch({
    type: Compare_ITEM_ADD,
    payload: item,
  });
};

export const compareItemRemove = (dispatch, productId) => {
  dispatch({
    type: Compare_ITEM_REMOVE,
    payload: productId,
  });
};
