import { Bell, ChevronRight, User } from "lucide-react";
import React, { useEffect, useState } from "react";
import SmallCard from "../Cards/SmallCard";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import genres from "@/utils/genres";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { getDiscoverTvShows, getTopRatedMovies } from "@/utils/api";
import { useDispatch, useSelector } from "react-redux";
import {
  addDiscoverTvShows,
  addTopRatedMovies,
} from "@/redux/slice/globalState";

const RightBar = () => {
  const router = useRouter();
  const { topRatedMovies, discoverTVShows } = useSelector(
    (state) => state.state.globalState
  );
  const dispatch = useDispatch();
  const [topRated, setTopRated] = useState([]);
  const [tvShows, setTvShows] = useState([]);
  const getTopRated = () => {
    if (topRatedMovies?.results?.length > 0) {
      setTopRated(topRatedMovies?.results);
      return;
    }
    getTopRatedMovies()
      .then((res) => {
        setTopRated(res?.data?.results);
        dispatch(addTopRatedMovies(res?.data));
      })
      .catch((e) => console.log(e));
  };
  // const getTvShows = () => {
  //   if (discoverTVShows?.results?.length > 0) {
  //     setTvShows(discoverTVShows?.results);
  //     return;
  //   }
  //   getDiscoverTvShows()
  //     .then((res) => {
  //       setTvShows(res?.data?.results);
  //       dispatch(addDiscoverTvShows(res?.data));
  //     })
  //     .catch((e) => console.log(e));
  // };
  const slides = {
    perPage: 1.3,
    perMove: 1,
    pagination: false,
    gap: "3.5rem",
  };
  useEffect(() => {
    getTopRated();
    // getTvShows();
  }, [topRatedMovies, discoverTVShows]);

  return (
    <div className="bg-black text-white w-full sticky top-8">
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
          <Link href={"/home/movie?category=top-rated"} className="block pe-4">
            <span className="flex items-center">
              <span className="block text-sm text-gray-400">See More</span>{" "}
              <ChevronRight />
            </span>
          </Link>
        </div>
        <Splide options={slides} className="w-full rightSlidesCustomBtn">
          {topRated?.map((el) => (
            <SplideSlide key={el.id}>
              <SmallCard
                movieName={el?.title}
                bgImage={el?.backdrop_path}
                rating={el?.vote_average}
                id={el?.id}
              />
            </SplideSlide>
          ))}
        </Splide>
      </div>
      {/* <div>
        <h3 className="font-semibold my-5">TV Shows</h3>
        <Splide options={slides} className="w-full rightSlidesCustomBtn">
          {tvShows?.map((el) => (
            <SplideSlide key={el.id}>
              <SmallCard
                movieName={el?.name}
                bgImage={el?.backdrop_path}
                rating={el?.vote_average}
                id={el?.id}
              />
            </SplideSlide>
          ))}
        </Splide>
      </div> */}
    </div>
  );
};

export default RightBar;
