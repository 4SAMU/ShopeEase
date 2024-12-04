import React, { useEffect, useState } from "react";
import {
  NavbarWrapper,
  OutlineTextLogo,
  SearchButton,
  SearchSuggestions,
} from "./navbarStyles";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Link from "next/link";
import { useRouter } from "next/router";
import { useCart } from "@/context/cartContext";
import { useProducts } from "@/context/productsContext";
import { IProduct } from "@/types";

type ISuggestion =
  | { type: "product"; data: IProduct }
  | { type: "category"; data: string };

const Navbar = () => {
  const { products, categories, setProduct, setCategoryProducts } =
    useProducts(); // Access useProducts correctly
  const router = useRouter();
  const { getTotalQuantity } = useCart();

  // Local state
  const [search, setSearch] = useState("");
  const [suggestions, setSuggestions] = useState<ISuggestion[]>([]);
  const [isActiveLink, setIsActiveLink] = useState(false);

  // Search handler
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearch(value);

    if (value.trim() === "") {
      setSuggestions([]);
      return;
    }

    // Filter products by title and categories
    const productMatches = products.filter((product) =>
      product.title.toLowerCase().includes(value.toLowerCase())
    );
    const categoryMatches = categories.filter((category) =>
      category.toLowerCase().includes(value.toLowerCase())
    );

    // Combine results
    const combinedSuggestions = [
      ...productMatches.map((p) => ({ type: "product" as const, data: p })),
      ...categoryMatches.map((c) => ({ type: "category" as const, data: c })),
    ];

    setSuggestions(combinedSuggestions);
  };

  const handleSuggestionClick = (suggestion: ISuggestion) => {
    if (suggestion.type === "product") {
      setProduct(null); //reset before fetching the suggested product
      router.push(`/product/${suggestion.data.id}`);
    } else if (suggestion.type === "category") {
      setCategoryProducts([]); //reset before fetching suggested category
      router.push(`/category/${suggestion.data}`);
    }
    setSearch("");
    setSuggestions([]);
  };

  // Check if current route is /cart
  useEffect(() => {
    if (router.pathname === "/cart") {
      setIsActiveLink(true);
    }
  }, [router]);

  return (
    <NavbarWrapper>
      <Link href="/">
        <OutlineTextLogo>ShopEase</OutlineTextLogo>
      </Link>
      <form className="search-bar" role="search" aria-label="Search ShopEase">
        <SearchIcon />
        <input
          type="text"
          placeholder="Search for products, categories..."
          aria-label="Search products"
          value={search}
          onChange={handleSearchChange}
          onKeyDown={(e) => {
            if (e.key === "Enter") e.preventDefault(); // Disable Enter key
          }}
        />
        <SearchButton>Search</SearchButton>
        {suggestions.length > 0 && (
          <SearchSuggestions>
            {suggestions.map((item, index) => (
              <p
                key={index}
                className="suggested-item"
                onClick={() => handleSuggestionClick(item)}
              >
                {item.type === "product" ? item.data.title : item.data}
              </p>
            ))}
          </SearchSuggestions>
        )}
      </form>
      <button
        className={isActiveLink ? "shopping-cart active" : "shopping-cart"}
        onClick={() => {
          router.push("/cart");
          setIsActiveLink(true);
        }}
      >
        <div className="cart">
          <ShoppingCartOutlinedIcon />
          {getTotalQuantity() > 0 && (
            <span className="cart-count" aria-live="polite">
              {getTotalQuantity()}
            </span>
          )}
        </div>
        <span>Cart</span>
      </button>
    </NavbarWrapper>
  );
};

export default Navbar;
