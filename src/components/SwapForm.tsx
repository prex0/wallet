import { Swap, SwapAmountForm, SwapTokenSelector, SwapToggleButton, SwapButton, SwapMessage } from '@prex0/uikit/swap';
import { USDC_TOKEN, WETH_TOKEN } from '../constants';
import { AmountFormBalance, AmountFormInput, AmountFormMaxButton } from '@prex0/uikit';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { TokenSelector } from './common/TokenSelector';
import { Spinner } from './common/Spinner';

export const SwapForm = () => {
  return (
    <div>
      <Swap className="mt-4 space-y-4 bg-transparent">
        <SwapAmountForm
          type='from'
          amount=''
          >
          <div className='flex gap-2 h-10'>
            <div className='basis-2/3'>
              <AmountFormInput>
                <Input className='h-full' type='number'/>
              </AmountFormInput>
            </div>
            <div className='basis-1/3'>
              <SwapTokenSelector
                  type='from'
                  token={USDC_TOKEN}
                >
                <TokenSelector />
              </SwapTokenSelector>
            </div>
          </div>
          <div className='flex justify-between items-center gap-2 h-8'>
            <AmountFormBalance />
            <AmountFormMaxButton>
              <Button variant='outline' size='sm' className='w-12 h-full'>Max</Button>
            </AmountFormMaxButton>
          </div>
        </SwapAmountForm>

        <div className="flex justify-center">
          <SwapToggleButton />
        </div>

        <SwapAmountForm
          type='to'
          amount=''
          >
          <div className='flex gap-2 h-10'>
            <div className='basis-2/3'>
              <AmountFormInput>
                <Input className='h-full' type='number'/>
              </AmountFormInput>
            </div>
            <div className='basis-1/3'>
              <SwapTokenSelector
                type='to'
                token={WETH_TOKEN}
              >
                <TokenSelector />
              </SwapTokenSelector>
            </div>
          </div>
          <div className='flex justify-between items-center gap-2 h-8'>
            <AmountFormBalance />

            <AmountFormMaxButton>
              <Button variant='outline' size='sm' className='w-12 h-full'>Max</Button>
            </AmountFormMaxButton>
          </div>
        </SwapAmountForm>

        <SwapButton>
          <CustomButton>
            Swap
          </CustomButton>
        </SwapButton>
        <SwapMessage />
      </Swap>
    </div>
  );
};

function CustomButton({disabled, isLoading, onClick, children}: {disabled?: boolean, isLoading?: boolean, onClick?: () => void, children: React.ReactNode}) {
  return <Button disabled={disabled} onClick={onClick}>{isLoading ? <Spinner /> : children}</Button>
}

