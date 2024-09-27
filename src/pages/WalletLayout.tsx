import { useCallback, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { HomePage } from './HomePage';
import { SlidingForm } from '../components/SlidingForm';
import { BottomNav } from '../components/BottomNav';
import { Header } from '../components/Header';
import { SIDE_MENU, Sidebar } from '../components/Sidebar';
import { useBreakpoints } from '@prex0/uikit';

// WalletLayout component: Manages the layout of the wallet interface
export function WalletLayout() {
  // State for controlling the sliding form
  const [isFormOpen, setIsFormOpen] = useState(false);
  // State for managing the selected menu item
  const [menu, setMenu] = useState<SIDE_MENU>('home');

  // Handler for menu selection
  const handleSelectMenu = useCallback((menu: SIDE_MENU) => {
    if (menu === 'home') {
      setIsFormOpen(false)
    } else {
      setIsFormOpen(!isFormOpen)
      setMenu(menu)
    }
  }, [isFormOpen, setIsFormOpen, setMenu])

  const breakpoint = useBreakpoints();

  return <div><div className="flex">
      <Sidebar onSelectMenu={handleSelectMenu}/>
      <div className='w-full'>
        {/* Header component */}
        <Header />
        {/* HomePage component, hidden on mobile */}
        <div className='sm:block hidden w-full'>
          {breakpoint !== 'sm' ? <HomePage /> : null}
        </div>
      </div>
    </div>
    {/* Router outlet for nested routes */}
    {breakpoint === 'sm' ? <Outlet /> : null}
    {/* Sliding form component */}
    <SlidingForm isOpen={isFormOpen} menu={menu} onClose={() => {setIsFormOpen(false)}}/>
    {/* Bottom navigation component for mobile */}
    <BottomNav />
  </div>
}
