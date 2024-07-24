import globalState from "./slice/globalState";

const { configureStore } = require("@reduxjs/toolkit");

const store = configureStore({
  reducer: {
    state: globalState,
  },
});

export default store;
