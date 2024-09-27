import { EmbeddedWallet } from "@prex0/uikit/wallet";
import { Outlet } from "react-router-dom";

export function Layout() {
  return <EmbeddedWallet title="Prex Wallet">
    <Outlet />
  </EmbeddedWallet>
}
