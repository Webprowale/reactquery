"use client"
import BackButton from '@/Components/BackButton'
import FormPost from '@/Components/FormPost'
import { FormInput } from '@/Types'
import { useMutation, useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import React, { FC } from 'react'
import { SubmitHandler } from 'react-hook-form'

interface UpdatePostProps{
  params:{
    id:string;
  }
}

const EditPost:FC<UpdatePostProps>= ({params}) => {
  
  const router = useRouter();

    const handlePost:SubmitHandler<FormInput> = (data)=>{
        readUpdate(data);
    }
    const {data:updatePost, isLoading} = useQuery({
      queryKey: ['posts',params.id],
      queryFn: async ()=>{
        const res = await axios.get(`/api/posts/${params.id}`);
        return res.data;
      },
    })
    const {mutate:readUpdate} = useMutation({
      mutationFn: async(newPost: FormInput)=>{
        return await axios.patch(`/api/posts/${params.id}`, newPost);
      },
      onError:(e)=>{
        console.error(e);
      },
      onSuccess:()=>{
        router.push('/');
        router.refresh();
      }
    })
    if(isLoading){
      return (
        <div className='text-center'>
          <span className='loading loading-spinner loading-lg'></span>
        </div>
      )
    }
  return (
     <div className='container'>
        <BackButton />
    <h3 className='text-medium font-serif font-semibold text-blue-600 mb-12 text-center'>Edit Post</h3>
    <FormPost submit={handlePost} isEditing={true} initialValue={updatePost} />
   </div>
    
  )
}

export default EditPost