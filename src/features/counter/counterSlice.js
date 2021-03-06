import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "counter",
  initialState: {
    value: 4,
    phrase: "ok",
    cart: []
  },
  reducers: {
    increment1: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 2;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    static1: (state) => {
      state.value = 17;
      state.phrase = "gooood";
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
    addcart: (state, action) => {
      let res = action.payload;
      //console.log(res.value);
      let indexDel = state.cart.findIndex((item) => item.value == res.value);
      console.log(indexDel);
      if (indexDel == -1) {
        state.cart.push({ value: res.value, count: 1 });
      } else {
        state.cart[indexDel].count += 1;
      }
      console.log(action.payload);
    }
  }
});

export const {
  increment1,
  decrement,
  incrementByAmount,
  static1,
  addcart
} = slice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
export const incrementAsync = (amount) => (dispatch) => {
  setTimeout(() => {
    dispatch(incrementByAmount(amount));
  }, 1000);
};

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectCount = (state) => state.counter.value;
export const selectPhrase = (state) => state.counter.phrase;
export const selectCart = (state) => state.counter.cart;
export default slice.reducer;
