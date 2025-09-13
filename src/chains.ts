export enum ChainId {
  MAINNET = 1,
  NUTRIEMP = 432,
  ARBITRUM_ONE = 42161,
  POL = 137
  
}

export const SUPPORTED_CHAINS = [
  ChainId.MAINNET,
  ChainId.NUTRIEMP,
  ChainId.ARBITRUM_ONE,
  ChainId.POL
] as const
export type SupportedChainsType = typeof SUPPORTED_CHAINS[number]

export enum NativeCurrencyName {
  // Strings match input for CLI
  ETHER = 'ETH',
  POL = 'POL',
  GRAMZ = 'GRAMZ'
}
