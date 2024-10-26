import { Swap, SwapAmountInput, SwapToggleButton, SwapButton, SwapMessage } from '@prex0/uikit/swap';
import { USDC_TOKEN, WETH_TOKEN } from '../constants';

export const SwapForm = () => {
  return (
    <div className="p-0">
      <Swap className="mt-4">
        <SwapAmountInput
          label="Sell"
          type='from'
          token={USDC_TOKEN}
          imageSize={24}
          hideName
          />
        <div className="relative h-1">
          <SwapToggleButton className="-translate-x-2/4 -translate-y-2/4 absolute top-2/4 left-2/4 border-4 border-solid"/>
        </div>
        <SwapAmountInput
          label="Buy"
          type='to'
          token={WETH_TOKEN}
          imageSize={24}
          hideName
          />
        <SwapButton />
        <SwapMessage />
      </Swap>
    </div>
  );
};
