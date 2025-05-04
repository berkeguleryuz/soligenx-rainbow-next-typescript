"use client";

import React, { useEffect, useState } from "react";
import { useAccount } from "wagmi";
import { getImages } from "@/utils/image-actions";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { Loader2, Wallet } from "lucide-react";

// Custom themed ConnectButton
const CustomConnectButton = () => {
  return (
    <ConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
        mounted,
      }) => {
        const ready = mounted;
        const connected = ready && account && chain;

        return (
          <div
            {...(!ready && {
              "aria-hidden": true,
              style: {
                opacity: 0,
                pointerEvents: "none",
                userSelect: "none",
              },
            })}
            className="w-full max-w-[360px]">
            {!connected ? (
              <button
                onClick={openConnectModal}
                type="button"
                className="w-full flex items-center justify-center gap-3 bg-lime-500 hover:bg-lime-600 text-black font-medium transition-colors rounded-lg px-6 py-3 text-base">
                <Wallet className="h-5 w-5" />
                Connect Wallet
              </button>
            ) : (
              <div className="flex flex-col gap-3 w-full">
                <button
                  onClick={openChainModal}
                  type="button"
                  className="w-full flex items-center justify-center gap-3 bg-lime-500/20 hover:bg-lime-500/30 text-lime-200 transition-colors rounded-lg px-4 py-3 text-base">
                  {chain.hasIcon && (
                    <div className="w-5 h-5 overflow-hidden">
                      {chain.iconUrl && (
                        <img
                          alt={chain.name ?? "Chain icon"}
                          src={chain.iconUrl}
                          className="w-5 h-5"
                        />
                      )}
                    </div>
                  )}
                  <span className="font-medium">{chain.name}</span>
                </button>

                <button
                  onClick={openAccountModal}
                  type="button"
                  className="w-full flex items-center justify-center gap-3 bg-lime-500/20 hover:bg-lime-500/30 text-lime-200 transition-colors rounded-lg px-4 py-3 text-base">
                  <span className="font-medium truncate">{account.displayName}</span>
                </button>
              </div>
            )}
          </div>
        );
      }}
    </ConnectButton.Custom>
  );
};

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
      <div className="flex flex-col items-center justify-center min-h-[50vh] gap-6 p-6 backdrop-blur-sm bg-black/20 rounded-lg border border-lime-500/20">
        <h1 className="text-2xl font-bold text-center text-lime-200">
          Connect Your Wallet
        </h1>
        <p className="text-lime-300/70 text-center max-w-md">
          Please connect your wallet to view your generated images and manage your gallery.
        </p>
        <div className="p-2">
          <CustomConnectButton />
        </div>
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
          <Loader2 className="h-12 w-12 animate-spin text-lime-500" />
        </div>
      ) : (
        <Gallery images={images} />
      )}
    </section>
  );
};

export default MyGenerationsPage;
