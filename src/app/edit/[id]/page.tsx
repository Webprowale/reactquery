"use client"
import BackButton from '@/Components/BackButton'
import FormPost from '@/Components/FormPost'
import { FormInput } from '@/Types'
import React from 'react'
import { SubmitHandler } from 'react-hook-form'
const EditPost = () => {

    const handlePost:SubmitHandler<FormInput> = (data)=>{
        console.log(data);
    }
  return (
     <div className='container'>
        <BackButton />
    <h3 className='text-medium font-serif font-semibold text-blue-600 mb-12 text-center'>Edit Post</h3>
    <FormPost submit={handlePost} isEditing={true} />
   </div>
    
  )
}

export default EditPost