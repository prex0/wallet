import { Token } from '@prex0/prex-client';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function TokenSelector({
  token,
  setToken,
  options,
  disabled
}: {
  token?: Token;
  setToken?: (token: Token) => void;
  options?: Token[];
  disabled?: boolean;
}) {
  if (!options || !setToken) {
    return null;
  }

  return (
    <Select value={token?.symbol} onValueChange={(value) => setToken(options.find((t) => t.symbol === value)!)} disabled={disabled}>
      <SelectTrigger className="w-full h-full">
        <SelectValue placeholder="Select token" />
      </SelectTrigger>
      <SelectContent className="flex flex-col">
        {options.map((token) => (
          <SelectItem value={token.symbol} className="flex items-center" key={token.symbol}>
            <div className='flex items-center'>
              <img src={token.image ?? ''} alt={token.symbol} className="w-4 h-4 mr-2" />
              <div>{token.symbol}</div>
            </div>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
