"use client";
import MoviePosterComp from "@/components/moviePage/MoviePosterComp";
import { ChevronLeft } from "lucide-react";
import React from "react";

const Page = () => {
  return (
    <div className="bg-black text-white p-3">
      <div className="container ">
        <div className="flex gap-3 items-center">
          <span className="transParentBtn p-2 cursor-pointer">
            <ChevronLeft />
          </span>
          <span className="font-semibold text-yellow-500 cursor-pointer">
            Back home
          </span>
        </div>
        <div className="mt-6 ps-4 pb-2">
          <h3 className="font-semibold text-xl">Top Rated Movies</h3>
          <div className="mt-5 flex gap-8">
            <MoviePosterComp />
            <MoviePosterComp />
            <MoviePosterComp />
            <MoviePosterComp />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
