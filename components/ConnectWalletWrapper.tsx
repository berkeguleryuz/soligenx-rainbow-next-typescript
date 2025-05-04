"use client";

import React, { ReactNode, useState, useEffect } from "react";
import { useAccount } from "wagmi";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { Loader2, Wallet } from "lucide-react";

interface ConnectWalletWrapperProps {
  children: ReactNode;
}

// Custom themed ConnectButton for the dashboard
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
                  <div className="rounded-full bg-lime-500/20 border border-lime-500/40 w-5 h-5"></div>
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
          <CustomConnectButton />
        </div>
      </div>
    );
  }

  return <>{children}</>;
};

export default ConnectWalletWrapper;
