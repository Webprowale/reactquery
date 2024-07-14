import PostCard from "@/Components/PostCard";
import Image from "next/image";

export default function Home() {
  return (
   <div className="w-full grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-center justify-center sm:mt-12">
   <PostCard />
   <PostCard />
   <PostCard />
   <PostCard />
   <PostCard />
   <PostCard />
   <PostCard />
   <PostCard />
   </div>
  );
}
