import axios from "axios";

// Define the base URL
const BASE_URL = "https://fakestoreapi.com";

// Function to fetch all product items from API
export const GetAllProducts = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/products`);
    return response.data; // Return the data
  } catch (error) {
    console.error("Error fetching all products:", error);
    throw error; // Rethrow the error
  }
};

// Function to fetch a single product by ID
export const GetSingleProductById = async (id: number) => {
  try {
    const response = await axios.get(`${BASE_URL}/products/${id}`);
    return response.data; // Return the data
  } catch (error) {
    console.error(`Error fetching product with ID ${id}:`, error);
    throw error; // Rethrow the error
  }
};

// Function to get all categories
export const GetAllCategories = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/products/categories`);
    return response.data; // Return the data
  } catch (error) {
    console.error("Error fetching categories:", error);
    throw error; // Rethrow the error
  }
};

// Function to get products in a specific category
export const GetSpecificCategoryProducts = async (category: string) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/products/category/${category}`
    );
    return response.data; // Return the data
  } catch (error) {
    console.error(`Error fetching products in category ${category}:`, error);
    throw error; // Rethrow the error
  }
};
