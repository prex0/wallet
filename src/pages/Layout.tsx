import { EmbeddedWallet, DevicePasskeySupport } from "@prex0/uikit/wallet";
import { Outlet } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster"
import { openChrome } from "@prex0/uikit/wallet";
import { Button } from "../components/ui/button";
import { useEffect, useState } from "react";

export function Layout() {
  return <DevicePasskeySupport notSupportedComponent={<NotSupported/>}><EmbeddedWallet title="Prex Wallet">
    <Outlet />
    <Toaster />
  </EmbeddedWallet></DevicePasskeySupport>
}


function NotSupported() {
  const [seconds, setSeconds] = useState(3);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prev) => prev - 1);
    }, 1000);

    const timeout = setTimeout(() => {
      openChrome();
    }, 3000);

    return () => {
      clearInterval(timer);
      clearTimeout(timeout);
    };
  }, [setSeconds]);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold mb-4 text-center">Device not supported</h1>
      <p className="text-center">Please use a device that supports passkeys</p>
      <p className="text-center">Opening Chrome in {seconds} seconds...</p>
      <Button onClick={openChrome}>Open Chrome?</Button>
    </div>
  );
}
