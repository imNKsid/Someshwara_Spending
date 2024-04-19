import slice from "./spend-slice";
import thunks from "./spend-thunk";
import selectors from "./spend-selector";

export default {
  reducer: slice.reducer,
  ...selectors,
  ...slice.actions,
  ...thunks,
};
