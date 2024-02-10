import { http, createConfig } from 'wagmi'
import { arbitrumSepolia } from 'wagmi/chains'


export const config = createConfig({
  chains: [arbitrumSepolia],
  ssr: true,
  transports: {
    [arbitrumSepolia.id]: http(),
  },
})
