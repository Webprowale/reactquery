import PostCard from "@/Components/PostCard";
import { db } from "@/lib/db";
import Image from "next/image";

async function getPost(){
  const res = await db.post.findMany({
    select:{
      id: true,
      title:true,
      content:true,
      tag: true,
    },
    orderBy:{
      createdAt: "desc",
    }
  });
  return res;
 }
export default async function Home() {
   const post = await getPost();
  
  return (
   <div className="w-full grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-center justify-center sm:mt-12">
     {post?.map((postItem) => (
        <PostCard key={postItem.id} post={postItem} />
      ))}
   </div>
  );
}
