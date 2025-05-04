import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import {
  base,
} from 'wagmi/chains';

export const config = getDefaultConfig({
  appName: 'SocigenX',
  projectId: 'YOUR_PROJECT_ID', // walletconnect projectId
  chains: [
    base,
  ],
  ssr: true,
});
