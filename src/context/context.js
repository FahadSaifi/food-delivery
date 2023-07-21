import {createContext, useEffect, useState} from "react";

export const Itemcontext = createContext();

const Appcontext = ({children}) => {
  // All the required states
  const [cartItem, setCartItem] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const [cartCount2, setCartCount] = useState(0);

  // Function to add items to cart
  const handleCartItems = (product, quantity = 1) => {
    let items = [...cartItem];
    let index = items.findIndex(elm => elm.id == product.id);
    if (index !== -1) {
      items[index].quantity += quantity;
    } else {
      product.quantity = quantity;
      items = [...items, product];
    }
    setCartItem(items);
  };

  // Function to remove element from cart
  const handleRemoveFromCart = product => {
    let items = [...cartItem];
    items = items.filter(elm => elm.id !== product.id);
    setCartItem(items);
  };

  // Function for increment and decrement of a item
  const cartCount = (type, product) => {
    let items = [...cartItem];
    let index = items.findIndex(elm => elm.id == product.id);
    if (type == "inc") {
      items[index].quantity += 1;
    } else if (type == "dec") {
      if (items[index].quantity == 1) return;
      items[index].quantity -= 1;
    }
    setCartItem(items);
  };

  // Function to calculate subtotal of the cart
  const subTotal = () => {
    let items = [...cartItem];
    let total = 0;

    items.forEach(elm => {
      total += elm.foodPrice * elm.quantity;
    });
    setCartTotal(total);
  };

  // Using useEffect hook for calling subtotal function
  useEffect(() => {
    let count = 0;
    cartItem.forEach(elm => (elm = count += elm.quantity));
    setCartCount(count);

    subTotal();
  }, [cartItem]);

  return (
    <>
      <Itemcontext.Provider
        value={{
          handleCartItems,
          cartItem,
          handleRemoveFromCart,
          cartCount,
          cartTotal,
          cartCount2,
        }}
      >
        {children}
      </Itemcontext.Provider>
    </>
  );
};

export default Appcontext;
