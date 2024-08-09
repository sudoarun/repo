"use client";
import MoviePosterComp from "@/components/moviePage/MoviePosterComp";
import { getTopRatedMovies } from "@/utils/api";
import { ChevronLeft } from "lucide-react";
import React, { useEffect, useState } from "react";

const Page = () => {
  const [state, setState] = useState(null);

  const backFunction = () => {
    history.back();
  };
  const getTopMovies = () => {
    getTopRatedMovies()
      .then((res) => setState(res.data))
      .catch((e) => console.log(e));
  };
  useEffect(() => {
    getTopMovies();
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
          <h3 className="font-semibold text-3xl">Top Rated Movies</h3>
          <div className="py-5 gap-3 grid grid-cols-2 md:grid-cols-4 md:gap-5">
            {state?.results?.map((el) => (
              <div key={el?.id}>
                <MoviePosterComp data={el} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
