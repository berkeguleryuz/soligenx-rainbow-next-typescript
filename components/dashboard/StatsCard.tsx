"use client";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { ImagesIcon, Package, WalletIcon } from "lucide-react";
import { motion } from "framer-motion";
import { useAccount } from "wagmi";

const StatsCard = () => {
  const { isConnected } = useAccount();
  
  const stats = [
    {
      title: "Wallet Connected",
      value: () => isConnected ? "Yes" : "No",
      icon: WalletIcon,
      gradient: "from-lime-500/20 to-lime-500/10",
      hoverGradient: "from-lime-500/30 to-lime-500/20",
    },
    {
      title: "Available Tools",
      value: () => 3,
      icon: Package,
      gradient: "from-lime-500/20 to-lime-500/10",
      hoverGradient: "from-lime-500/30 to-lime-500/20",
    },
    {
      title: "Image Generation",
      value: () => "Unlimited",
      icon: ImagesIcon,
      gradient: "from-lime-500/20 to-lime-500/10",
      hoverGradient: "from-lime-500/30 to-lime-500/20",
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <Card className="group bg-black/20 hover:bg-black/30 transition-all duration-300 hover:scale-[1.02] hover:translate-y-1 border-lime-500/20 text-white backdrop-blur-sm">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium bg-gradient-to-r from-lime-500 to-lime-300 bg-clip-text text-transparent">
                {stat.title}
              </CardTitle>
              <div className={`p-2 rounded-full bg-gradient-to-br ${stat.gradient} group-hover:${stat.hoverGradient} transition-colors duration-300`}>
                <stat.icon className="w-4 h-4 text-lime-500" />
              </div>
            </CardHeader>
            <CardContent className="flex items-center gap-2">
              <div className="text-2xl flex items-end gap-2 font-bold">
                {stat.value()}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
};

export default StatsCard;
