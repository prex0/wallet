import {DarkModeSwitch, UILabel1} from '@prex0/uikit'
import { Address } from '@prex0/uikit/identity';
import { background, border, cn } from '@prex0/uikit/styles';
import { BiSun, BiSolidMoon } from "react-icons/bi";

export const Header = () => {
  return (
    <header className={cn(background.default, border.defaultActive, "flex justify-between items-center w-full h-16 px-4 border-b")}>
      <div className="flex items-center">
        <UILabel1 className="text-xl font-bold">Logo</UILabel1>
      </div>
      <div className="flex items-center space-x-4">
        <button className="px-3 py-2 rounded-md transition-colors">
          <Address isSliced/>
        </button>
        <div className="w-8 h-8 rounded-full flex items-center justify-center">
          <DarkModeSwitch
            className='flex items-center justify-center'
            darkModeComponent={<BiSun />}
            lightModeComponent={<BiSolidMoon />}
          />
        </div>
      </div>
    </header>
  );
};