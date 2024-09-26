import { UILabel1, UIPanel } from "@prex0/uikit";

export type SIDE_MENU = 'home' | 'send' | 'swap'

export const Sidebar = ({onSelectMenu}: {onSelectMenu: (menu: SIDE_MENU) => void}) => {
  return (
    <UIPanel className="hidden md:flex flex-col w-64 h-screen">
      <nav className="flex flex-col mt-10 space-y-6">
        <div onClick={() => onSelectMenu('home')} className="flex items-center px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-600 cursor-pointer">
          <div className="mr-3" />
          <UILabel1 >Home</UILabel1>
        </div>
        <div onClick={() => onSelectMenu('send')} className="flex items-center px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-600 cursor-pointer">
          <div className="mr-3" />
          <UILabel1>Send</UILabel1>
        </div>
        <div onClick={() => onSelectMenu('swap')} className="flex items-center px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-600 cursor-pointer">
          <div className="mr-3" />
          <UILabel1>Swap</UILabel1>
        </div>
      </nav>
    </UIPanel>
  );
};
  