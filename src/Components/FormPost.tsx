"use client";
import { FormInput } from "@/Types";
import { Tag } from "@prisma/client";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

interface FormPostProps {
  submit: SubmitHandler<FormInput>;
  isEditing: boolean;
  initialValue?: FormInput;
}


const FormPost: FC<FormPostProps> = ({ submit, isEditing, initialValue }) => {
  const { register, handleSubmit } = useForm<FormInput>({
    defaultValues:initialValue
  });
  //fetch tags
  const { data: dataTags, isLoading: isLoadingTags } = useQuery<Tag[]>({
    queryKey: ["tags"],
    queryFn: async () => {
      const res = await axios.get("/api/tags");
      return res.data;
    },
  });
  console.log(dataTags);
 
  
 
  return (
    <form
      onSubmit={handleSubmit(submit)}
      className="flex flex-col items-center justify-center gap-5 mt-10"
    >
      <input
        type="text"
        {...register("title", { required: true })}
        placeholder="Enter post title..."
        className="input input-bordered input-primary w-full max-w-lg"
      />
      <textarea
        {...register("content", { required: true })}
        className="textarea textarea-primary w-full max-w-lg"
        placeholder="Enter post content..."
      ></textarea>
      {isLoadingTags ? "loading..." : (
      <select
        {...register("tagId", { required: true })}
        className="select select-bordered w-full max-w-lg"
      >
        <option disabled value="">
          Select tags...
        </option>
        {dataTags?.map((item) => (
          <option key={item.id} value={item.id}>
            {item.name}
          </option>
        ))}
      </select>
      )}
      <button type="submit" className="btn btn-primary w-full max-w-lg">
        {isEditing ? "Update" : "Create"}
      </button>
    </form>
  );
};

export default FormPost;
