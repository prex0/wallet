import { Outlet } from "react-router-dom";
import { EmbeddedWallet } from '@prex0/uikit/wallet';

export function Layout() {
  return (<EmbeddedWallet title="Prex Wallet"><Outlet /></EmbeddedWallet>)
}
