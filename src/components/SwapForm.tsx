import { Swap, SwapAmountInput, SwapToggleButton, SwapButton, SwapMessage } from '@prex0/uikit/swap';

export const SwapForm = () => {
  return (
    <div className="p-0">
      <Swap className="mt-4">
        <SwapAmountInput
          label="Sell"
          type='from'
          />
        <SwapToggleButton />
        <SwapAmountInput
          label="Buy"
          type='to'/>
        <SwapButton />
        <SwapMessage />
      </Swap>
    </div>
  );
};
