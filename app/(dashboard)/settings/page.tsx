"use client";

import React from "react";
import { useAccount } from "wagmi";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ConnectButton } from "@rainbow-me/rainbowkit";

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
                <p className="text-lg font-semibold">{isConnected ? "Connected" : "Not Connected"}</p>
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
                <ConnectButton />
              </div>
            </div>
          </CardContent>
        </Card>
      </fieldset>
    </section>
  );
};

export default SettingsPage;
