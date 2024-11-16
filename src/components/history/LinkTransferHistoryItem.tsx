import { formatUnits } from "viem"
import { getFormattedDate } from "../../utils"
import { LinkTransferHistoryItemCustomComponentReact } from "@prex0/uikit/history";
import { TableCell, TableRow } from "../ui/table"

export const LinkTransferHistoryItem = (props: LinkTransferHistoryItemCustomComponentReact) =>  {
  const { item, token } = props
  
  if (item === undefined || token === undefined) {
    return null;
  }

  const recipientLink =
    item.secret && item.messageId
      ? `${location.origin}/pending?id=${encodeURIComponent(
          item.messageId
        )}&s=${encodeURIComponent(item.secret)}`
      : undefined
 
  if(item.status === 'CANCELLED') {
    return (
      <TableRow>
        <TableCell>Cancelled</TableCell>
        <TableCell className="text-nowrap">{formatUnits(BigInt(item.amount), token.decimals)} {token.symbol}</TableCell>
      </TableRow>
    )
  }
  
  if (item.recipient && item.recipientName) {
    return (
      <TableRow>
        <TableCell>
          <div className="text-sm">Sent to <span className="text-xs text-muted-foreground">{item.recipientName}</span></div>
        </TableCell>
        <TableCell>
          <div>
            <div className="text-xs text-muted-foreground">
              {getFormattedDate(item.createdAt)}
            </div>
          </div>
        </TableCell>
        <TableCell className="text-sm text-nowrap">
          <div>{formatUnits(BigInt(item.amount), token.decimals)} {token.symbol}</div>
        </TableCell>

      </TableRow>
    )
  } else {
    return (
      <TableRow>
        <TableCell>
          <div>
            {recipientLink ? (
              <a
                href={recipientLink}
                className="text-blue-700 underline"
              >
                Sending...
              </a>
            ) : (
              'Sending...'
            )}
          </div>
        </TableCell>
        <TableCell>
          <div>
            <div className="text-xs text-muted-foreground">
              {getFormattedDate(item.createdAt)}
            </div>
          </div>
        </TableCell>

        <TableCell>
          <div>{formatUnits(BigInt(item.amount), token.decimals)} {token.symbol}</div>
        </TableCell>
      </TableRow>
    )
  }
}
  