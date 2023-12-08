import React from "react";
import WishlistProvider from "./WishlistContext";
import BasketProvider from "./BasketProvider";

function MainProvider({ children }) {
  return (
      <WishlistProvider>
  <BasketProvider>{children}</BasketProvider>
      </WishlistProvider>
  );
}

export default MainProvider;