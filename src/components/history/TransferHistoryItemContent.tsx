import { TransferHistoryItemCustomComponentReact } from "@prex0/uikit/history"
import { formatUnits, isAddressEqual } from "viem"
import { getFormattedDate } from "../../utils"

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
        <div className="flex justify-between">
          <div>{item.recipientDisplayName}に送りました。</div>
          <div>{formatUnits(BigInt(item.amount), token.decimals)} {token.symbol}</div>
        </div>
        <div className="flex justify-start">
          <div>
            <div className="text-xs text-zinc-500">
              {getFormattedDate(item.createdAt)}
            </div>
          </div>
        </div>
      </div>
    )
  } else if (isAddressEqual(item.recipient, me)) {
    return (
      <div className={className}>
        <div className="flex justify-between">
          <div>{item.senderDisplayName}から受け取りました。</div>
          <div>{formatUnits(BigInt(item.amount), token.decimals)} {token.symbol}</div>
        </div>
        <div className="flex justify-start">
          <div>
            <div className="text-xs text-zinc-500">
              {getFormattedDate(item.createdAt)}
            </div>
          </div>
        </div>
      </div>
    )
  }
}