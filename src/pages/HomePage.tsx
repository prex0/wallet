import {UILabel1, UILabel2} from '@prex0/uikit'
import { TokenBalance } from '@prex0/uikit/identity';
import { History, TransferHistory, LinkTransferHistory, SwapHistory, SwapHistoryItemCustom, TransferHistoryItemCustom, LinkTransferHistoryItemCustom } from '@prex0/uikit/history';
import { USDC_TOKEN } from '../constants';
import { SwapHistoryItem } from '../components/history/SwapHistoryItem';
import { LinkTransferHistoryItem } from '../components/history/LinkTransferHistoryItem';
import { useState } from 'react';
import { border, cn, color } from '@prex0/uikit/styles';
import { TransferHistoryItemContent } from '../components/history/TransferHistoryItemContent';

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
        <TokenBalance className='text-lg font-bold' token={USDC_TOKEN}/>
      </div>
    </div>
    <div>
      <UILabel1>History</UILabel1>
      <div className={cn("flex space-x-2 mb-2")}>
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
              <TransferHistoryItemCustom>
                <TransferHistoryItemContent/>
              </TransferHistoryItemCustom>
            </TransferHistory>
          </History>
        )}
        {activeTab === HistoryTab.LINK_TRANSFER && (
          <History linkTransferHistoryEnabled token={USDC_TOKEN.address as `0x${string}`}>
            <LinkTransferHistory>
              <LinkTransferHistoryItemCustom>
                <LinkTransferHistoryItem />
              </LinkTransferHistoryItemCustom>
            </LinkTransferHistory>
          </History>
        )}
        {activeTab === HistoryTab.SWAP && (
          <History swapHistoryEnabled>
            <SwapHistory>
              <SwapHistoryItemCustom>
                <SwapHistoryItem />
              </SwapHistoryItemCustom>
            </SwapHistory>
          </History>
        )}
    </div>
  </div>
}