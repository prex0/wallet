import { LinkTransfer, LinkTransferAmountForm, LinkTransferButton, LinkTransferError, LinkTransferTokenSelector, LinkTransferShare } from '@prex0/uikit/link-transfer';
import { makeURL } from '../utils/make-url';
import { useState } from 'react';
import { USDC_TOKEN } from '../constants';
import { SendCodeModal } from './SendCodeModal';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { useAmountFormContext } from '@prex0/uikit';
import { Label } from './ui/label';
import { cn } from '../lib/utils';
import { Token } from '@prex0/prex-client';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export const SendForm = () => {
  const [isSuccess, setIsSuccess] = useState(false);

  return (
    <div className=" px-3">
      <LinkTransfer className="mt-4" token={USDC_TOKEN.address as `0x${string}`} onSuccess={() => setIsSuccess(true)}>
        <div className="mb-4 space-y-2">
          <Label>Token</Label>
          <div className="flex justify-end">
            <LinkTransferTokenSelector>
              <TokenSelector />
            </LinkTransferTokenSelector>
          </div>
        </div>

        <div className="mb-4 space-y-2">
          <Label >Amount</Label>
          <LinkTransferAmountForm
          >
            <CustomInput/>
          </LinkTransferAmountForm>
        </div>
        <LinkTransferError className='text-muted-foreground'/>
        {
          isSuccess ? (
            <div className='flex flex-col gap-2'>
              <LinkTransferShare makeURL={makeURL}>
                <Button variant='default' className='w-full'>Share</Button>
              </LinkTransferShare>
              <SendCodeModal />
            </div>
          ):(
            <LinkTransferButton className='bg-primary text-primary-foreground shadow hover:bg-primary/90' text='Create Link'/ >
          )
        }
     
      </LinkTransfer>
    </div>
  );
};

function CustomInput() {
  const {amount, updateAmount, balance} = useAmountFormContext()

  const isInvalid = Number(amount) > Number(balance)

  return (
    <div className='flex gap-2'>
      <Input value={amount} onChange={(e) => updateAmount(e.target.value)} className={cn('h-8', isInvalid ? 'border-red-500' : '')}/>
      <Button variant='outline' size='sm' className='w-12 h-8' onClick={() => updateAmount(balance ?? '0')}>Max</Button>
    </div>
  )
}

function TokenSelector({
  token,
  setToken,
  options
}: {
  token?: Token;
  setToken?: (token: Token) => void;
  options?: Token[];
}) {
  if (!options || !setToken || !token) {
    return null;
  }

  return (
    <Select value={token.symbol} onValueChange={(value) => setToken(options.find((t) => t.symbol === value)!)}>
      <SelectTrigger className="w-[120px]">
        <SelectValue placeholder="Select token" />
      </SelectTrigger>
      <SelectContent className="flex flex-col">
        {options.map((token) => (
          <SelectItem value={token.symbol} className="flex items-center">
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
