"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import config from "@/utils/config";
import style from "./movieComp.module.css";
const MoviePosterComp = ({ data }) => {
  console.log(data);
  return (
    <Link
      href={`/home/watch?id=${data?.id}`}
      style={{ width: "300px", height: "420px" }}
      className={`relative ${style.moviePosterComp}`}
    >
      <div className="relative">
        <Image
          className="rounded-md"
          height={420}
          width={300}
          src={`${config.imgBaseURL}${data?.poster_path}`}
        />
        <span className="absolute top-0 right-1 px-3 rounded-bl-2xl rounded-tr-2xl bg-yellow-500">
          {data?.vote_average}
        </span>
      </div>
      {/* <div
        className={`absolute bottom-0 w-full bg-black ${style.moviePosterCompBottom}`}
      >
        <h4 className="font-semibold">{data?.title}</h4>
        <RatingComp />
        <h6>{data?.release_date}</h6>
      </div> */}
    </Link>
  );
};

export default MoviePosterComp;
