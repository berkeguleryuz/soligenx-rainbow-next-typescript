"use client";

import QuickActions from "@/components/dashboard/QuickActions";
import StatsCard from "@/components/dashboard/StatsCard";
import { useAccount } from "wagmi";

export default function DashboardPage() {
  const { address } = useAccount();
  
  return (
    <section className="p-4 min-h-screen">
      <h1 className="text-5xl font-bold">Dashboard</h1>

      <div className="flex flex-col gap-4">
        <h2 className="text-3xl font-bold">
          Welcome to SocigenX
        </h2>
        <p className="text-lg text-lime-200">
          Your wallet: {address ? `${address.slice(0, 6)}...${address.slice(-4)}` : 'Not connected'}
        </p>
      </div>

      <StatsCard />

      <div className="h-full w-full flex md:flex-row flex-col gap-4 mt-4">
        <QuickActions />
      </div>
    </section>
  );
}
