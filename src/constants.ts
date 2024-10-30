const MODE = import.meta.env.MODE

// Chain ID
export const CHAIN_ID = MODE === 'dev' ? 421614 : 42161

// Advanced

export const MAX_FEE_PER_GAS = '0.23'
export const MAX_PRIORITY_FEE_PER_GAS = '0.11'
