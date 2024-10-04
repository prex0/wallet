import { LinkTransfer, LinkTransferAmountInput, LinkTransferButton, LinkTransferError, LinkTransferTokenSelector, LinkTransferShare } from '@prex0/uikit/link-transfer';
import { makeURL } from '../utils/make-url';
import { cn, pressable, text } from '@prex0/uikit/styles';
import { useState } from 'react';
import { USDC_TOKEN } from '../constants';

export const SendForm = () => {
  const [isSuccess, setIsSuccess] = useState(false);

  return (
    <div className="p-0">
      <LinkTransfer className="mt-4" token={USDC_TOKEN.address as `0x${string}`} onSuccess={() => setIsSuccess(true)}>
        <div className='flex justify-end'>
          <LinkTransferTokenSelector />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Amount</label>
          <LinkTransferAmountInput
            className="w-full p-2 rounded-lg mt-1"
            isMaxButton
          />
        </div>
        <LinkTransferError />
        {
          isSuccess ? (
            <LinkTransferShare makeURL={makeURL} className='px-3'>
              <button className={cn(pressable.inverse, text.label1, 'rounded-lg w-full h-10')}>Share</button>
            </LinkTransferShare>  
          ):(
            <LinkTransferButton />
          )
        }
      </LinkTransfer>
    </div>
  );
};