"use client";

import React, { useEffect, useState } from "react";
import { useAccount } from "wagmi";
import { getImages } from "@/utils/image-actions";
import { ConnectButton } from "@rainbow-me/rainbowkit";

interface ImageProps {
  id: number;
  user_id: string;
  model: string;
  prompt: string;
  aspect_ratio: string;
  width: number;
  height: number;
  guidance: number;
  num_inference_steps: number;
  output_format: string;
  created_at: string;
  url: string;
}

const Gallery = ({ images }: { images: ImageProps[] }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-6">
      {images.map((image) => (
        <div key={image.id} className="group relative">
          <img 
            src={image.url} 
            alt={image.prompt} 
            className="w-full h-auto rounded-lg object-cover aspect-square cursor-pointer hover:opacity-90 transition-opacity" 
          />
          <div className="hidden group-hover:block absolute bottom-0 left-0 right-0 bg-black/70 p-2 rounded-b-lg">
            <p className="text-white text-sm line-clamp-2">{image.prompt}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

const MyGenerationsPage = () => {
  const { isConnected } = useAccount();
  const [images, setImages] = useState<ImageProps[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchImages = async () => {
      setLoading(true);
      const { data } = await getImages();
      setImages(data as ImageProps[] || []);
      setLoading(false);
    };

    if (isConnected) {
      fetchImages();
    } else {
      setLoading(false);
    }
  }, [isConnected]);

  if (!isConnected) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh] gap-4">
        <h1 className="text-2xl font-bold text-center">
          Please connect your wallet to view your generations
        </h1>
        <ConnectButton />
      </div>
    );
  }

  return (
    <section className="p-4 w-full h-full">
      <h1 className="text-3xl font-bold">My Generations</h1>
      <p className="text-sm text-lime-500/50">
        Here you can view all the images you have generated.
      </p>
      <span>Click on an image to view it.</span>
      
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-lime-500"></div>
        </div>
      ) : (
        <Gallery images={images} />
      )}
    </section>
  );
};

export default MyGenerationsPage;
