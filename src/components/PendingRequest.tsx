import {
  LinkReceive,
  LinkReceiveAmount,
  LinkReceiveError,
  LinkReceiveSender,
  LinkReceiveStatus,
  LinkReceiveShare
} from '@prex0/uikit/link-receive'
import { UILabel1 } from '@prex0/uikit'
import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { makeURL } from '../utils'
import { cn, pressable, text } from '@prex0/uikit/styles'

export const PendingRequest = () => {
  const navigate = useNavigate()

  const handleSuccess = useCallback(() => {
    navigate('/')
  }, [navigate])

  return (
      <LinkReceive onSuccess={handleSuccess}>
        <div className='flex items-center justify-between'>
          <UILabel1>Amount:</UILabel1>
          <LinkReceiveAmount className='text-lg'/>
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
        <LinkReceiveShare makeURL={makeURL} className='py-3'>
          <button className={cn(pressable.inverse, text.label1, 'rounded-lg h-12 w-full')}>Share</button>
        </LinkReceiveShare>
      </LinkReceive>
  )
}
  