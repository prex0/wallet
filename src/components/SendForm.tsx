import { LinkTransfer, LinkTransferAmountForm, LinkTransferButton, LinkTransferError, LinkTransferTokenSelector, LinkTransferShare } from '@prex0/uikit/link-transfer';
import { makeURL } from '../utils/make-url';
import { useState } from 'react';
import { USDC_TOKEN } from '../constants';
import { SendCodeModal } from './SendCodeModal';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { AmountFormInput, AmountFormMaxButton } from '@prex0/uikit';
import { Label } from './ui/label';
import { Token } from '@prex0/prex-client';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Spinner } from './common/Spinner';

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
            <div className='flex gap-2 h-8'>
              <AmountFormInput>
                <Input className='h-full' type='number'/>
              </AmountFormInput>
              <AmountFormMaxButton>
                <Button variant='outline' size='sm' className='w-12 h-full'>Max</Button>
              </AmountFormMaxButton>
            </div>
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
            <LinkTransferButton className='bg-primary text-primary-foreground shadow hover:bg-primary/90' >
              <CustomButton>
                Create Link
              </CustomButton>
            </LinkTransferButton>
          )
        }
     
      </LinkTransfer>
    </div>
  );
};

function CustomButton({disabled, isLoading, onClick, children}: {disabled?: boolean, isLoading?: boolean, onClick?: () => void, children: React.ReactNode}) {
  return <Button disabled={disabled} onClick={onClick}>{isLoading ? <Spinner /> : children}</Button>
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
