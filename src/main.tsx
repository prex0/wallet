import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { USDC_TOKEN_ARBITRUM, WETH_TOKEN_ARBITRUM, ARB_TOKEN_ARBITRUM, PrexUIKitProvider, WSTETH_TOKEN_ARBITRUM } from "@prex0/uikit";
import '@prex0/uikit/styles.css';
import './index.css'
import { CHAIN_ID } from './constants.ts';
import { en } from './utils/en';
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PrexUIKitProvider
      chainId={CHAIN_ID}
      policyId={import.meta.env.VITE_POLICY_ID}
      apiKey={import.meta.env.VITE_API_KEY}
      tokens={[USDC_TOKEN_ARBITRUM, WETH_TOKEN_ARBITRUM, WSTETH_TOKEN_ARBITRUM, ARB_TOKEN_ARBITRUM]}
      dryRun={import.meta.env.VITE_DRY_RUN === 'true'}
      localization={{
        defaultLocale: 'en',
        variables: {
          en: en,
        },
      }}
    >
      <App />
    </PrexUIKitProvider>
  </StrictMode>,
)


// prevent touch action on the page
document.addEventListener('touchstart', function(event){
  event.preventDefault();
});