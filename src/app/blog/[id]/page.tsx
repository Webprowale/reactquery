"use client";
import BackButton from "@/Components/BackButton";
import ButtonAction from "@/Components/ButtonAction";
import React from "react";

const BlogDetail = () => {
  return (
    <div className="mb-8">
      <BackButton />
      <h2 className="text-2xl font-bold my-4">Post One</h2>
      <ButtonAction />
      <p className="text-slate-700">Post One Content</p>
    </div>
  );
};

export default BlogDetail;
