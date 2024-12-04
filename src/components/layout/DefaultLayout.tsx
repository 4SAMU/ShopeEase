import React from "react";
import Navbar from "../navbar/navbar";
import Footer from "../footer/footer";
import { MainWrapper } from "@/styles/common-styles";

interface DefaultLayoutProps {
  children: React.ReactNode;
}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      <MainWrapper>{children}</MainWrapper>
      <Footer />
    </>
  );
};

export default DefaultLayout;
