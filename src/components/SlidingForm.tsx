import { AiOutlineClose } from "react-icons/ai";
import { SendForm } from "./SendForm";
import { SwapForm } from "./SwapForm";
import { SIDE_MENU } from "./Sidebar";

export const SlidingForm = ({ isOpen, menu, onClose }: { isOpen: boolean, menu: SIDE_MENU, onClose: () => void }) => {
  return (
    <div
      className={`bg-background border fixed top-0 right-0 w-[450px] h-full shadow-lg transform transition-transform duration-300 ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
        <div className='p-4'>
          <div className='flex justify-between'>
            <h2 className="text-2xl font-bold">{menu === 'send' ? 'Send' : 'Swap'}</h2>
            <button onClick={onClose} className="text-right">
              <AiOutlineClose />
            </button>
          </div>
          {menu === 'send' ? <SendForm /> : <SwapForm />}
        </div>
    </div>
  );
};
