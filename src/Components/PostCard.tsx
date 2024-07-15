import { Tag } from "@prisma/client";
import Link from "next/link";
import React, { FC } from "react";
 interface getPostProps{
  post:{
    id:String;
    title:String;
    content:String;
    tag: Tag
  }
 }
const PostCard: FC<getPostProps> = ({post}) => {
  const {id, title, content,tag} = post;
  return (
    <div className="card bg-base-100 w-full shadow-xl border">
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{content}</p>
        <div className="card-actions justify-end">
        <span className="badge badge-neutral">{tag.name}</span>
          <Link href={`/blog/${id}`} className="text-black">Read more..</Link>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
