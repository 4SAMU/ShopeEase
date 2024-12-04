import React, { useEffect, useState } from "react";
import DefaultLayout from "@/components/layout/DefaultLayout";
import { ProductsCard, ProductsDisplaySection } from "@/styles/main-styles";
import Image from "next/image";
import {
  NoItemsFound,
  OrangeButton,
  OutlinedButton,
} from "@/styles/common-styles";
import { useProducts } from "@/context/productsContext";
import { useRouter } from "next/router";
import { useCart } from "@/context/cartContext";
import CardSkeletonLoader from "@/components/loaders/cardSkeletonLoader";

const Category = () => {
  const { categoryProducts, setProduct, loading } = useProducts();
  const router = useRouter();
  const { cart, handleAddToCart, handleDecreaseItemQuantity } = useCart();

  // Initialize a state variable to track if the component is mounted.
  const [isMounted, setIsMounted] = useState(false);

  // Set the `isMounted` state to true when the component mounts.
  useEffect(() => {
    setIsMounted(true);
  }, [isMounted]);

  //check if products data is available
  if (!loading && categoryProducts.length === 0 && isMounted) {
    return (
      <DefaultLayout>
        <NoItemsFound>
          <h2>oops! currently no products?</h2>
          <p>something might not be right!!!</p>
          <OutlinedButton onClick={() => window.location.reload()}>
            refresh
          </OutlinedButton>
          <OrangeButton onClick={() => router.push("/")}>
            {"go back >>"}
          </OrangeButton>
        </NoItemsFound>
      </DefaultLayout>
    );
  }
  return (
    <DefaultLayout>
      <ProductsDisplaySection sx={{ mt: "-20px" }}>
        {loading ? (
          <CardSkeletonLoader />
        ) : (
          <>
            {categoryProducts &&
              categoryProducts.map((card, index) => (
                <ProductsCard
                  key={index}
                  onClick={() => {
                    router.push(`/product/${card.id}`);
                    setProduct(null);
                  }}
                >
                  <Image src={card.image} alt={""} width={250} height={200} />
                  <header>
                    <h2>{card.title}</h2>
                    <p>${card.price}</p>
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
  );
};

export default Category;
