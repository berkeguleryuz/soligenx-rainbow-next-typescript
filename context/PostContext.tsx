"use client";

import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useState,
} from "react";

interface PostItem {
  post: string;
}

interface PostContextTypes {
  output: { data: PostItem[] };
  setOutput: Dispatch<SetStateAction<{ data: PostItem[] }>>;
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
}

export const PostContext = createContext<PostContextTypes>({
  output: { data: [] },
  setOutput: () => {},
  loading: false,
  setLoading: () => {},
});

export const PostProvider = ({ children }: { children: React.ReactNode }) => {
  const [output, setOutput] = useState<{ data: PostItem[] }>({
    data: [],
  });
  const [loading, setLoading] = useState(false);
  console.log("Output", output);

  return (
    <PostContext.Provider value={{ output, setOutput, loading, setLoading }}>
      {children}
    </PostContext.Provider>
  );
};
