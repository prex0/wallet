import { UILabel1, UIPanel } from "@prex0/uikit";
import { Link } from "react-router-dom";

export const BottomNav = () => {
  return (
    <UIPanel className="fixed bottom-0 left-0 w-full md:hidden">
      <nav className="flex justify-around py-0">
        <div className="flex flex-col items-center">
            <Link to="/">
              <UILabel1 className="p-4">Home</UILabel1>
            </Link>
        </div>
        <div className="flex flex-col items-center">
          <Link to="send">
            <UILabel1 className="p-4">Send</UILabel1>
          </Link>
        </div>
        <div className="flex flex-col items-center">
          <Link to="swap">
            <UILabel1 className="p-4">Swap</UILabel1>
          </Link>
        </div>
      </nav>
    </UIPanel>
  );
};
