import DefaultLayout from "@/components/layout/DefaultLayout";
import {
  CartItems,
  CartSummary,
  CartsWrapper,
  RemoveButton,
} from "@/styles/cart-styles";
import { NoItemsFound, OrangeButton } from "@/styles/common-styles";
import { Box, useTheme } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";
import RemoveFromCartIcon from "@mui/icons-material/DeleteOutlineOutlined";
import RemoveFromCartModal from "@/components/modals/removeFromCartModal";
import ShoppingCart from "@mui/icons-material/ShoppingCartOutlined";
import { useRouter } from "next/router";
import { useCart } from "@/context/cartContext";
import { useProducts } from "@/context/productsContext";

const Cart = () => {
  //hooks
  const theme = useTheme();
  const router = useRouter();
  const {
    cart,
    cartProductItems,
    getTotalQuantity,
    handleAddToCart,
    handleDecreaseItemQuantity,
    getTotalPrice,
  } = useCart();
  const { setProduct } = useProducts();

  // State for opening and closing "Remove from Cart" modal
  const [openRemoveModal, setOpenRemoveModal] = useState<{
    isOpen: boolean;
    productId: number | null; // 'productId' can be null if no product is selected
  }>({
    isOpen: false,
    productId: null, // Default to null when no product is selected
  });

  return (
    <DefaultLayout>
      {getTotalQuantity() > 0 ? (
        <CartsWrapper>
          <CartItems>
            <h2
              style={{
                position: "sticky",
                bottom: 0,
              }}
            >
              Cart ({getTotalQuantity()})
            </h2>
            {cartProductItems.map((cartItem, index) => (
              <div className="column_items" key={index}>
                <div className="items">
                  <Image src={cartItem.image} alt="" width={100} height={100} />
                  <article
                    className="row_items article link-hover"
                    onClick={() => {
                      router.push(`/product/${cartItem.id}`);
                      setProduct(null);
                    }}
                  >
                    <h3>{cartItem.title}</h3>
                    <p className="price">$.{cartItem.price}</p>
                  </article>
                </div>
                <div
                  className="row_items"
                  style={{
                    justifyContent: "space-between",
                    alignItems: "self-end",
                  }}
                >
                  <RemoveButton
                    onClick={() =>
                      setOpenRemoveModal({
                        isOpen: true,
                        productId: Number(cartItem.id),
                      })
                    }
                  >
                    <RemoveFromCartIcon />
                    Remove
                  </RemoveButton>
                  <Box
                    sx={{
                      display: "flex",
                      gap: "20px",
                      alignItems: "center",
                      button: {
                        fontWeight: "bold",
                        fontSize: "16px",
                      },
                    }}
                  >
                    <OrangeButton
                      disabled={cart[cartItem.id] === 1}
                      onClick={(event) =>
                        handleDecreaseItemQuantity(
                          {
                            productId: Number(cartItem.id),
                          },
                          event
                        )
                      }
                    >
                      -
                    </OrangeButton>
                    {cart[cartItem.id]}
                    <OrangeButton
                      onClick={(event) =>
                        handleAddToCart(
                          {
                            productId: Number(cartItem.id),
                          },
                          event
                        )
                      }
                    >
                      +
                    </OrangeButton>
                  </Box>
                </div>
              </div>
            ))}
          </CartItems>
          <CartSummary>
            <h2 style={{ borderBottom: `1px solid ${theme.palette.divider}` }}>
              Cart Summary
            </h2>

            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "baseline",
                justifyContent: "space-between",
                gap: "10px",
                textAlign: "bottom",
                mt: "10px",
              }}
            >
              <span>Subtotal</span>
              <p className="price">$.{getTotalPrice().toFixed(2)}</p>
            </Box>
            <OrangeButton
              sx={{ mt: "20px" }}
              onClick={() => router.push("/cart/checkout")}
            >
              CHECKOUT ($.{getTotalPrice().toFixed(2)})
            </OrangeButton>
          </CartSummary>
        </CartsWrapper>
      ) : (
        <NoItemsFound>
          <ShoppingCart />
          <h2>Your cart is Empty</h2>
          <p>
            Give your cart a purpose-- fill it with items: Clothes, Jeweleries,
            Electronics, Groceries...
          </p>
          <OrangeButton onClick={() => router.push("/")}>
            Start Shopping
          </OrangeButton>
        </NoItemsFound>
      )}

      {/*Remove Modal*/}
      {openRemoveModal.isOpen && (
        <RemoveFromCartModal
          onClose={() =>
            setOpenRemoveModal({
              isOpen: false,
              productId: null,
            })
          }
          productId={Number(openRemoveModal.productId)}
        />
      )}
    </DefaultLayout>
  );
};

export default Cart;
