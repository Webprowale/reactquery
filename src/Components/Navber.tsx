"use client";
import Link from "next/link";
import React from "react";
import { BookOpenCheck } from "lucide-react";

const Navber = () => {
  return (
    <div className="navbar bg-neutral-100">
      <div className="container">
        <div className="flex-1">
          <Link
            href="/"
            className="text-blue-600 flex font-bold font-serif sm:text-3xl text-2xl"
          >
            <BookOpenCheck className="text-success text-2xl mt-2" />Query
          </Link>
        </div>
        <div className="flex-none">
          <button className="bg-base-100 border-indigo border rounded-md mt-2 p-2">
            <Link href="/create">Create Post</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navber;
