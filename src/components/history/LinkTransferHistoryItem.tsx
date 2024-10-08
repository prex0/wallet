import { formatUnits } from "viem"
import { getFormattedDate } from "../../utils"
import { LinkTransferHistoryItemCustomComponentReact } from "@prex0/uikit/history";

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
  
  if (item.recipient && item.recipientDisplayName) {
    return (
      <div>
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
  } else {
    return (
      <div>
        <div className="flex justify-between">
          <div>
            {recipientLink ? (
              <a
                href={recipientLink}
                className="text-blue-700 underline"
              >
                送付しています
              </a>
            ) : (
              '送付しています'
            )}
          </div>
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
  