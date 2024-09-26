import { UILabel1, UIPanel } from "@prex0/uikit";
import { Link } from "react-router-dom";

export const BottomNav = () => {
  return (
    <UIPanel className="fixed bottom-0 left-0 w-full md:hidden">
      <nav className="flex justify-around py-4">
        <div className="flex flex-col items-center">
          <div className="text-xl" />
          <UILabel1>
            <Link to="home">Home</Link>
          </UILabel1>
        </div>
        <div className="flex flex-col items-center">
          <div className="text-xl" />
          <UILabel1>
            <Link to="send">Send</Link>
          </UILabel1>
        </div>
        <div className="flex flex-col items-center">
          <div className="text-xl" />
          <UILabel1>
            <Link to="swap">Swap</Link>
          </UILabel1>
        </div>
      </nav>
    </UIPanel>
  );
};
