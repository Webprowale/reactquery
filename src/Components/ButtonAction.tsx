"use client";

import Link from 'next/link';
import React, { FC } from 'react';
import { Pencil, Trash } from 'lucide-react';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { useRouter } from 'next/navigation';

interface BlogPostProps {
  id: string;
}

const ButtonAction: FC<BlogPostProps> = ({ id }) => {
  const router = useRouter();

  const { mutate:deletePost} = useMutation({
    mutationFn: async () => {
      const res = await axios.delete(`/api/posts/${id}`);
        return res.data;
    
    },
    onError: (error) => {
      console.error('Mutation error:', error);
    },
    onSuccess: () => {
      router.push('/');
      router.refresh();
    },
  });

  return (
    <div className='mb-5'>
      <Link href={`/edit/${id}`} className='mr-3 btn btn-success'>
        <Pencil /> Edit
      </Link>
      <button className='btn btn-error' onClick={() => deletePost()}>
        <Trash /> Delete
      </button>
    </div>
  );
};

export default ButtonAction;
