import { LinkReceiveCode } from '@prex0/uikit/link-transfer'
import { UILabel2 } from '@prex0/uikit'
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export const PendingCodeModal = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Show Code</Button>
      </DialogTrigger>
			<DialogContent>
        <DialogHeader>
          <DialogTitle>Link Transfer Code</DialogTitle>
        </DialogHeader>

        <div className="mt-1 flex justify-center items-center">
          <div className='space-y-2'>
            <UILabel2 className='text-center'>Please scan this code</UILabel2>
            <div className="flex justify-center items-center">
              <LinkReceiveCode className='px-3' />
            </div>
          </div>
        </div>

        <DialogFooter>
          <DialogClose asChild>
            <Button variant="secondary">
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
			</DialogContent>
    </Dialog>
  )
}
