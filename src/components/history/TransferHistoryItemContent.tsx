import { TransferHistoryItemCustomComponentReact } from "@prex0/uikit/history"
import { formatUnits, isAddressEqual } from "viem"
import { getFormattedDate } from "../../utils"
import { cn } from "@prex0/uikit/styles"
import { TableCell, TableRow } from "../ui/table"

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
      <TableRow className={className}>
          <TableCell>
            <div>Sent</div>
            <div className={cn('text-zinc-500 text-xs md:text-sm')}>to {item.recipientDisplayName}</div>
          </TableCell>

          <TableCell className="text-xs md:text-sm text-zinc-500">
            {getFormattedDate(item.createdAt)}
          </TableCell>
          <TableCell className="text-nowrap">{formatUnits(BigInt(item.amount), token.decimals)} {token.symbol}</TableCell>
      </TableRow>
    )
  } else if (isAddressEqual(item.recipient, me)) {
    return (
      <TableRow className={className}>
          <TableCell>
            <div>Received</div>
            <div className={cn('text-zinc-500 text-xs md:text-sm')}>from {item.senderDisplayName}</div>
          </TableCell>

          <TableCell className="text-xs md:text-sm text-zinc-500">
            {getFormattedDate(item.createdAt)}
          </TableCell>

          <TableCell className="text-nowrap">{formatUnits(BigInt(item.amount), token.decimals)} {token.symbol}</TableCell>
      </TableRow>
    )
  }
}