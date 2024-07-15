"use client";
import BackButton from "@/Components/BackButton";
import ButtonAction from "@/Components/ButtonAction";
import { db } from "@/lib/db";
import React, { FC } from "react";

interface blogDetaiprops{
  params:{
    id: string
  }
}
const getDetails = async (id: string) => {
  const res = await db.post.findFirst({
    where: {
      id: id,
    },
    select: {
      title: true,
      content: true,
      createdAt: true,
      tag: true,
    },
  });
  return res;
};
const BlogDetail: FC<blogDetaiprops> = async ({params}) => {
  const post = await getDetails(params.id);
  
  return (
    <div className="mb-8">
      <BackButton />
      <ButtonAction  />

      <h2 className="text-2xl font-bold my-4">{post?.title}</h2>
      <p className="text-slate-700">{post?.content}</p>
      <span className="badge">{post?.tag.name}</span>
      <p className="text-gray-500">{post?.createdAt?.toLocaleString()}</p>
    </div>
  );
};

export default BlogDetail;
