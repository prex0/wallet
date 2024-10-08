import { PendingRequest } from '../components/PendingRequest'
import { Link } from 'react-router-dom'

export const PendingPage = () => {
  return (
    <div className='p-4'>
      <div className='p-6 max-w-lg mx-auto space-y-5'>
        <Link to="/" className="block mb-4 text-blue-500 hover:underline">
          &larr; Back
        </Link>
        <PendingRequest />
      </div>
    </div>
  )
}
