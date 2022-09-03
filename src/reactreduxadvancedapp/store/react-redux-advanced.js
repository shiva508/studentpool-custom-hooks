import { configureStore } from "@reduxjs/toolkit";
import uiSlice from "./ui-slice";
import cartSlice from "./cart-slice";

const cartAdvancedStore = configureStore({
  reducer: { ui: uiSlice.reducer, cart: cartSlice.reducer },
});
export default cartAdvancedStore;
