import { ICartItem } from "@/types";
import { getCartProducts } from "@/utils/getCartProducts";
import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

// Define the cart context type with relevant functions
interface CartContextType {
  cart: { [key: number]: number }; // Cart object where keys are product IDs and values are quantities
  handleAddToCart: (
    props: { productId: number },
    event: React.MouseEvent
  ) => void; // Function to add items to the cart
  handleDecreaseItemQuantity: (
    props: { productId: number },
    event: React.MouseEvent
  ) => void; // Function to decrease the quantity of an item in the cart
  handleRemoveCartItemCompletely: (
    props: { productId: number },
    event: React.MouseEvent
  ) => void; // Function to completely remove an item from the cart
  getTotalQuantity: () => number; // Function to get the total quantity of items in the cart
  cartProductItems: ICartItem[]; // Array of cart items with detailed product information
  getTotalPrice: () => number; //Function to get price summation of all cart items
}

// Create the context with a default value of undefined
const CartContext = createContext<CartContextType | undefined>(undefined);

// Custom hook to use the CartContext
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

// CartProvider component to wrap the app and provide cart state
interface CartProviderProps {
  children: ReactNode; // Children components wrapped by the CartProvider
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  // State to store the cart items (product ID as key and quantity as value)
  const [cart, setCart] = useState<{ [key: number]: number }>({});
  // State to store cart product items (detailed product information fetched from the API)
  const [cartProductItems, setCartProductItems] = useState<ICartItem[]>([]);

  // Load cart from localStorage on the client-side only
  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart)); // Parse and load the cart data from localStorage
    }
  }, []); // Empty dependency array ensures it runs only on component mount (client-side)

  // Sync cart to localStorage whenever it changes
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("cart", JSON.stringify(cart)); // Store the updated cart in localStorage
    }
  }, [cart]); // Runs whenever the cart state changes

  // Fetch cart product items when cart changes
  useEffect(() => {
    const fetchCartProducts = async () => {
      const products = await getCartProducts(cart); // Fetch detailed product info based on cart items
      setCartProductItems(products); // Update the cartProductItems state
    };
    fetchCartProducts();
  }, [cart]); // Runs whenever the cart state changes

  // Function to handle adding items to the cart
  const handleAddToCart = (
    { productId }: { productId: number },
    event: React.MouseEvent
  ) => {
    event.stopPropagation(); // Stop propagation of the event to avoid unwanted side effects
    setCart((prev) => {
      const newCart = { ...prev, [productId]: (prev[productId] || 0) + 1 };
      return newCart; // Add or increment the quantity of the product in the cart
    });
  };

  // Function to handle decreasing the quantity of an item in the cart
  const handleDecreaseItemQuantity = (
    { productId }: { productId: number },
    event: React.MouseEvent
  ) => {
    event.stopPropagation(); // Stop propagation of the event to avoid unwanted side effects
    setCart((prev) => {
      const newCart = { ...prev };
      if (newCart[productId] > 1) {
        newCart[productId] -= 1; // Decrease quantity if more than 1
      } else {
        delete newCart[productId]; // Remove the item if quantity reaches 0
      }
      return newCart; // Update the cart with the new state
    });
  };

  // Function to completely remove an item from the cart
  const handleRemoveCartItemCompletely = (
    { productId }: { productId: number },
    event: React.MouseEvent
  ) => {
    event.stopPropagation(); // Stop propagation of the event to avoid unwanted side effects
    setCart((prev) => {
      const newCart = { ...prev };
      delete newCart[productId]; // Completely remove the item from the cart
      return newCart; // Update the cart with the new state
    });
  };

  // Function to calculate the total quantity of items in the cart
  const getTotalQuantity = () => {
    return Object.values(cart).reduce((sum, quantity) => sum + quantity, 0); // Sum up all quantities in the cart
  };

  //get SubTotal for all items in cart
  const getTotalPrice = () => {
    return Object.entries(cart).reduce((total, [productId, quantity]) => {
      const product = cartProductItems.find(
        (item) => item.id === parseInt(productId)
      ); // Find the product by ID
      if (product) {
        return total + product.price * quantity; // Add the product of price and quantity to the total
      }
      return total; // If no matching product is found, skip it
    }, 0); // Start the total at 0
  };

  return (
    <CartContext.Provider
      value={{
        cart, // Current state of the cart
        handleAddToCart, // Function to add items to the cart
        handleDecreaseItemQuantity, // Function to decrease item quantity
        handleRemoveCartItemCompletely, // Function to completely remove an item from the cart
        getTotalQuantity, // Function to get total quantity
        cartProductItems, // Detailed cart product items
        getTotalPrice, //Function to get prices summation
      }}
    >
      {children} {/* Render child components */}
    </CartContext.Provider>
  );
};
