"use client";

import { FormInput } from "@/Types";
import React, { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

interface FormPostProps {
    submit: SubmitHandler<FormInput>;
    isEditing: boolean;
}

const FormPost: FC<FormPostProps> = ({ submit, isEditing }) => {
    const { register, handleSubmit } = useForm<FormInput>();
    
    return (
        <form onSubmit={handleSubmit(submit)} className="flex flex-col items-center justify-center gap-5 mt-10">
            <input
                type="text"
                {...register('title', { required: true })}
                placeholder="Enter post title..."
                className="input input-bordered input-primary w-full max-w-lg"
            />
            <textarea
                {...register('content', { required: true })}
                className="textarea textarea-primary w-full max-w-lg"
                placeholder="Enter post content..."
            ></textarea>
            <select
                {...register('tag', { required: true })}
                className="select select-bordered w-full max-w-lg">
                <option disabled value="">
                    Select tags...
                </option>
                <option>Javascript</option>
                <option>PHP</option>
                <option>Python</option>
            </select>
            <button type="submit" className="btn btn-primary w-full max-w-lg">
                {isEditing ? "Update" : "Create"}
            </button>
        </form>
    );
};

export default FormPost;
