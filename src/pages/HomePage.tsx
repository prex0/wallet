import {UILabel1} from '@prex0/uikit'
import { TokenBalance } from '@prex0/uikit/identity';
import { History, TransferHistory, TransferHistoryItemCustom, SwapHistory, SwapHistoryItemCustom } from '@prex0/uikit/history';
import { USDC_TOKEN } from '../constants';
import { SwapHistoryItemContent } from '../components/SwapHistoryItem';

export const HomePage = () => {
  return <div className='p-4 space-y-4'>
    <div>
      <UILabel1>Assets</UILabel1>
      <div>
        <TokenBalance token={USDC_TOKEN}/>
      </div>
    </div>
    <div>
      <UILabel1>Transfer History</UILabel1>
      <History token={USDC_TOKEN.address as `0x${string}`}>
        <TransferHistory>
          <TransferHistoryItemCustom/>
        </TransferHistory>
        <SwapHistory>
          <SwapHistoryItemCustom>
            <SwapHistoryItemContent />
          </ SwapHistoryItemCustom>
        </SwapHistory>
      </History>
    </div>
  </div>
}