"use client";

import React from "react";
import { useAccount } from "wagmi";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { Wallet } from "lucide-react";

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
            className="w-full">
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
                  className="w-full flex items-center justify-between gap-3 bg-lime-500/20 hover:bg-lime-500/30 text-lime-200 transition-colors rounded-lg px-4 py-3 text-base">
                  <div className="flex items-center gap-2">
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
                  </div>
                  <span className="text-xs text-lime-300/70">Change Network</span>
                </button>

                <button
                  onClick={openAccountModal}
                  type="button"
                  className="w-full flex items-center justify-between gap-3 bg-lime-500/20 hover:bg-lime-500/30 text-lime-200 transition-colors rounded-lg px-4 py-3 text-base">
                  <div className="flex items-center gap-2">
                    <span className="font-medium truncate">{account.displayName}</span>
                  </div>
                  <span className="text-xs text-lime-300/70">Manage Account</span>
                </button>
              </div>
            )}
          </div>
        );
      }}
    </ConnectButton.Custom>
  );
};

const SettingsPage = () => {
  const { address, isConnected } = useAccount();

  return (
    <section className="min-h-screen">
      <div className="flex flex-col gap-4 p-4 mt-2">
        <h1 className="text-3xl font-bold">Settings</h1>
        <p className="text-sm text-lime-200">
          Manage your wallet connection and account settings.
        </p>
      </div>
      <fieldset className="grid gap-4 max-w-2xl rounded-[8px] border bg-lime-500/10 border-lime-500/10 p-4">
        <legend className="text-3xl text-center font-semibold tracking-wide">
          Wallet
        </legend>
        <Card className="bg-transparent border-lime-500/10 text-white">
          <CardHeader>
            <CardTitle className="px-4">Manage Your Wallet</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-4 p-4">
            <div className="grid gap-4">
              <div>
                <p className="text-sm text-lime-200 mb-2">Wallet Status</p>
                <p className="text-lg font-semibold">
                  {isConnected ? 
                    <span className="flex items-center gap-2">
                      <span className="inline-block w-3 h-3 rounded-full bg-lime-500"></span>
                      Connected
                    </span> : 
                    <span className="flex items-center gap-2">
                      <span className="inline-block w-3 h-3 rounded-full bg-red-500"></span>
                      Not Connected
                    </span>
                  }
                </p>
              </div>
              {isConnected && (
                <div>
                  <p className="text-sm text-lime-200 mb-2">Wallet Address</p>
                  <p className="text-lg font-mono bg-black/20 p-2 rounded-md overflow-x-auto">
                    {address}
                  </p>
                </div>
              )}
              <div className="mt-4">
                <CustomConnectButton />
              </div>
            </div>
          </CardContent>
        </Card>
      </fieldset>
    </section>
  );
};

export default SettingsPage;
