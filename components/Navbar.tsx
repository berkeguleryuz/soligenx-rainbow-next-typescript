"use client";
import React from "react";
import Logo from "./Logo";
import Link from "next/link";
import { Menu, Wallet } from "lucide-react";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { ConnectButton } from "@rainbow-me/rainbowkit";

// Custom ConnectButton implementation
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
            })}>
            {(() => {
              if (!connected) {
                return (
                  <button
                    onClick={openConnectModal}
                    type="button"
                    className="flex items-center justify-center gap-2 bg-lime-500 hover:bg-lime-600 text-black font-medium transition-colors rounded-lg px-4 py-2 text-sm">
                    <Wallet className="h-4 w-4" />
                    Connect
                  </button>
                );
              }

              return (
                <div className="flex items-center gap-2">
                  <button
                    onClick={openChainModal}
                    type="button"
                    className="flex items-center gap-2 bg-lime-500/20 hover:bg-lime-500/30 text-lime-200 transition-colors rounded-lg px-3 py-2 text-sm">
                    {chain.hasIcon && (
                      <div className="w-4 h-4 overflow-hidden">
                        {chain.iconUrl && (
                          <img
                            alt={chain.name ?? "Chain icon"}
                            src={chain.iconUrl}
                            className="w-4 h-4"
                          />
                        )}
                      </div>
                    )}
                    {chain.name}
                  </button>

                  <button
                    onClick={openAccountModal}
                    type="button"
                    className="flex items-center gap-2 bg-lime-500/20 hover:bg-lime-500/30 text-lime-200 transition-colors rounded-lg px-3 py-2 text-sm">
                    <span className="hidden sm:block truncate max-w-[120px]">
                      {account.displayName}
                    </span>
                  </button>
                </div>
              );
            })()}
          </div>
        );
      }}
    </ConnectButton.Custom>
  );
};

const MobileNavItems = () => {
  return (
    <div className="flex flex-col gap-4 mt-4">
      <Link
        className="text-white/70 hover:text-white transition-colors duration-200 font-medium px-4 py-3 rounded-lg hover:bg-lime-500/10 text-lg"
        href="/dashboard">
        Dashboard
      </Link>
      <Link
        className="text-white/70 hover:text-white transition-colors duration-200 font-medium px-4 py-3 rounded-lg hover:bg-lime-500/10 text-lg"
        href="/#features">
        Features
      </Link>
      <Link
        className="text-white/70 hover:text-white transition-colors duration-200 font-medium px-4 py-3 rounded-lg hover:bg-lime-500/10 text-lg"
        href="/#faq">
        FAQ
      </Link>
      <div className="border-t border-lime-500/20 my-4" />
      <div className="w-full px-2">
        <CustomConnectButton />
      </div>
    </div>
  );
};

const NavItems = () => {
  return (
    <div className="flex items-center gap-2">
      <Link
        className="text-white/70 hover:text-white transition-colors duration-200 font-medium px-4 py-2 rounded-lg hover:bg-lime-500/10"
        href="/dashboard">
        Dashboard
      </Link>
      <Link
        className="text-white/70 hover:text-white transition-colors duration-200 font-medium px-4 py-2 rounded-lg hover:bg-lime-500/10"
        href="/#features">
        Features
      </Link>
      <Link
        className="text-white/70 hover:text-white transition-colors duration-200 font-medium px-4 py-2 rounded-lg hover:bg-lime-500/10"
        href="/#faq">
        FAQ
      </Link>
      <Link
        className="text-white/70 hover:text-white transition-colors duration-200 font-medium px-4 py-2 rounded-lg hover:bg-lime-500/10"
        href="/docs">
        Docs
      </Link>
    </div>
  );
};

const Navbar = () => {
  return (
    <header className="w-full backdrop-blur-md fixed top-0 left-0 right-0 z-50 flex justify-between items-center p-4 overflow-hidden">
      <Logo />
      <nav className="md:flex items-center gap-4 hidden">
        <NavItems />
        <CustomConnectButton />
      </nav>
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button
              className="text-white  bg-transparent hover:bg-transparent"
              size="icon">
              <Menu className="text-white hover:text-lime-500" />
            </Button>
          </SheetTrigger>
          <SheetContent
            side="left"
            className="w-[300px] bg-black/95 border-lime-500/20 p-6">
            <SheetHeader>
              <SheetTitle>
                <Logo />
              </SheetTitle>
            </SheetHeader>
            <MobileNavItems />
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Navbar;
