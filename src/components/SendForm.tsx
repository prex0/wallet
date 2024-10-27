import { LinkTransfer, LinkTransferAmountInput, LinkTransferButton, LinkTransferError, LinkTransferTokenSimpleSelector, LinkTransferShare } from '@prex0/uikit/link-transfer';
import { makeURL } from '../utils/make-url';
import { useState } from 'react';
import { USDC_TOKEN } from '../constants';
import { SendCodeModal } from './SendCodeModal';
import { Button } from './ui/button';

export const SendForm = () => {
  const [isSuccess, setIsSuccess] = useState(false);

  return (
    <div className=" px-3">
      <LinkTransfer className="mt-4" token={USDC_TOKEN.address as `0x${string}`} onSuccess={() => setIsSuccess(true)}>
        <div className='flex justify-end'>
          <LinkTransferTokenSimpleSelector imageSize={24} hideName/>
        </div>
        <div className="mb-4">
          <label className="block text-muted-foreground">Amount</label>
          <LinkTransferAmountInput
            className="w-full p-2 rounded-lg mt-1"
            isMaxButton
          />
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
            <LinkTransferButton className='bg-primary text-primary-foreground shadow hover:bg-primary/90'/ >
          )
        }
     
      </LinkTransfer>
    </div>
  );
};