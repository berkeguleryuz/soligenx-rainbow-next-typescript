"use client";

import * as React from "react";

import { NavMain } from "@/components/nav-main";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenuButton,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import Image from "next/image";
import { NavUser } from "./nav-user";
import { useAccount } from "wagmi";

export function AppSidebar({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  const { address } = useAccount();

  const user = {
    name: address ? `${address.slice(0, 6)}...${address.slice(-4)}` : "Guest",
    email: "Web3 Wallet",
  };

  return (
    <Sidebar collapsible="icon" {...props} className="-z-1">
      <SidebarHeader>
        <div className="flex items-center justify-between group-data-[state=collapsed]:flex-col group-data-[state=collapsed]:gap-4">
          <SidebarMenuButton
            size="lg"
            className="data-[state=open]:bg-lime-500 data-[state=open]:text-white flex-1">
            <div className="flex aspect-square size-8 items-center justify-center rounded-lg text-sidebar-primary-foreground">
              <Image src="/logow.png" alt="SocigenX" width={100} height={100} />
            </div>
            <div className="grid flex-1 text-left text-sm leading-tight">
              <span className="truncate font-semibold">SocigenX</span>
              <span className="truncate text-xs">Web3</span>
            </div>
          </SidebarMenuButton>
          <SidebarTrigger className="p-2 z-10 text-white" />
        </div>
      </SidebarHeader>
      <SidebarContent>
        <NavMain />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={user} />
      </SidebarFooter>
    </Sidebar>
  );
}
