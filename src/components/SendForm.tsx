import { LinkTransfer, LinkTransferAmountForm, LinkTransferButton, LinkTransferError, LinkTransferTokenSelector, LinkTransferShare } from '@prex0/uikit/link-transfer';
import { makeURL } from '../utils/make-url';
import { useState } from 'react';
import { USDC_TOKEN_ARBITRUM } from '@prex0/uikit';
import { SendCodeModal } from './SendCodeModal';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { AmountFormInput, AmountFormMaxButton } from '@prex0/uikit';
import { Label } from './ui/label';
import { Spinner } from './common/Spinner';
import { TokenSelector } from './common/TokenSelector';

export const SendForm = () => {
  const [isSuccess, setIsSuccess] = useState(false);

  return (
    <div className=" px-3">
      <LinkTransfer className="mt-4" token={USDC_TOKEN_ARBITRUM} onSuccess={() => setIsSuccess(true)}>
        <div className="mb-4 space-y-2">
          <Label>Token</Label>
          <div className="flex justify-end">
            <LinkTransferTokenSelector>
              <TokenSelector disabled/>
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
