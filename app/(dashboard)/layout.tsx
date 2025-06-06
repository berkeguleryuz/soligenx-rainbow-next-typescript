import { AppSidebar } from "@/components/app-sidebar";
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar";
import ConnectWalletWrapper from "@/components/ConnectWalletWrapper";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SocigenX AI",
  description: "Find the best AI tools for your needs",
};

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className="relative w-full h-full overflow-hidden">
        <div className="absolute top-0 z-[-2] opacity-10 h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_70%_60%_at_50%_-50%,rgba(64,203,90,0.8),rgba(255,255,255,0))]" />
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0 text-white">
          <ConnectWalletWrapper>
            {children}
          </ConnectWalletWrapper>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default DashboardLayout;
