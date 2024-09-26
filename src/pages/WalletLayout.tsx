import { useCallback, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { EmbeddedWallet } from '@prex0/uikit/wallet';
import { HomePage } from './HomePage';
import { SlidingForm } from '../components/SlidingForm';
import { BottomNav } from '../components/BottomNav';
import { Header } from '../components/Header';
import { SIDE_MENU, Sidebar } from '../components/SideBar';

export function WalletLayout() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [menu, setMenu] = useState<SIDE_MENU>('home');

  const handleSelectMenu = useCallback((menu: SIDE_MENU) => {
    if (menu === 'home') {
      setIsFormOpen(false)
    } else {
      setIsFormOpen(!isFormOpen)
      setMenu(menu)
    }
  }, [isFormOpen, setIsFormOpen, setMenu])

  return <EmbeddedWallet>
    <div className="flex">
      <Sidebar onSelectMenu={handleSelectMenu}/>
      <div className='w-full'>
        <Header />
        <div className='md:block hidden w-full'>
          <HomePage />
        </div>
      </div>
    </div>
    <Outlet />
    <SlidingForm isOpen={isFormOpen} menu={menu} onClose={() => {setIsFormOpen(false)}}/>
    <BottomNav />
  </EmbeddedWallet>
}


