import { Address, MyCode } from '@prex0/uikit/identity'
import { LogoutWalletButton } from '@prex0/uikit/wallet'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from './ui/button'


export const MyAddressModal = ({className}: {className?: string}) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className={className}>
          <Address isSliced/>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>My Address</DialogTitle>
          <DialogDescription>
          Arbitrumチェーンに対応しています。
          </DialogDescription>
        </DialogHeader>
        <div className='flex justify-center items-center'>
          <MyCode />
        </div>
        <div className='flex justify-center items-center'>
          <Address className='cursor-pointer'/>
        </div>
        <DialogFooter>
          <div className='w-full flex justify-center'>
            <LogoutWalletButton buttonText='Logout' onSuccess={() => {
              location.reload()
            }}/>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
