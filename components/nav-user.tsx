"use client";

import { ChevronsUpDown, Settings } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import Link from "next/link";
import { ConnectButton } from "@rainbow-me/rainbowkit";

export function NavUser({
  user,
}: {
  user: {
    name: string;
    email: string;
    avatar?: string;
  };
}) {
  const { isMobile } = useSidebar();

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground">
              <Avatar className="h-8 w-8 rounded-full">
                <AvatarImage src={user.avatar} alt={user.name} />
                <AvatarFallback className="rounded-full bg-lime-500 text-white font-semibold">
                  {user?.name
                    ? user.name
                        ?.split(" ")
                        .map((n) => n[0])
                        .join("")
                    : "SocigenX"}
                </AvatarFallback>
              </Avatar>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-semibold">{user.name}</span>
                <span className="truncate text-xs">{user.email}</span>
              </div>
              <ChevronsUpDown className="ml-auto size-4" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-[--radix-dropdown-menu-trigger-width] bg-black/90 backdrop-blur-sm border border-lime-500/20 min-w-56 rounded-lg shadow-lg"
            side={isMobile ? "bottom" : "right"}
            align="end"
            sideOffset={4}>
            <DropdownMenuLabel className="p-0 font-normal">
              <div className="flex items-center gap-3 px-4 py-3 text-left text-sm border-b border-lime-500/10">
                <Avatar className="h-10 w-10 rounded-full ring-2 ring-lime-500/20">
                  <AvatarImage src={user.avatar} alt={user.name} />
                  <AvatarFallback className="rounded-full bg-black/20 text-lime-200 font-semibold border border-lime-500/20">
                    {user?.name
                      ? user.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")
                      : "SocigenX"}
                  </AvatarFallback>
                </Avatar>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold text-lime-200">
                    {user.name}
                  </span>
                  <span className="truncate text-xs text-lime-300/70">
                    {user.email}
                  </span>
                </div>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator className="bg-lime-500/10" />
            <DropdownMenuGroup className="p-1">
              <DropdownMenuItem
                asChild
                className="focus:bg-lime-300/10 focus:text-lime-400">
                <Link
                  href="/settings"
                  className="flex items-center gap-2 px-3 py-2 text-sm text-lime-200 hover:text-lime-400 hover:bg-black/20 rounded-md cursor-pointer transition-colors">
                  <Settings className="w-4 h-4" />
                  Settings
                </Link>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator className="bg-lime-500/10" />
            <div className="px-1 py-1">
              <div className="px-2 py-1 rounded-md overflow-hidden">
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
                        {(() => {
                          if (!connected) {
                            return (
                              <button
                                onClick={openConnectModal}
                                type="button"
                                className="w-full flex items-center justify-center gap-2 bg-lime-500/20 hover:bg-lime-500/30 text-lime-200 hover:text-lime-100 transition-colors rounded-md px-3 py-2 text-sm font-medium">
                                Connect Wallet
                              </button>
                            );
                          }

                          return (
                            <div className="flex flex-col space-y-2 w-full">
                              <button
                                onClick={openChainModal}
                                type="button"
                                className="flex items-center gap-2 bg-lime-500/10 hover:bg-lime-500/20 text-lime-200 hover:text-lime-100 transition-colors rounded-md px-3 py-2 text-sm">
                                {chain.name}
                              </button>

                              <button
                                onClick={openAccountModal}
                                type="button"
                                className="flex items-center justify-between gap-2 bg-lime-500/10 hover:bg-lime-500/20 text-lime-200 hover:text-lime-100 transition-colors rounded-md px-3 py-2 text-sm">
                                <span className="truncate">
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
              </div>
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
