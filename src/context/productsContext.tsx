import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
  SetStateAction,
} from "react";
import {
  GetAllProducts,
  GetAllCategories,
  GetSingleProductById,
  GetSpecificCategoryProducts,
} from "@/utils/fetcher";
import { IProduct } from "@/types";
import { useRouter } from "next/router";

// Define the structure of the context's state and functions
interface ProductsContextProps {
  products: IProduct[]; // Array of products
  categories: string[]; // Array of product categories
  setProducts: React.Dispatch<SetStateAction<IProduct[]>>;
  product: IProduct | null; // Single product (fetched by ID)
  setProduct: React.Dispatch<SetStateAction<IProduct | null>>;
  categoryProducts: IProduct[];
  setCategoryProducts: React.Dispatch<SetStateAction<IProduct[]>>;
  loading: boolean; // Loading state for API calls
  error: string | null; // Error message if API call fails
  fetchProducts: () => void; // Function to fetch all products
  fetchProductById: (id: number) => void; // Function to fetch a product by ID
  fetchCategories: () => void; // Function to fetch all categories
  fetchCategoryProducts: (category: string) => void; // Function to fetch products by category
}

// Create the ProductsContext with an undefined initial value
const ProductsContext = createContext<ProductsContextProps | undefined>(
  undefined
);

// Custom hook to use the ProductsContext
export const useProducts = () => {
  const context = useContext(ProductsContext);
  if (context === undefined) {
    // Ensure the hook is used within a ProductsProvider
    throw new Error("useProducts must be used within a ProductsProvider");
  }
  return context; // Return the context value
};

// ProductsProvider component to wrap the application
export const ProductsProvider = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  //get query from router
  const { category } = router.query;

  // State variables for products, categories, single product, loading, and error
  const [products, setProducts] = useState<IProduct[]>([]);
  const [categoryProducts, setCategoryProducts] = useState<IProduct[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [product, setProduct] = useState<IProduct | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // Fetch all products from the API
  const fetchProducts = async () => {
    setLoading(true); // Set loading state to true
    setError(null); // Reset error state
    try {
      const data = await GetAllProducts(); // Call the API function
      setProducts(data); // Update the products state
    } catch (err) {
      console.log(err); // Log error for debugging
      setError("Failed to fetch products"); // Set error message
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  // Fetch a single product by ID
  const fetchProductById = async (id: number) => {
    setLoading(true);
    setError(null);
    try {
      const data = await GetSingleProductById(id);
      setProduct(data); // Update the single product state
    } catch (err) {
      console.log(err);
      setError(`Failed to fetch product with ID ${id}`);
    } finally {
      setLoading(false);
    }
  };

  // Fetch all product categories
  const fetchCategories = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await GetAllCategories();
      setCategories(data); // Update the categories state
    } catch (err) {
      console.log(err);
      setError("Failed to fetch categories");
    } finally {
      setLoading(false);
    }
  };

  // Fetch products in a specific category
  const fetchCategoryProducts = async (category: string) => {
    setLoading(true);
    setError(null);
    try {
      const data = await GetSpecificCategoryProducts(category);
      setCategoryProducts(data); // Update the products state with category-specific data
    } catch (err) {
      console.log(err);
      setError(`Failed to fetch products in category ${category}`);
    } finally {
      setLoading(false);
    }
  };

  // Automatically fetch all products when the provider is mounted
  useEffect(() => {
    fetchProducts();
  }, []);

  // Automatically fetch all categories when the provider is mounted
  useEffect(() => {
    fetchCategories();
  }, []);

  //get products by category
  /**
   * Fetch data by category
   * The `category` is passed as a dependency, so the effect runs when it changes.
   * To prevent excessive re-fetching of data, `fetchCategoryProducts` was not passed in the dependency array.
   */
  useEffect(() => {
    if (category) {
      fetchCategoryProducts(String(category).toLowerCase());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category]);

  return (
    // Provide the context value to child components
    <ProductsContext.Provider
      value={{
        products,
        setProducts,
        setCategoryProducts,
        categoryProducts,
        categories,
        product,
        setProduct,
        loading,
        error,
        fetchProducts,
        fetchProductById,
        fetchCategories,
        fetchCategoryProducts,
      }}
    >
      {children} {/* Render child components */}
    </ProductsContext.Provider>
  );
};
