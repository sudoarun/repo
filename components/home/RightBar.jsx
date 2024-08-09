import { Bell, ChevronRight, User } from "lucide-react";
import React from "react";
import SmallCard from "../Cards/SmallCard";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import genres from "@/utils/genres";
import Link from "next/link";

const RightBar = () => {
  const slides = {
    perPage: 1.3,
    perMove: 1,
    pagination: false,
    gap: "3.5rem",
  };
  return (
    <div className="bg-black text-white w-full">
      <div className="flex items-center gap-2 justify-between pe-4 mt-2">
        <span className="transParentBtn p-3 cursor-pointer">
          <Bell />
        </span>
        <span className="text-yellow-500">Arun Thakur</span>
        <span className="transParentBtn p-3 cursor-pointer">
          <User />
        </span>
      </div>
      {/* <div>
        <h3 className="font-semibold my-5">Continue</h3>
        <SmallCard />
      </div> */}
      <div className="w-full">
        <div className="flex justify-between items-center">
          <h3 className="font-semibold my-5">Top Rated</h3>
          <Link href={"/home/movies/top-movies"} className="block pe-4">
            <span className="flex items-center">
              <span className="block text-sm text-gray-400">See More</span>{" "}
              <ChevronRight />
            </span>
          </Link>
        </div>
        <Splide options={slides} className="w-full rightSlidesCustomBtn">
          {genres.map((el) => (
            <SplideSlide key={el.id}>
              <SmallCard />
            </SplideSlide>
          ))}
        </Splide>
      </div>
      {/* <div>
        <h3 className="font-semibold my-5">Genres</h3>
        <Splide options={slides} className="w-full rightSlidesCustomBtn">
          {genres.map((el) => (
            <SplideSlide key={el.id}>
              <SmallCard />
            </SplideSlide>
          ))}
        </Splide>
      </div> */}
    </div>
  );
};

export default RightBar;
