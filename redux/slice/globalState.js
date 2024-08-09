const { createSlice } = require("@reduxjs/toolkit");

const globalState = createSlice({
  initialState: {
    globalState: {
      topRatedMovies: {},
      popularMovies: {},
      upComingMovies: {},
      discoverMovies: {},
      discoverTVShows: {},
    },
  },
  name: "globalState",
  reducers: {
    addGlobalState: (state, payload) => {},
    addPopularMovies: (state, payload) => {
      state.globalState.popularMovies = payload.payload;
    },
    addTopRatedMovies: (state, payload) => {
      state.globalState.topRatedMovies = payload.payload;
    },
    addUpComingMovies: (state, payload) => {
      state.globalState.upComingMovies = payload.payload;
    },
    addDiscoverMovies: (state, payload) => {
      state.globalState.discoverMovies = payload.payload;
    },
    addDiscoverTvShows: (state, payload) => {
      state.globalState.discoverTVShows = payload.payload;
    },
  },
});
export const {
  addPopularMovies,
  addTopRatedMovies,
  addUpComingMovies,
  addDiscoverMovies,
  addDiscoverTvShows,
} = globalState.actions;

export default globalState.reducer;
