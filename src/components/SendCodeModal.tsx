import { LinkTransferCode } from '@prex0/uikit/link-transfer'
import { makeURL } from '../utils'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose
} from "@/components/ui/dialog"
import { Button } from './ui/button'

export const SendCodeModal = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Show Code</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Link Transfer Code</DialogTitle>
          <DialogDescription>
            Please scan this code
          </DialogDescription>
        </DialogHeader>
        <div className='flex justify-center items-center'>
          <LinkTransferCode makeURL={makeURL} className='px-3' />
        </div>
        <DialogFooter>
          <DialogClose>
            <Button type="submit">Close</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
