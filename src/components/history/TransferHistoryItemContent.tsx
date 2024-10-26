import { TransferHistoryItemCustomComponentReact } from "@prex0/uikit/history"
import { formatUnits, isAddressEqual } from "viem"
import { getFormattedDate } from "../../utils"
import { cn } from "@prex0/uikit/styles"

export const TransferHistoryItemContent = ({
  className,
  item,
  me,
  token
}: TransferHistoryItemCustomComponentReact) => {
  if (item === undefined || me === undefined || token === undefined) {
    return null
  }

  if (isAddressEqual(item.sender, me)) {
    return (
      <div className={className}>
        <div className="flex justify-between items-center">
          <div>
            <div>Sent</div>
            <div className={cn('text-zinc-500 text-xs md:text-sm')}>to {item.recipientDisplayName}</div>
          </div>

          <div className="text-xs md:text-sm text-zinc-500">
            {getFormattedDate(item.createdAt)}
          </div>
          <div className="text-base">{formatUnits(BigInt(item.amount), token.decimals)} {token.symbol}</div>
        </div>
      </div>
    )
  } else if (isAddressEqual(item.recipient, me)) {
    return (
      <div className={className}>
        <div className="flex justify-between">
          <div>
            <div>Received</div>
            <div className={cn('text-zinc-500 text-xs md:text-sm')}>from {item.senderDisplayName}</div>
          </div>

          <div className="text-xs md:text-sm text-zinc-500">
            {getFormattedDate(item.createdAt)}
          </div>

          <div>{formatUnits(BigInt(item.amount), token.decimals)} {token.symbol}</div>
        </div>
      </div>
    )
  }
}