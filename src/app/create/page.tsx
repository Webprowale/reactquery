"use client";

import BackButton from "@/Components/BackButton";
import FormPost from "@/Components/FormPost";
import { FormInput } from "@/Types";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useRouter } from "next/navigation";
import React from "react";
import { SubmitHandler } from "react-hook-form";

const Create = () => {
  const router  = useRouter();
  const { mutate } = useMutation({
    mutationFn: (newPost: FormInput) => {
      return axios.post("/api/posts/create", newPost);
    },
    onSuccess: () => {
      router.push('/');
      router.refresh();
    },
    onError: (error) => {
      alert("Error creating post: " + error.message);
    },
  });

  const handlePost: SubmitHandler<FormInput> = (data) => {
    mutate(data);
  };

  return (
    <div className="container">
      <BackButton />
      <h3 className="text-medium font-serif font-semibold text-blue-600 mb-12 text-center mt-3">
        Add New Post
      </h3>
      <FormPost submit={handlePost} isEditing={false} />
    </div>
  );
};

export default Create;
