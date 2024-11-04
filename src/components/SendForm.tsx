import { RichTransferCard } from '@prex0/uikit/transfer';
import { getURL } from '../utils/make-url';
import { USDC_TOKEN_ARBITRUM } from '@prex0/uikit';

export const SendForm = () => {
  return (
    <div className="px-3">
      <RichTransferCard token={USDC_TOKEN_ARBITRUM} getURL={getURL} onSuccess={() => console.log('success')} />
    </div>
  );
};
