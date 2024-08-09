"use client";
import Loader from "@/components/loader/loader";
import RatingComp from "@/components/Rating/RatingComp";
import Stream from "@/components/stream/stream";
import { getMoviesById } from "@/utils/api";
import config from "@/utils/config";
import { ChevronLeft } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
const Page = () => {
  const [state, setState] = useState(null);
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const router = useRouter();
  const backFunction = () => {
    history.back();
  };
  const bgImageURL =
    "https://media.themoviedb.org/t/p/w1920_and_h800_multi_faces/7cqKGQMnNabzOpi7qaIgZvQ7NGV.jpg";

  useEffect(() => {
    if (id) {
      getMoviesById(id)
        .then((res) => {
          setState(res.data);
        })
        .catch((e) => console.log(e));
    }
  }, [id]);
  if (!state) {
    return <Loader />;
  }
  return (
    <section className="text-white h-screen">
      <div
        style={{
          backgroundImage: `url(${config.imgLargeBaseURL}${state?.backdrop_path})`,
          backgroundColor: "#1e1818b3",
          backgroundBlendMode: "multiply",
          backgroundSize: "cover",
        }}
        className="h-full w-screen "
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
                <h1 className="font-semibold text-5xl text-white mb-2">
                  {state?.title}
                </h1>
                <h1 className="text-sm text-gray-400 mb-4">{state?.tagline}</h1>
                <RatingComp />
                <h6 className="text-white mt-3">10M+ Views</h6>
                <img src="/imdb.svg" className="my-3" />
                <p>{state?.overview}</p>
                <div className="flex gap-5 mt-5">
                  <button className="transParentBtn px-5 py-2 rounded hover:bg-transparent hover:border hover:border-white">
                    Wishlist
                  </button>
                  <button
                    className="bg-yellow-500 px-5 py-2 rounded-lg text-black hover:text-yellow-500 hover:bg-transparent hover:border hover:border-yellow-500"
                    onClick={() => router.push(`/home/stream?id=${id}`)}
                  >
                    Watch Now
                  </button>
                </div>
              </div>
              <div>
                <img
                  height={350}
                  width={280}
                  className="rounded-md"
                  src={`${config.imgBaseURL}${state?.poster_path}`}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Stream />
      </div>
    </section>
  );
};

export default Page;
