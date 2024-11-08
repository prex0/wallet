import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  TransferCode,
  TransferCopyLink
} from "@prex0/uikit/transfer";

export function CodeDialog({onCopied}: {onCopied?: () => void}) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Show Code</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[320px]">
        <DialogHeader>
          <DialogTitle>Code</DialogTitle>
          <DialogDescription>
            Scan this code to receive the funds
          </DialogDescription>
        </DialogHeader>
        <div className="flex justify-center items-center">
          <TransferCode onCopied={onCopied} />
        </div>
        <DialogFooter>
          <TransferCopyLink onCopied={onCopied} className="w-full" asChild>
            <Button variant="secondary">
              Copy Link
            </Button>
          </TransferCopyLink>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}