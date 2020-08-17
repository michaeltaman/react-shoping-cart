import {ADD_TO_CART, REMOVE_FROM_CART}  from "../type";

export const addToCart = (product) => (dispatch, getState) => {
    const cartItems = getState().cart.cartItems.slice();
    let alreadyInCart = false;
    cartItems.forEach(x => {
      console.log(x)
      if(x._id === product._id) {
        x.count++;
        alreadyInCart = true;
      }
    })
    if(!alreadyInCart){     
      cartItems.push({...product, count: 1});
      console.log(cartItems)
    }

    dispatch({
        type: ADD_TO_CART,
        payload: { cartItems },
    });
    
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
}


export const removeFromCart = (product) => (dispatch, getState) =>  {

    const cartItems = getState().cart.cartItems.slice().filter(
      (x) =>  x._id !== product._id
    ); 
    dispatch({
        type: REMOVE_FROM_CART,
        payload: { cartItems }
    });

    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  };