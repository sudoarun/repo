"use client";
import Stream from "@/components/stream/stream";
import { useSearchParams } from "next/navigation";
import React from "react";

const Page = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  return (
    <div className="w-full h-screen">
      <Stream id={id} />
    </div>
  );
};

export default Page;
