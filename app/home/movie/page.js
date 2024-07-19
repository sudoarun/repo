"use client";
import MoviePosterComp from "@/components/moviePage/MoviePosterComp";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { ChevronLeft } from "lucide-react";
import React, { useEffect, useState } from "react";

const Page = () => {
  const [state, setState] = useState([]);
  let slider = {
    drag: "free",
    gap: "2rem",
    perPage: 4.5,
    // arrows: false,
    pagination: false,
  };
  const backFunction = () => {
    history.back();
  };
  useEffect(() => {
    let count = 56;
    let array = Array.from(Array(count).keys());
    setState(array);
  }, []);
  return (
    <div className="bg-black text-white p-3">
      <div className="container pb-5">
        <div className="flex gap-3 items-center">
          <span
            className="transParentBtn p-2 cursor-pointer"
            onClick={backFunction}
          >
            <ChevronLeft />
          </span>
          <span
            className="font-semibold text-yellow-500 cursor-pointer"
            onClick={backFunction}
          >
            Back home
          </span>
        </div>
        <div className="py-6 ps-4 pb-2">
          <h3 className="font-semibold text-xl">Top Rated Movies</h3>
          <div className="py-5 flex gap-8">
            <Splide options={slider} className="w-full">
              {state?.map((el) => (
                <SplideSlide>
                  <MoviePosterComp />
                </SplideSlide>
              ))}
            </Splide>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
