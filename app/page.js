"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  router.push("/home");
  return (
    <main>
      <h1 className="text-center">Hi there !</h1>
      <Link href={"/home"}>Go Home</Link>
      <Link href={"/home/movie"}>Go movie</Link>
    </main>
  );
}
