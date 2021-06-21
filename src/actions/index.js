import {
  SET_PRODUCT_ITEMS,
  SET_NAVBAR_ACTIVEITEM,
  CART_ITEM_ADD,
  CART_ITEM_REMOVE,
  // Compare_ITEM_ADD,
  // Compare_ITEM_REMOVE,
  SET_PRODUCT_DETAIL,
  SET_PAGE_CONTENT,
  BEGIN_LOGIN_REQUEST,
  SUCCESS_LOGIN_REQUEST,
  FAIL_LOGIN_REQUEST,
  REMEMBER_LOGIN,
  BEGIN_REGISTER_REQUEST,
  SUCCESS_REGISTER_REQUEST,
  FAIL_REGISTER_REQUEST,
  BEGIN_PRODUCTS_FEED,
  SUCCESS_PRODUCTS_FEED,
  FAIL_PRODUCTS_FEED,
  BEGIN_UPDATE_USERINFO,
  SUCCESS_UPDATE_USERINFO,
  FAIL_UPDATE_USERINFO,
  LOGOUT_REQUEST,
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

import {
  getProductById,
  getProducts,
  signInWithEmailPassword,
  registerWithEmailPassword,
  updateUserInfoApi,
  signOut,
  feedProducts,
  createComment,
  getComments,
  addOrderApi,
} from "../api";

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

// Login Actions
export const loginToFirebase = async (dispatch, userInfo) => {
  dispatch({ type: BEGIN_LOGIN_REQUEST });
  try {
    const user = await signInWithEmailPassword(userInfo.email, userInfo.password);
    dispatch({
      type: SUCCESS_LOGIN_REQUEST,
      payload: user.user.providerData[0],
    })
    return user;
  } catch (e) {
    dispatch({
      type: FAIL_LOGIN_REQUEST,
      payload: e.message
    })
    console.log(e)
    return null;
  }
}

export const rememberLoginUser = (dispatch, remember) => {
  dispatch({
    type: REMEMBER_LOGIN,
    payload: remember,
  })
}

// Register Actions
export const registerToFirebase = async (dispatch, userInfo) => {
  dispatch({ type: BEGIN_REGISTER_REQUEST });
  try {
    const user = await registerWithEmailPassword(userInfo.email, userInfo.password, userInfo.name);
    console.log(user)
    dispatch({
      type: SUCCESS_REGISTER_REQUEST,
      payload: user.providerData[0],
    })
    return user;
  } catch (e) {
    dispatch({
      type: FAIL_REGISTER_REQUEST,
      payload: e.message
    })
    console.log(e)
    return null;
  }
}

// Profile Actions
export const updateUserInfo = async (dispatch, userInfo) => {
  dispatch({ type: BEGIN_UPDATE_USERINFO });
  try {
    const user = await updateUserInfoApi(
      userInfo.email,
      userInfo.password,
      userInfo.name
    );
    dispatch({
      type: SUCCESS_UPDATE_USERINFO,
      payload: user.providerData[0],
    });
  } catch (e) {
    dispatch({
      type: FAIL_UPDATE_USERINFO,
      payload: e.message,
    });
    console.log(e);
  }
};


// Logout Actions
export const logoutFromFirebase = async (dispatch) => {
  signOut();
  dispatch({ type: LOGOUT_REQUEST });
}

// Feed Action
export const feedJSONToFirebase = async (dispatch) => {
  dispatch({ type: BEGIN_PRODUCTS_FEED });
  try {
    await feedProducts();
    dispatch({ type: SUCCESS_PRODUCTS_FEED });
  } catch (error) {
    console.log(error);
    dispatch({ type: FAIL_PRODUCTS_FEED, payload: error });
  }
}

// Shipping Address
export const saveShippingAddress = (dispatch, shippingAddress) => {
  dispatch({
    type: SAVE_SHIPPING_ADDRESS,
    payload: shippingAddress,
  });
  localStorage.setItem('shippingAddress', JSON.stringify(shippingAddress));
}

// Payment Method
export const savePaymentMethod = (dispatch, paymentMethod) => {
  dispatch({
    type: SAVE_PAYMENT_METHOD,
    payload: paymentMethod.paymentMethod,
  });
}

// Place Order Action
export const addOrdertoFirebase = async (dispatch, cart) => {
  dispatch({ type: BEGIN_ORDER_CREATE });
  try {
    const item = {
      orderItems: cart.cartItems,
      shippingAddress: cart.shippingAddress,
      paymentMethod: cart.paymentMethod,
      itemsPrice: cart.itemsPrice,
      shippingPrice: cart.shippingPrice,
      taxPrice: cart.taxPrice,
      totalPrice: cart.totalPrice,
    };
    const orderInfo = await addOrderApi(item);
    dispatch({
      type: SUCCESS_ORDER_CREATE,
      payload: orderInfo
    });
    localStorage.setItem('orderInfo', JSON.stringify(orderInfo));
    return orderInfo;
  } catch (error) {
    console.log(error);
    dispatch({ type: FAIL_ORDER_CREATE, payload: error });
    return null;
  }
}
// Comment on Product
export const CommentRequest = async (dispatch, content) => {
  dispatch({ type: BEGIN_COMMENT_REQUEST });
  try {
    const postInfo = await createComment(content);
    dispatch({
      type: SUCCESS_COMMENT_REQUEST,
      payload: postInfo
    });
    return postInfo;
  } catch (error) {
    console.log(error);
    dispatch({ type: FAIL_COMMENT_REQUEST, payload: error });
    return null;
  }
}

export const setCommentList = async (dispatch) => {
  const posts = await getComments();
  dispatch({
    type: SET_COMMENTS_LIST,
    payload: { posts },
  });
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