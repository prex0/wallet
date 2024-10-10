import { Address, MyCode } from '@prex0/uikit/identity'
import { LogoutWalletButton } from '@prex0/uikit/wallet'
import { BaseModal } from './common/BaseModal'
import { AiOutlineClose } from 'react-icons/ai'
import { UILabel1, UILabel2 } from '@prex0/uikit'

export const MyAddressModal = ({
  isOpen,
  onRequestClose,
}: {
  isOpen: boolean
  onRequestClose: () => void
}) => {
  return (
    <BaseModal isOpen={isOpen} onRequestClose={onRequestClose} height={430}>
			<div className='p-6 flex justify-between items-center'>
				<UILabel1>My Address</UILabel1>
				<div className="cursor-pointer">
					<AiOutlineClose
						className="w-8 h-8 text-zinc-800"
						onClick={onRequestClose}
					/>
				</div>
			</div>

      <div className="mt-1 flex justify-center items-center">
        <div className='space-y-2'>
					<div className="flex justify-center items-center">
						<MyCode />
					</div>
					<div className="flex justify-center items-center">
            <Address className='cursor-pointer'/>
          </div>
          <UILabel2>
						Arbitrumチェーンに対応しています。
          </UILabel2>
          <LogoutWalletButton buttonText='Logout' onSuccess={() => {
            location.reload()
          }}/>
        </div>
      </div>
    </BaseModal>
  )
}
