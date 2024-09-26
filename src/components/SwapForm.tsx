import { Swap, SwapAmountInput, SwapToggleButton, SwapButton, SwapMessage } from '@prex0/uikit/swap';
import { USDC_TOKEN, WETH_TOKEN } from '../constants';

export const SwapForm = () => {
  const swappableTokens = [USDC_TOKEN, WETH_TOKEN];

  return (
    <div className="p-0">
      <Swap className="mt-4">
        <SwapAmountInput
          label="Sell"
          swappableTokens={swappableTokens}
          type='from'
          />
        <SwapToggleButton />
        <SwapAmountInput
          label="Buy"
          swappableTokens={swappableTokens}
          type='to'/>
        <SwapButton />
        <SwapMessage />
      </Swap>
    </div>
  );
};
