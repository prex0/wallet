import { UILabel1} from '@prex0/uikit'
import { MyAddressModal } from './MyAddressModal';
import { Link } from 'react-router-dom';
import { ModeToggle } from './mode-toggle';

export const Header = () => {
  return (
    <header className="bg-background flex justify-between items-center w-full h-16 px-4 border-b">
      <div className="flex items-center">
        <Link to="/"><UILabel1 className="text-xl font-bold">Logo</UILabel1></Link>
      </div>
      <div className="flex items-center space-x-4">
        <MyAddressModal className="px-3 py-2 rounded-md transition-colors"/>
        <div className="w-8 h-8 rounded-full flex items-center justify-center">
          <ModeToggle />
        </div>
      </div>
      
    </header>
  );
};