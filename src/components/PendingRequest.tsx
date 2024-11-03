import {
  LinkReceive,
  LinkReceiveAmount,
  LinkReceiveError,
  LinkReceiveSender,
  LinkReceiveStatus,
  LinkReceiveShare
} from '@prex0/uikit/link-transfer'
import { UILabel1 } from '@prex0/uikit'
import { useCallback, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getURL } from '../utils'
import { cn, pressable, text } from '@prex0/uikit/styles'
import { PendingCodeModal } from './PendingCodeModal'

export const PendingRequest = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate()

  const handleSuccess = useCallback(() => {
    navigate('/')
  }, [navigate])

  return (
      <LinkReceive onSuccess={handleSuccess} getURL={getURL}>
        <div className='flex items-center justify-between'>
          <UILabel1>Amount:</UILabel1>
          <LinkReceiveAmount />
        </div>
        <div className='flex items-center justify-between'>
          <UILabel1>Sender:</UILabel1>
          <LinkReceiveSender />
        </div>
        <div className='flex items-center justify-between'>
          <UILabel1>Status:</UILabel1>
          <LinkReceiveStatus />
        </div>
        <LinkReceiveError />
        <LinkReceiveShare className='py-3'>
          <button className={cn(pressable.inverse, text.label1, 'rounded-lg h-12 w-full')}>Share</button>
        </LinkReceiveShare>

        <button className={cn(pressable.inverse, text.label1, 'rounded-lg h-12 w-full')} onClick={() => setIsOpen(true)}>Show Code</button>

        <PendingCodeModal isOpen={isOpen} onRequestClose={() => setIsOpen(false)} />
      </LinkReceive>
  )
}
  