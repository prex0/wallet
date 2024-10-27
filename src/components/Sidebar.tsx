import { UILabel1 } from "@prex0/uikit";
import { Button } from "./ui/button";

export type SIDE_MENU = 'home' | 'send' | 'swap'

export const Sidebar = ({onSelectMenu}: {onSelectMenu: (menu: SIDE_MENU) => void}) => {
  return (
    <div className="bg-background border hidden md:flex flex-col w-64 h-screen">
      <nav className="flex flex-col mt-10 space-y-6">
        <Button variant={"ghost"} onClick={() => onSelectMenu('home')}>
          <UILabel1 >Home</UILabel1>
        </Button>
        <Button variant={"ghost"} onClick={() => onSelectMenu('send')}>
          <UILabel1>Send</UILabel1>
        </Button>
        <Button variant={"ghost"} onClick={() => onSelectMenu('swap')}>
          <UILabel1>Swap</UILabel1>
        </Button>
      </nav>
    </div>
  );
};
  