"use client";

import type React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider } from "wagmi";
import { RainbowKitProvider, Theme } from "@rainbow-me/rainbowkit";

import { config } from "../wagmi";

const queryClient = new QueryClient();

export function Providers({ children }: { children: React.ReactNode }) {
  const socigenxTheme: Theme = {
    blurs: {
      modalOverlay: "blur(8px)",
    },
    colors: {
      accentColor: "#6AAA0D",
      accentColorForeground: "#000000",
      actionButtonBorder: "#84cc16",
      actionButtonBorderMobile: "#6AAA0D",
      actionButtonSecondaryBackground: "#6AAA0D",
      closeButton: "#000000",
      closeButtonBackground: "#6AAA0D",
      connectButtonBackground: "#84cc16",
      connectButtonBackgroundError: "#FF494A",
      connectButtonInnerBackground: "#84cc16",
      connectButtonText: "#000000",
      connectButtonTextError: "#FFFFFF",
      connectionIndicator: "#84cc16",
      downloadBottomCardBackground: "#121212",
      downloadTopCardBackground: "#1F1F1F",
      error: "#FF494A",
      generalBorder: "#303030",
      generalBorderDim: "#202020",
      menuItemBackground: "#2E5C14",
      modalBackdrop: "rgba(0, 0, 0, 0.7)",
      modalBackground: "#84cc16",
      modalBorder: "#303030",
      modalText: "#000000",
      modalTextDim: "#000000",
      modalTextSecondary: "#000000",
      profileAction: "#6AAA0D",
      profileActionHover: "#6AAA0D",
      profileForeground: "#84CC15",
      selectedOptionBorder: "#6AAA0D",
      standby: "#6AAA0D",
    },
    fonts: {
      body: "Inter",
    },
    radii: {
      actionButton: "8px",
      connectButton: "8px",
      menuButton: "8px",
      modal: "16px",
      modalMobile: "16px",
    },
    shadows: {
      connectButton: "0px 4px 12px rgba(64, 203, 90, 0.3)",
      dialog: "0px 8px 32px rgba(0, 0, 0, 0.5)",
      profileDetailsAction: "0px 2px 6px rgba(64, 203, 90, 0.2)",
      selectedOption: "0px 2px 6px rgba(64, 203, 90, 0.3)",
      selectedWallet: "0px 2px 6px rgba(64, 203, 90, 0.2)",
      walletLogo: "0px 2px 16px rgba(0, 0, 0, 0.25)",
    },
  };
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider theme={socigenxTheme} locale="en">
          {children}
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
