import { TokenBalance } from '@prex0/uikit/identity';
import { TransferHistory, LinkTransferHistory, SwapHistory, SwapHistoryItemCustom, TransferHistoryItemCustom, LinkTransferHistoryItemCustom, TransferHistoryItems, LinkTransferHistoryItems, SwapHistoryItems, TransferHistoryLoadMore } from '@prex0/uikit/history';
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
import { USDC_TOKEN_ARBITRUM } from '@prex0/uikit';
import { Button } from '../components/ui/button';

export const HomePage = () => {
  return <div className='mx-1 md:mx-4 mt-4 space-y-4'>
    <Card>
      <CardHeader>
        <CardTitle>Assets</CardTitle>
      </CardHeader>
      <CardContent>
        <TokenBalance className='text-lg font-bold' token={USDC_TOKEN_ARBITRUM}/>
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
        <TabsContent value="transfer" className='mb-10'>
          <TransferHistory pageSize={5}>
            <Table>
              <TableBody>
                <TransferHistoryItems>
                  <TransferHistoryItemCustom className='w-full'>
                    <TransferHistoryItemContent className='w-full'/>
                  </TransferHistoryItemCustom>
                </TransferHistoryItems>
              </TableBody>
            </Table>
            <div className='flex justify-center'>
              <TransferHistoryLoadMore>
                <Button variant='outline' size='sm'>Load more</Button>
              </TransferHistoryLoadMore>
            </div>
          </TransferHistory>
        </TabsContent>
        <TabsContent value="linkTransfer">
            <LinkTransferHistory>
              <LinkTransferHistoryItems>
                <LinkTransferHistoryItemCustom>
                  <LinkTransferHistoryItem />
                </LinkTransferHistoryItemCustom>
              </LinkTransferHistoryItems>
            </LinkTransferHistory>
        </TabsContent>
        <TabsContent value="swap">
          <SwapHistory>
            <SwapHistoryItems>
              <SwapHistoryItemCustom>
                <SwapHistoryItem />
              </SwapHistoryItemCustom>
            </SwapHistoryItems>
          </SwapHistory>
        </TabsContent>
      </Tabs>
      </CardContent>
    </Card>
  </div>
}

