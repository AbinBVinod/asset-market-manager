import { http, createConfig } from 'wagmi'
import { arbitrumSepolia} from 'wagmi/chains'
import { injected, walletConnect } from 'wagmi/connectors'

export const config = createConfig({
  chains: [arbitrumSepolia],
  connectors: [
    injected(),
    walletConnect({ projectId: 'ace03604c7f4310793c0fd698e4e64db' }),
  ],
  ssr: true,
  transports: {
    [arbitrumSepolia.id]: http(),
  },
})

declare module 'wagmi' {
  interface Register {
    config: typeof config
  }
}
