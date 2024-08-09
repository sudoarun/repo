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
    <section className="h-screen">
      <div class="grid md:grid-cols-5 grid-cols-1  h-full">
        <div class="col-span-1 pt-8 hidden md:block relative">
          <SideBar />
        </div>

        <div class="col-span-3 pt-8 ">
          <div className="bg-black text-white px-4 w-full">
            <div>
              <NavHome />
            </div>
            <div className="flex justify-center mt-3">
              <Splide className="w-full customBtnCarousel px-0 sm:px-3">
                {upcoming?.map((el) => (
                  <SplideSlide key={el.id}>
                    <MoviePoster data={el} />
                  </SplideSlide>
                ))}
              </Splide>
            </div>
            <div>
              <h1 className="ms-4 my-6 text-2xl">Popular on Honey Movies</h1>
              <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-5">
                {movies?.map((el) => (
                  <MovieCard key={el.id} data={el} />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div class="col-span-1 pt-8 hidden md:block relative">
          <RightBar />
        </div>
      </div>
    </section>
  );
};

export default Page;
