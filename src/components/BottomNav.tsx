import { Link } from "react-router-dom";

export const BottomNav = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-background md:hidden border-t">
      <nav className="flex justify-around py-0">
        <div className="flex flex-col items-center">
            <Link to="/">
              <div className="p-4">Home</div>
            </Link>
        </div>
        <div className="flex flex-col items-center">
          <Link to="send">
            <div className="p-4">Send</div>
          </Link>
        </div>
        <div className="flex flex-col items-center">
          <Link to="swap">
            <div className="p-4">Swap</div>
          </Link>
        </div>
      </nav>
    </div>
  );
};
