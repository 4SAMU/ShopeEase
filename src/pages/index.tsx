import CarouselComponent from "@/components/carousel-container";
import DefaultLayout from "@/components/layout/DefaultLayout";
import CardSkeletonLoader from "@/components/loaders/cardSkeletonLoader";
import { useCart } from "@/context/cartContext";
import { useProducts } from "@/context/productsContext";
import { NoItemsFound, OrangeButton } from "@/styles/common-styles";
import {
  CardButton,
  CategoryAndCarouselWrapper,
  CategoryCardWrapper,
  ProductsCard,
  ProductsDisplaySection,
} from "@/styles/main-styles";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const categories = [
  {
    name: "Electronics",
    imageUrl: "/assets/computer-100.svg",
    alt: "electronics",
    path: "/category/Electronics",
  },
  {
    name: "Jewelery",
    imageUrl: "/assets/jewelry-100.svg",
    alt: "jewelry",
    path: "/category/Jewelery",
  },
  {
    name: "Men's Clothing",
    imageUrl: "/assets/suit-100.svg",
    alt: "men's clothing",
    path: "/category/Men's Clothing",
  },
  {
    name: "Women's Clothing",
    imageUrl: "/assets/dress-100.svg",
    alt: "women's clothing",
    path: "/category/women's clothing",
  },
];

export default function Home() {
  //hooks
  const router = useRouter();
  const { products, loading, setProduct, setCategoryProducts } = useProducts();
  const { cart, handleAddToCart, handleDecreaseItemQuantity } = useCart();

  //local states
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isMounted, setIsMounted] = useState(false); // Initialize a state variable to track if the component is mounted.

  // Set the `isMounted` state to true when the component mounts.
  useEffect(() => {
    setIsMounted(true);
  }, [isMounted]);

  //check if products exists
  if (!loading && products.length === 0 && isMounted) {
    return (
      <DefaultLayout>
        <NoItemsFound>
          <h2>oops! currently no products?</h2>
          <p>something might not be right!!!</p>
          <OrangeButton onClick={() => window.location.reload()}>
            refresh
          </OrangeButton>
        </NoItemsFound>
      </DefaultLayout>
    );
  }

  return (
    <>
      <Head>
        <title>ShopEase</title>
        <meta
          name="description"
          content="ShopEase is a fictional e-commerce store that sells exclusive products."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DefaultLayout>
        <CategoryAndCarouselWrapper>
          <CategoryCardWrapper>
            <h1>Browse by Categories</h1>

            <div className="category-card">
              {categories.map((category, index) => (
                <CardButton
                  key={index}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  isHovered={hoveredIndex === index}
                  onClick={() => {
                    router.push(category.path);
                    setCategoryProducts([]);
                  }}
                >
                  <Image
                    className="category-image"
                    src={category.imageUrl}
                    alt={category.alt}
                    width={50}
                    height={50}
                  />
                  <span className="category-name">{category.name}</span>
                </CardButton>
              ))}
            </div>
          </CategoryCardWrapper>
          <CarouselComponent />
        </CategoryAndCarouselWrapper>
        <ProductsDisplaySection>
          {loading ? (
            <CardSkeletonLoader />
          ) : (
            <>
              {products &&
                products.map((card, index) => (
                  <ProductsCard
                    key={index}
                    onClick={() => {
                      router.push(`/product/${card.id}`);
                      setProduct(null);
                    }}
                  >
                    <Image src={card.image} alt="" width={250} height={200} />
                    <header>
                      <h2>{card.title}</h2>
                      <p>$.{card.price}</p>
                    </header>
                    {cart[card.id] ? (
                      <div className="add_remove_from_cart">
                        <OrangeButton
                          onClick={(event) =>
                            handleDecreaseItemQuantity(
                              {
                                productId: card.id,
                              },
                              event
                            )
                          }
                        >
                          -
                        </OrangeButton>
                        {cart[card.id]}
                        <OrangeButton
                          onClick={(event) =>
                            handleAddToCart(
                              {
                                productId: card.id,
                              },
                              event
                            )
                          }
                        >
                          +
                        </OrangeButton>
                      </div>
                    ) : (
                      <OrangeButton
                        onClick={(event) =>
                          handleAddToCart(
                            {
                              productId: card.id,
                            },
                            event
                          )
                        }
                        className="add_remove_from_cart"
                      >
                        Add to cart
                      </OrangeButton>
                    )}
                  </ProductsCard>
                ))}
            </>
          )}
        </ProductsDisplaySection>
      </DefaultLayout>
    </>
  );
}
