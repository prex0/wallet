import { LinkTransfer, LinkTransferAmountInput, LinkTransferButton, LinkTransferError, LinkTransferTokenSimpleSelector, LinkTransferShare } from '@prex0/uikit/link-transfer';
import { makeURL } from '../utils/make-url';
import { cn, pressable, text } from '@prex0/uikit/styles';
import { useState } from 'react';
import { USDC_TOKEN } from '../constants';
import { SendCodeModal } from './SendCodeModal';

export const SendForm = () => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="p-0">
      <LinkTransfer className="mt-4" token={USDC_TOKEN.address as `0x${string}`} onSuccess={() => setIsSuccess(true)}>
        <div className='flex justify-end'>
          <LinkTransferTokenSimpleSelector imageSize={24} hideName/>
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
            <div className='flex flex-col gap-2 px-3'>
              <LinkTransferShare makeURL={makeURL}>
                <button className={cn(pressable.inverse, text.label1, 'rounded-lg w-full h-10')}>Share</button>
              </LinkTransferShare>
              <button className={cn(pressable.inverse, text.label1, 'rounded-lg w-full h-10')} onClick={() => setIsOpen(true)}>Show Code</button>
            </div>
          ):(
            <LinkTransferButton />
          )
        }
      <SendCodeModal isOpen={isOpen} onRequestClose={() => setIsOpen(false)} />
      </LinkTransfer>
    </div>
  );
};