"use client";

import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1 className="text-center">Hi there !</h1>
      <Link href={"/home"}>Go Home</Link>
      <Link href={"/home/movie"}>Go movie</Link>
    </main>
  );
}
