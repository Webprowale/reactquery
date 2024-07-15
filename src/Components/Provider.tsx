"use client";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import React, { FC, ReactNode } from "react";
interface ProviderProps {
  children: ReactNode;
}
const queryClient = new QueryClient();

const Provider: FC<ProviderProps> = ({ children }) => {

  return <QueryClientProvider client={queryClient}> {children} </QueryClientProvider>;
};

export default Provider;
