const { createSlice } = require("@reduxjs/toolkit");

const globalState = createSlice({
  initialState: {
    globalState: {},
  },
  name: "globalState",
  reducers: {
    addGlobalState: (state, payload) => {},
  },
});

export default globalState.reducer;
