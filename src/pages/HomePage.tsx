import { TokenBalance } from '@prex0/uikit/identity';
import { History, TransferHistory, LinkTransferHistory, SwapHistory, SwapHistoryItemCustom, TransferHistoryItemCustom, LinkTransferHistoryItemCustom } from '@prex0/uikit/history';
import { USDC_TOKEN } from '../constants';
import { SwapHistoryItem } from '../components/history/SwapHistoryItem';
import { LinkTransferHistoryItem } from '../components/history/LinkTransferHistoryItem';
import { TransferHistoryItemContent } from '../components/history/TransferHistoryItemContent';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Table, TableBody } from "../components/ui/table"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

export const HomePage = () => {
  return <div className='mx-0 md:mx-1 mt-4 space-y-4'>
    <Card>
      <CardHeader>
        <CardTitle>Assets</CardTitle>
      </CardHeader>
      <CardContent>
        <TokenBalance className='text-lg font-bold' token={USDC_TOKEN}/>
      </CardContent>
    </Card>
    <Card>
      <CardHeader>
        <CardTitle>History</CardTitle>
      </CardHeader>
      <CardContent>
      <Tabs defaultValue="transfer">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="transfer">Transfer</TabsTrigger>
          <TabsTrigger value="linkTransfer">Link Transfer</TabsTrigger>
          <TabsTrigger value="swap">Swap</TabsTrigger>
        </TabsList>
        <TabsContent value="transfer">
          <History transferHistoryEnabled className='w-full'>
            <Table>
              <TableBody>
                <TransferHistory className='w-full'>
                  <TransferHistoryItemCustom className='w-full'>
                    <TransferHistoryItemContent className='w-full'/>
                  </TransferHistoryItemCustom>
                </TransferHistory>
                </TableBody>
            </Table>
          </History>
        </TabsContent>
        <TabsContent value="linkTransfer">
          <History linkTransferHistoryEnabled token={USDC_TOKEN.address as `0x${string}`}>
            <LinkTransferHistory>
              <LinkTransferHistoryItemCustom>
                <LinkTransferHistoryItem />
              </LinkTransferHistoryItemCustom>
            </LinkTransferHistory>
          </History>
        </TabsContent>
        <TabsContent value="swap">
          <History swapHistoryEnabled>
            <SwapHistory>
              <SwapHistoryItemCustom>
                <SwapHistoryItem />
              </SwapHistoryItemCustom>
            </SwapHistory>
          </History>
        </TabsContent>
      </Tabs>
      </CardContent>
    </Card>
  </div>
}

