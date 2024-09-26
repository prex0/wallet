import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { PrexUIKitProvider } from "@prex0/uikit";
import '@prex0/uikit/styles.css';
import './index.css'
import { CHAIN_ID, USDC_TOKEN, WETH_TOKEN } from './constants.ts';
import Modal from 'react-modal';

Modal.setAppElement('#root');

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PrexUIKitProvider
      chainId={CHAIN_ID}
      policyId={import.meta.env.VITE_POLICY_ID}
      apiKey={import.meta.env.VITE_API_KEY}
      tokens={[USDC_TOKEN, WETH_TOKEN]}
    >
      <App />
    </PrexUIKitProvider>
  </StrictMode>,
)