"use client";

import React, { ReactNode, useState, useEffect } from "react";
import { useAccount } from "wagmi";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { Loader2 } from "lucide-react";

interface ConnectWalletWrapperProps {
  children: ReactNode;
}

const ConnectWalletWrapper = ({ children }: ConnectWalletWrapperProps) => {
  const { isConnected, isConnecting } = useAccount();
  const [hasCheckedConnection, setHasCheckedConnection] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHasCheckedConnection(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  if (!hasCheckedConnection || isConnecting) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh] gap-4">
        <Loader2 className="h-8 w-8 animate-spin text-lime-500" />
        <p className="text-lime-200">Checking wallet connection...</p>
      </div>
    );
  }

  if (!isConnected) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh] gap-6 p-6 backdrop-blur-sm bg-black/20 rounded-lg border border-lime-500/20">
        <h1 className="text-2xl font-bold text-center text-lime-200">
          Connect Your Wallet
        </h1>
        <p className="text-lime-300/70 text-center max-w-md">
          Please connect your wallet to access the SocigenX dashboard and manage
          your content generation.
        </p>
        <div className="p-2">
          <ConnectButton />
        </div>
      </div>
    );
  }

  return <>{children}</>;
};

export default ConnectWalletWrapper;
