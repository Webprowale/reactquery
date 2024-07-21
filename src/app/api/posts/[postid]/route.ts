import { db } from "@/lib/db";
import { NextResponse } from "next/server";
import { Prisma } from "@prisma/client";
interface ContextProps{
    params:{
        postid: string
    }
}


export async function DELETE(req: Request, context: ContextProps) {
    try {
      const { params } = context;
      const postId = params.postid;
  
      // Delete the post
      await db.post.delete({ where: { id: postId } });
  
      return new Response(null, { status: 204 });
    } catch (e) {
      console.error('Error deleting post:', e);
      return NextResponse.json({ message: 'Could not delete post' }, { status: 500 });
    }
  }



export async function PATCH(req: Request, context: ContextProps){
   try{
       const body = await req.json();
        const { params } = context;
        await db.post.update({
            where:{
                id:params.postid
            },
            data:{
                title:body.title,
                content:body.content,
                tagId:body.tagId
            }
        });
        return NextResponse.json({message:'update successfully'}, { status:200 })

   }catch(e){
    return NextResponse.json({message:'could not update post'},{ status:500 })

   }
}




