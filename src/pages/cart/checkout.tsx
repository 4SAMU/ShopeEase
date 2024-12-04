import DefaultLayout from "@/components/layout/DefaultLayout";
import { NoItemsFound, OrangeButton } from "@/styles/common-styles";
import { useRouter } from "next/router";
import React from "react";

const Checkout = () => {
  const router = useRouter();
  return (
    <DefaultLayout>
      <NoItemsFound>
        <h2>work on progress, review later</h2>
        <OrangeButton onClick={() => router.back()}>
          {"go back >>"}
        </OrangeButton>
      </NoItemsFound>
    </DefaultLayout>
  );
};

export default Checkout;
