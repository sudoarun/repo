"use client";
import RatingComp from "@/components/Rating/RatingComp";
import { ChevronLeft } from "lucide-react";
import React from "react";
const Page = () => {
  const backFunction = () => {
    history.back();
  };
  const bgImageURL =
    "https://media.themoviedb.org/t/p/w1920_and_h800_multi_faces/7cqKGQMnNabzOpi7qaIgZvQ7NGV.jpg";
  return (
    <section className="text-white">
      <div
        style={{
          background: `url(${bgImageURL})`,
          backgroundSize: "cover",
          backgroundColor: "#1e1818b3",
          backgroundBlendMode: "multiply",
        }}
        className="h-screen w-screen"
      >
        <div className="pt-10 ps-10">
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
          <div className="mt-5  ">
            <div className="grid grid-cols-2 place-items-center">
              <div>
                <h1 className="font-semibold text-5xl text-white mb-4">Loki</h1>
                <RatingComp />
                <h6 className="text-white mt-3">10M+ Views</h6>
                <span className="text-white font-semibold">IMDB logo</span>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
                <div className="flex gap-5 mt-5">
                  <button className="transParentBtn px-5 py-2 rounded hover:bg-transparent hover:border hover:border-white">
                    Wishlist
                  </button>
                  <button className="bg-yellow-500 px-5 py-2 rounded-lg text-black hover:text-yellow-500 hover:bg-transparent hover:border hover:border-yellow-500">
                    Watch Now
                  </button>
                </div>
              </div>
              <div>
                <img
                  height={350}
                  width={280}
                  className="rounded-md"
                  src="https://media.themoviedb.org/t/p/w300_and_h450_bestv2/2zmTngn1tYC1AvfnrFLhxeD82hz.jpg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
