import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  orders: [],
};

const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    addItems: (state: any, payload: any) => {
      state.orders.unshift(payload.payload);
    },
    updateItems: (state: any, action: PayloadAction<any>) => {
      console.log(JSON.parse(JSON.stringify(state)));
      const updateOrders = state.orders.map((order: any) => {
        if (order.data?.dish_id === action.payload.data.dish_id) {
          return { ...order, orderCount: action.payload.orderCount };
        }
        return order;
      });
      state.orders = updateOrders;
    },
  },
});

export const { addItems, updateItems } = cartSlice.actions;
export default cartSlice.reducer;
