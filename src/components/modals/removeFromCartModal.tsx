import { useCart } from "@/context/cartContext";
import { RemoveFromCartModalWrapper } from "@/styles/cart-styles";
import { OrangeButton } from "@/styles/common-styles";
import { ClickAwayListener } from "@mui/material";
import React from "react";

interface IRemoveFromCartModal {
  onClose: () => void;
  productId: number;
}

const RemoveFromCartModal: React.FC<IRemoveFromCartModal> = ({
  onClose,
  productId,
}) => {
  const { handleRemoveCartItemCompletely } = useCart();
  return (
    <RemoveFromCartModalWrapper>
      <ClickAwayListener onClickAway={onClose}>
        <div className="modal">
          <h2>Remove from Cart</h2>
          <p>Do you really want to remove this item from cart?</p>
          <OrangeButton
            onClick={(event) => {
              handleRemoveCartItemCompletely(
                {
                  productId: productId,
                },
                event
              );
              onClose();
            }}
          >
            Remove Item
          </OrangeButton>
        </div>
      </ClickAwayListener>
    </RemoveFromCartModalWrapper>
  );
};

export default RemoveFromCartModal;
