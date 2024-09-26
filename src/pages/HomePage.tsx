import {UILabel1} from '@prex0/uikit'
import { TokenBalance } from '@prex0/uikit/identity';
import { History, TransferHistory, TransferHistoryItemCustom, LinkTransferHistory, LinkTransferHistoryItemCustom,SwapHistory, SwapHistoryItemCustom } from '@prex0/uikit/history';
import { USDC_TOKEN } from '../constants';
import { SwapHistoryItemContent } from '../components/history/SwapHistoryItem';
import { useState } from 'react';
import { cn, color } from '@prex0/uikit/styles';

enum HistoryTab {
  TRANSFER = 'transfer',
  LINK_TRANSFER = 'linkTransfer',
  SWAP = 'swap',
}

export const HomePage = () => {
  const [activeTab, setActiveTab] = useState(HistoryTab.TRANSFER);

  return <div className='p-4 space-y-4'>
    <div>
      <UILabel1>Assets</UILabel1>
      <div>
        <TokenBalance token={USDC_TOKEN}/>
      </div>
    </div>
    <div>
      <UILabel1>History</UILabel1>
      <div className="flex space-x-2 mb-2">
        <button
          className={cn(
            'px-0 py-1 rounded',
            activeTab === HistoryTab.TRANSFER ? color.primary : color.disabled
          )}
          onClick={() => setActiveTab(HistoryTab.TRANSFER)}
        >
          Transfer
        </button>
        <button
          className={cn(
            'px-2 py-1 rounded',
            activeTab === HistoryTab.LINK_TRANSFER ? color.primary : color.disabled
          )}
          onClick={() => setActiveTab(HistoryTab.LINK_TRANSFER)}
        >
          Link Transfer
        </button>
        <button
          className={cn(
            'px-2 py-1 rounded',
            activeTab === HistoryTab.SWAP ? color.primary : color.disabled
          )}
          onClick={() => setActiveTab(HistoryTab.SWAP)}
        >
          Swap
        </button>
      </div>
        {activeTab === HistoryTab.TRANSFER && (
          <History transferHistoryEnabled>
            <TransferHistory>
              <TransferHistoryItemCustom/>
            </TransferHistory>
          </History>
        )}
        {activeTab === HistoryTab.LINK_TRANSFER && (
          <History linkTransferHistoryEnabled>
            <LinkTransferHistory>
              <LinkTransferHistoryItemCustom/>
            </LinkTransferHistory>
          </History>
        )}
        {activeTab === HistoryTab.SWAP && (
          <History swapHistoryEnabled>
            <SwapHistory>
              <SwapHistoryItemCustom>
                <SwapHistoryItemContent />
              </SwapHistoryItemCustom>
            </SwapHistory>
          </History>
        )}
    </div>
  </div>
}