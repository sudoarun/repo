"use client";
import MovieCard from "@/components/Cards/movieCard";
import MoviePoster from "@/components/home/moviePoster";
import NavHome from "@/components/home/NavHome";
import RightBar from "@/components/home/RightBar";
import SideBar from "@/components/sideBar/sideBar";
import { getMovies, getUpcomingMovies } from "@/utils/api";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import React, { useEffect, useState } from "react";

const Page = () => {
  const [movies, setMovies] = useState([]);
  const [getMoviesData, setGetMoviesData] = useState("");
  const [upcoming, setUpComing] = useState([]);
  const getMoviesFunc = () => {
    getMovies()
      .then((data) => {
        setMovies(data?.data?.results);
        setGetMoviesData(data);
      })
      .catch((e) => console.log(e));
  };
  const upComingMovies = () => {
    getUpcomingMovies()
      .then((res) => {
        setUpComing(res?.data?.results);
      })
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    getMoviesFunc();
    upComingMovies();
  }, []);
  return (
    <section className="pt-8 bg-black">
      <div className="flex justify-center">
        <SideBar />
        <div className="container flex-auto w-3/5 mb-3">
          <div className="bg-black text-white px-4">
            <div>
              <NavHome />
            </div>
            <div className="flex justify-center mt-3">
              <Splide className="w-full customBtnCarousel px-3">
                {upcoming?.map((el) => (
                  <SplideSlide key={el.id}>
                    <MoviePoster data={el} />
                  </SplideSlide>
                ))}
              </Splide>
            </div>
            <div>
              <h1 className="ms-4 my-6 text-2xl">Popular on Honey Movies</h1>
              <div className="grid grid-cols-3 gap-5 ">
                {movies?.map((el) => (
                  <MovieCard key={el.id} data={el} />
                ))}
              </div>
            </div>
          </div>
        </div>
        <RightBar />
      </div>
    </section>
  );
};

export default Page;
