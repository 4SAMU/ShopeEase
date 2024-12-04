import { ICartItem } from "@/types";
import { GetSingleProductById } from "./fetcher";

// Function to fetch all cart products
export const getCartProducts = async (cart: {
  [key: number]: number;
}): Promise<ICartItem[]> => {
  try {
    // Create an array of product fetch promises
    const productPromises = Object.keys(cart).map(async (productId) => {
      const id = Number(productId);
      const product = await GetSingleProductById(id); // Fetch product by ID
      return { ...product, quantity: cart[id] }; // Add quantity to the product data
    });

    // Wait for all product fetches to complete
    const products = await Promise.all(productPromises);
    return products; // Return the products with quantity info
  } catch (error) {
    console.error("Error fetching cart products:", error);
    throw error;
  }
};
