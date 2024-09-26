import { Token } from "@prex0/uikit/token"

const MODE = import.meta.env.MODE

// Chain ID
export const CHAIN_ID = MODE === 'dev' ? 421614 : 42161

// Advanced

export const MAX_FEE_PER_GAS = '0.23'
export const MAX_PRIORITY_FEE_PER_GAS = '0.11'


export const DEMO_TOKEN: Token = {
  name: 'USDC',
  address: '0xAa0ebd8c37f4E00425cC82b2E19fee54a097e769',
  symbol: 'USDC',
  decimals: 18,
  precision: 2,
  image:
    'https://d3r81g40ycuhqg.cloudfront.net/wallet/wais/44/2b/442b80bd16af0c0d9b22e03a16753823fe826e5bfd457292b55fa0ba8c1ba213-ZWUzYjJmZGUtMDYxNy00NDcyLTg0NjQtMWI4OGEwYjBiODE2',
  chainId: CHAIN_ID,
};

export const USDC_TOKEN: Token = MODE === 'dev' ? DEMO_TOKEN : {
  name: 'USDC',
  address: '0xaf88d065e77c8cC2239327C5EDb3A432268e5831',
  symbol: 'USDC',
  decimals: 6,
  precision: 2,
  image:
    'https://d3r81g40ycuhqg.cloudfront.net/wallet/wais/44/2b/442b80bd16af0c0d9b22e03a16753823fe826e5bfd457292b55fa0ba8c1ba213-ZWUzYjJmZGUtMDYxNy00NDcyLTg0NjQtMWI4OGEwYjBiODE2',
  chainId: CHAIN_ID,
};

export const WETH_TOKEN: Token = {
  name: 'Wrapped Ether',
  address: '0x82aF49447D8a07e3bd95BD0d56f35241523fBab1',
  symbol: 'WETH',
  decimals: 18,
  precision: 12,
  image:
    'https://d3r81g40ycuhqg.cloudfront.net/wallet/wais/47/bc/47bc3593c2dec7c846b66b7ba5f6fa6bd69ec34f8ebb931f2a43072e5aaac7a8-YmUwNmRjZDUtMjczYy00NDFiLWJhZDUtMzgwNjFmYWM0Njkx',
  chainId: CHAIN_ID
};

