import { LinkReceiveCode } from '@prex0/uikit/link-receive'
import { BaseModal } from './common/BaseModal'
import { AiOutlineClose } from 'react-icons/ai'
import { UILabel1, UILabel2 } from '@prex0/uikit'
import { makeURL } from '../utils'

export const PendingCodeModal = ({
  isOpen,
  onRequestClose,
}: {
  isOpen: boolean
  onRequestClose: () => void
}) => {
  return (
    <BaseModal isOpen={isOpen} onRequestClose={onRequestClose}>
			<div className='p-6 flex justify-between items-center'>
				<UILabel1>Link Transfer Code</UILabel1>
				<div className="cursor-pointer">
					<AiOutlineClose
						className="w-8 h-8 text-zinc-800"
						onClick={onRequestClose}
					/>
				</div>
			</div>

      <div className="mt-1 flex justify-center items-center">
        <div className='space-y-2'>
          <UILabel2 className='text-center'>Please scan this code</UILabel2>
          <div className="flex justify-center items-center">
            <LinkReceiveCode makeURL={makeURL} className='px-3' />
					</div>
        </div>
      </div>
    </BaseModal>
  )
}
