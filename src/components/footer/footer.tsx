import React from "react";
import {
  DarkLightModeWrapper,
  FooterWrapper,
  QuickLinks,
} from "./footerStyles";
import { OrangeButton } from "@/styles/common-styles";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import ArrowUpwardOutlinedIcon from "@mui/icons-material/ArrowUpwardOutlined";
import { useTheme } from "@/context/themeContext";
import { CustomIconButton } from "@/styles/common-styles";

const Footer = () => {
  const { theme, toggleTheme } = useTheme();

  // Subscribe to newsletter handler
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Additional subscription logic
  };

  // Scroll to top handler
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Adds a smooth scroll effect
    });
  };

  return (
    <FooterWrapper>
      <QuickLinks>
        <h2>Company</h2>
        <a href="#">About Us</a>
        <a href="#">Shipping & Delivery</a>
        <a href="#">Privacy Policy</a>
        <a href="#">Cookies Policy</a>
        <a href="#">Return Policy</a>
      </QuickLinks>
      <QuickLinks>
        <h2>Quick Access</h2>
        <a href="#">Electronics</a>
        <a href="#">Jewelry</a>
        <a href="#">Men&#39;s Clothings</a>
        <a href="#">Women&#39;s Clothings</a>
      </QuickLinks>
      <QuickLinks>
        <h2>New to ShopEase?</h2>
        <p>Subscribe to our newsletter to get updates on our latest offers!</p>
        <form
          aria-label="Subscribe ShopEase Newsletter"
          onSubmit={handleSubscribe}
        >
          <input
            type="email"
            id="email"
            name="email"
            placeholder="you@example.com"
            required
            aria-label="Enter your email"
          />
          <OrangeButton type="submit">Subscribe</OrangeButton>
        </form>
      </QuickLinks>
      <DarkLightModeWrapper>
        <CustomIconButton onClick={handleScrollToTop} title="back to top">
          <ArrowUpwardOutlinedIcon />
        </CustomIconButton>
        <CustomIconButton onClick={toggleTheme}>
          {theme === "light" ? (
            <LightModeOutlinedIcon />
          ) : (
            <DarkModeOutlinedIcon />
          )}
        </CustomIconButton>
      </DarkLightModeWrapper>
    </FooterWrapper>
  );
};

export default Footer;
