import DefaultLayout from "@/components/layout/DefaultLayout";
import ProductSkeletonLoader from "@/components/loaders/productSkeletonLoader";
import { useCart } from "@/context/cartContext";
import { useProducts } from "@/context/productsContext";
import { NoItemsFound, OrangeButton } from "@/styles/common-styles";
import { DetailedProductsWrappper } from "@/styles/main-styles";
import { Rating } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const Product = () => {
  //hooks
  const router = useRouter(); //get query from router
  const { productId } = router.query;
  const { product, fetchProductById, loading } = useProducts();
  const { cart, handleAddToCart, handleDecreaseItemQuantity } = useCart();

  /**
   * Fetch data by productId
   * The `productId` is passed as a dependency, so the effect runs when it changes.
   * To prevent excessive re-fetching of data, `fetchProductById` was not passed in the dependency array.
   */
  useEffect(() => {
    if (productId) {
      fetchProductById(Number(productId));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productId]);

  // Initialize a state variable to track if the component is mounted.
  const [isMounted, setIsMounted] = useState(false);

  // Set the `isMounted` state to true when the component mounts.
  useEffect(() => {
    setIsMounted(true);
  }, [isMounted]);

  //check if product by the id exists
  if (!loading && !product && isMounted) {
    return (
      <DefaultLayout>
        <NoItemsFound>
          <h2>oops! product not found!!!</h2>
          <OrangeButton onClick={() => router.push("/")}>
            {"go back >>"}
          </OrangeButton>
        </NoItemsFound>
      </DefaultLayout>
    );
  }

  return (
    <DefaultLayout>
      {loading ? (
        <ProductSkeletonLoader />
      ) : (
        <>
          {product && (
            <DetailedProductsWrappper>
              <div className="top_section">
                <Image
                  src={product.image as string}
                  alt=""
                  width={300}
                  height={300}
                  loading="lazy"
                />
                <div className="right_section">
                  <h2>{product.title}</h2>
                  <p className="price">${product.price}</p>
                  <Rating
                    name="read-only"
                    value={product.rating?.rate}
                    readOnly
                  />
                  {cart[Number(productId)] ? (
                    <div
                      style={{
                        display: "flex",
                        gap: "20px",
                        alignItems: "center",
                      }}
                    >
                      <OrangeButton
                        onClick={(event) =>
                          handleDecreaseItemQuantity(
                            {
                              productId: Number(productId),
                            },
                            event
                          )
                        }
                      >
                        -
                      </OrangeButton>
                      {cart[Number(productId)]}
                      <OrangeButton
                        onClick={(event) =>
                          handleAddToCart(
                            {
                              productId: Number(productId),
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
                            productId: Number(productId),
                          },
                          event
                        )
                      }
                      sx={{ width: "200px" }}
                    >
                      Add to cart
                    </OrangeButton>
                  )}
                </div>
              </div>

              <div className="about_product">
                <h3>About this product</h3>
                <p>{product.description}</p>
              </div>
            </DetailedProductsWrappper>
          )}
        </>
      )}
    </DefaultLayout>
  );
};

export default Product;
