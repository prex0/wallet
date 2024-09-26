import { formatUnits } from "viem"
import { SwapHistoryItemCustomComponentReact } from "@prex0/uikit/history"
import { getFormattedDate } from "../utils/date"

export const SwapHistoryItemContent = ({
  className,
  item,
  inputToken,
  outputToken
}: SwapHistoryItemCustomComponentReact) => {
  if(item === undefined || inputToken === undefined || outputToken === undefined) {
    return null;
  }
  inputToken.precision

  return (
    <div className={className}>
      <div className="flex justify-between">
        <div className="flex items-center gap-2">
          <div>{inputToken.symbol}</div>
          <div>-&gt;</div>
          <div>{outputToken.symbol}</div>
        </div>
        <div>{formatUnits(roundBigInt(BigInt(item.amount), inputToken.precision || 0, true), inputToken.decimals)} {inputToken.symbol}</div>
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

function roundBigInt(amount: bigint, precision: number, isRoundUp: boolean): bigint {
  const factor = BigInt(10) ** BigInt(precision);
  const remainder = amount % factor;
  const base = amount - remainder;

  if (isRoundUp && remainder > 0n) {
    return base + factor;
  } else {
    return base;
  }
}
