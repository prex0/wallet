import {
  LinkReceive,
  LinkReceiveAmount,
  LinkReceiveError,
  LinkReceiveSender,
  LinkReceiveStatus,
  LinkReceiveButton
} from '@prex0/uikit/link-receive'

export const ReceivePage = () => {
  return (
    <div className='p-4'>
    <LinkReceive>
      <LinkReceiveAmount />
      <LinkReceiveSender />
      <LinkReceiveStatus />
      <LinkReceiveError />
      <LinkReceiveButton />
    </LinkReceive>
    </div>
  )
}
