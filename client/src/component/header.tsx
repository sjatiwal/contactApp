import React from "react";
import { useLocation } from "react-router-dom";
const Header = () => {
  const location = useLocation();

  return (
    <div className="bg-blue-500 flex items-center justify-center h-20 text-2xl relative z-30">
      {location.pathname === "/chart&Map" ? "Charts And Maps" : "Contact Page"}
    </div>
  );
};

export default Header;
