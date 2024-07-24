import { Bell, User } from "lucide-react";
import React from "react";
import SmallCard from "../Cards/SmallCard";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import genres from "@/utils/genres";

const RightBar = () => {
  const slides = {
    perPage: 1,
    pagination: false,
  };
  return (
    <div className="bg-black text-white flex-auto w-1/5">
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
      <div>
        <h3 className="font-semibold my-5">Top Rated</h3>
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
