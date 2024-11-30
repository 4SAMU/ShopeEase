import React from "react";
import { NavbarWrapper, OutlineTextLogo, SearchButton } from "./navbarStyles";
import SearchIcon from "@mui/icons-material/Search";

const Navbar = () => {
  return (
    <NavbarWrapper>
      <OutlineTextLogo>ShopeEase</OutlineTextLogo>
      <div className="search-bar">
        <SearchIcon />
        <input type="text" placeholder="what are you looking for..." />
        <SearchButton>Search</SearchButton>
      </div>
    </NavbarWrapper>
  );
};

export default Navbar;
