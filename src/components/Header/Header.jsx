import React from "react";
import SearchBar from "../SearchBar";
import logo from "../assets/logo/logo-boolflix.webp";
const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-black">
      <img src={logo} alt="Boolflix Logo" className="w-28" />
      <SearchBar />
    </header>
  );
};

export default Header;
