import config from "./config";

const { default: axios } = require("axios");

export const getgeneres = () => {
  return axios({
    method: "GET",
    url: `${config.baseURL}genre/movie/list`,
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${config.token}`,
    },
  });
};

export const getMovies = () => {
  return axios({
    method: "GET",
    url: `${config.baseURL}discover/movie`,
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${config.token}`,
    },
  });
};
export const getPopularTvShows = () => {
  return axios({
    method: "GET",
    url: `${config.baseURL}tv/popular?language=en-US&page=1`,
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${config.token}`,
    },
  });
};
export const getTrendingAll = () => {
  return axios({
    method: "GET",
    url: `${config.baseURL}trending/all/day?language=en-US`,
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${config.token}`,
    },
  });
};
export const getDiscoverTvShows = () => {
  return axios({
    method: "GET",
    url: `${config.baseURL}discover/tv`,
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${config.token}`,
    },
  });
};
export const getMoviesById = (id) => {
  return axios({
    method: "GET",
    url: `${config.baseURL}movie/${id}`,
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${config.token}`,
    },
  });
};
export const getUpcomingMovies = (page) => {
  return axios({
    method: "GET",
    url: `${config.baseURL}movie/upcoming?language=en-US&page=${
      page ? page : 1
    }`,
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${config.token}`,
    },
  });
};
export const getTopRatedMovies = (page) => {
  return axios({
    method: "GET",
    url: `${config.baseURL}movie/top_rated?language=en-US&page=${
      page ? page : 1
    }`,
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${config.token}`,
    },
  });
};
export const getNowPlayingMovies = (page) => {
  return axios({
    method: "GET",
    url: `${config.baseURL}movie/now_playing?language=en-US&page=${
      page ? page : 1
    }`,
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${config.token}`,
    },
  });
};
