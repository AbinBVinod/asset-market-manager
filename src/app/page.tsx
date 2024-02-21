"use client"
import Assets from "@/components/AssetManager/Assets";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { WagmiProvider } from 'wagmi';
import { config } from '@/lib/wagmi';
import MarketEnginer from "@/components/Market-engine/marketEngine";


export default function Home() {

  const queryClient = new QueryClient();

  return (
    <>
     <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
      <Assets/>
      <MarketEnginer/>
      </QueryClientProvider>
      </WagmiProvider>
    </>
  );
}
