import {
  SET_PRODUCT_ITEMS,
  SET_NAVBAR_ACTIVEITEM,
  CART_ITEM_ADD,
  CART_ITEM_REMOVE,
  Compare_ITEM_ADD,
  Compare_ITEM_REMOVE,
  SET_PRODUCT_DETAIL,
  SET_PAGE_CONTENT,
} from "../utils/constants";
import { getProductById, getProducts } from "../api";

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

//mutipule json files for each category
export const pageContentsSet = (dispatch, products) => {
  dispatch({
    type: SET_PRODUCT_ITEMS,
    payload: products,
  });
};

//in allProducts add a category tag for page to be set with different items
export const setProductDetail = async (dispatch, productId, qty) => {
  const product = await getProductById(productId);
  if (qty === 0)
    dispatch({
      type: SET_PRODUCT_DETAIL,
      payload: {
        product,
      }
    })
  else
    dispatch({
      type: SET_PRODUCT_DETAIL,
      payload: {
        product,
        qty,
      }
    })
}

export const setPage = async (dispatch, url, title) => {
  let products = [];
  // dispatch({
  //   type: SET_PAGE_TITLE,
  //   payload: title,
  // });
  try {
    products = await getProducts(url);
    dispatch({
      type: SET_PAGE_CONTENT,
      payload: { title, products },
    });
    dispatch({
      type: SET_NAVBAR_ACTIVEITEM,
      payload: url,
    });
  } catch (error) {
    console.log(error);
  }
}

// export const compareItemAdd = (dispatch, product, qty) => {
//   const item = {
//     id: product.id,
//     image: product.image,
//     name: product.name,
//     description: product.description,
//     price: product.price,
//     qty,
//   };
//   dispatch({
//     type: Compare_ITEM_ADD,
//     payload: item,
//   });
// };

// export const compareItemRemove = (dispatch, productId) => {
//   dispatch({
//     type: Compare_ITEM_REMOVE,
//     payload: productId,
//   });
// };