import {
  LinkReceive,
  LinkReceiveAmount,
  LinkReceiveError,
  LinkReceiveSender,
  LinkReceiveStatus,
  LinkReceiveExpiration,
  LinkReceiveShare
} from '@prex0/uikit/link-transfer'
import { UILabel1 } from '@prex0/uikit'
import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { getFormattedDate, getURL } from '../utils'
import { PendingCodeModal } from './PendingCodeModal'
import { Button } from './ui/button'

export const PendingRequest = () => {
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
        <div className='flex items-center justify-between'>
          <UILabel1>Expiration:</UILabel1>
          <LinkReceiveExpiration format={(timestamp) => getFormattedDate(timestamp)}/>
        </div>
        <LinkReceiveError />
        <LinkReceiveShare className='py-3'>
          <Button className='w-full'>Share</Button>
        </LinkReceiveShare>

        <PendingCodeModal />
      </LinkReceive>
  )
}
  