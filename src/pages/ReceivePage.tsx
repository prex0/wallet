import {
  LinkReceive,
  LinkReceiveAmount,
  LinkReceiveError,
  LinkReceiveSender,
  LinkReceiveStatus,
  LinkReceiveButton
} from '@prex0/uikit/link-receive'
import { Header } from '../components/Header'
import { UILabel1 } from '@prex0/uikit'
import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

export const ReceivePage = () => {
  const navigate = useNavigate()

  const handleSuccess = useCallback(() => {
    navigate('/')
  }, [navigate])

  return (
    <div className='p-4'>
      <Header />
      <div className='p-6 max-w-lg mx-auto space-y-4'>
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
          <LinkReceiveButton />
        </LinkReceive>
      </div>
    </div>
  )
}
