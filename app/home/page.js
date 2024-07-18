import MovieCard from "@/components/Cards/movieCard";
import NavHome from "@/components/home/NavHome";
import RightBar from "@/components/home/RightBar";
import SideBar from "@/components/sideBar/sideBar";
import React from "react";

const Page = () => {
  return (
    <section className="pt-8 bg-black">
      <div className="flex ">
        <SideBar />
        <div className="container flex-auto w-3/5 mb-3">
          <div className="bg-black text-white px-4">
            <div>
              <NavHome />
            </div>
            <div className="flex justify-center mt-3">
              <img src="/Picture.svg" />
            </div>
            <div>
              <h1 className="ms-4 my-6 text-2xl">Popular on Honey Movies</h1>
              <div className="flex gap-5 justify-center">
                <MovieCard />
                <MovieCard />
                <MovieCard />
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
