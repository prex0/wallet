import { Address } from "viem";
import {
  Transfer,
  TransferAmountForm,
  TransferMessage,
  TransferButton,
  TransferAmount,
  TransferRecipient,
  TransferRecipientAddress,
  TransferRecipientInput,
  TransferTokenSelector,
  TransferModeChanger,
  TransferShare,
  TransferCreateLinkButton,
  useTransferContext,
  TransferSuccess
} from "@prex0/uikit/transfer";
import { AmountFormSimpleInput } from "@prex0/uikit";
import { Token } from "@prex0/prex-client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CardContainer, CardTitle, CardContent, CardContentItem, CardContentLabel, CardContentValue, CardFooter } from "./cards";
import { CodeDialog } from "./CodeDialog";
import { ArrowLeftIcon } from "@radix-ui/react-icons"

type Mode = 'transfer' | 'link' | 'both'

enum LinkTransferCardStatus {
  TOKEN = "token",
  SEND_METHOD = "send-method",
  SEND_BY_LINK = "send-by-link",
  SEND_BY_ADDRESS = "send-by-address",

  CONFIRMATION = "confirmation",
}

export function RichTransferCard({
  token,
  disableTokenSelection = false,
  toAddress,
  amount,
  mode = 'both',
  onSuccess,
  onCopied,
  getURL,
}: {
  token?: Token,
  disableTokenSelection?: boolean,
  toAddress?: Address,
  amount?: string,
  mode?: Mode,
  onSuccess?: (e: TransferSuccess) => void,
  getURL?: () => string,
  onCopied?: () => void,
}) {
  return <Transfer
    token={token}
    toAddress={toAddress}
    amount={amount}
    mode={mode === 'both' ? undefined : mode}
    onSuccess={onSuccess}
    getURL={getURL}
  >
    <RichTransferCardComponent mode={mode} disableTokenSelection={disableTokenSelection} onCopied={onCopied} />
  </Transfer>
}

function RichTransferCardComponent({mode, disableTokenSelection = false, onCopied}: {mode: Mode, disableTokenSelection?: boolean, onCopied?: () => void}) {
  const { lifeCycleStatus } = useTransferContext()
  const [cardStatus, setCardStatus] = useState<LinkTransferCardStatus>(LinkTransferCardStatus.TOKEN)

  if(lifeCycleStatus.statusName === "success") {
    if(lifeCycleStatus.statusData.linkTransferResponse) {
      return <LinkCreated statusData={lifeCycleStatus.statusData} onCopied={onCopied}/>
    } else {
      return <TransferSuccessful statusData={lifeCycleStatus.statusData}/>
    }
  }

  switch(cardStatus) {
    case LinkTransferCardStatus.TOKEN:
      return <TokenSelection setCardStatus={setCardStatus} mode={mode} disableTokenSelection={disableTokenSelection}/>
    case LinkTransferCardStatus.SEND_METHOD:
      return <SendMethodSelection setCardStatus={setCardStatus}/>
    case LinkTransferCardStatus.SEND_BY_LINK:
      return <SendByLink mode={mode} setCardStatus={setCardStatus} />
    case LinkTransferCardStatus.SEND_BY_ADDRESS:
      return <SendByAddress mode={mode} setCardStatus={setCardStatus}/>
    default:
      return null
  }
}

function LinkCreated({statusData, onCopied}: {statusData: TransferSuccess, onCopied?: () => void}) {
  return (
    <CardContainer>
      <CardTitle>
        Link Created
      </CardTitle>
      <CardContent>
        <CardContentItem>
          <CardContentLabel>
            Amount
          </CardContentLabel>
          <CardContentValue>
            {statusData.amount} {statusData.token.symbol}
          </CardContentValue>
        </CardContentItem>
        <CardContentItem>
          <CardContentLabel>
            Expiration
          </CardContentLabel>
          <CardContentValue>
            1 hour
          </CardContentValue>
        </CardContentItem>
        <CardContentItem>
          <TransferShare>
            <Button variant="outline">
              Share Link
            </Button>
          </TransferShare>
          <CodeDialog onCopied={onCopied}/>
        </CardContentItem>
      </CardContent>
    </CardContainer>
  )
}

function TransferSuccessful({statusData}: {statusData: TransferSuccess}) {
  return (
    <CardContainer>
      <CardTitle>
        <Badge>
          Transfer Successful
        </Badge>
      </CardTitle>
      <CardContent>
        <CardContentItem>
          <CardContentLabel>
            Recipient
          </CardContentLabel>
          <CardContentValue>
            <TransferRecipient />
            <TransferRecipientAddress isSliced className="text-xs"/>
          </CardContentValue>
        </CardContentItem>
        <CardContentItem>
          <CardContentLabel>
            Amount
          </CardContentLabel>
          <CardContentValue>
            {statusData.amount} {statusData.token.symbol}
          </CardContentValue>
        </CardContentItem>
        <div>
          <a className="underline" href={statusData.explorerUrl} target="_blank" rel="noreferrer">view on explorer</a>
        </div>
      </CardContent>
    </CardContainer>
  )
}

function TokenSelection({setCardStatus, mode, disableTokenSelection = false}: {setCardStatus: (status: LinkTransferCardStatus) => void, mode?: 'transfer' | 'link' | 'both', disableTokenSelection?: boolean}) {
  return (
    <CardContainer>
      <CardTitle>
        Transfer
      </CardTitle>
      <CardContent>
        <CardContentItem>
          <CardContentLabel>
            Token
          </CardContentLabel>
          <CardContentValue>
            <TransferTokenSelector showImage imageSize={18} disabled={disableTokenSelection}/>
          </CardContentValue>
        </CardContentItem>
        <CardContentItem>
          <CardContentLabel>
            Amount
          </CardContentLabel>
          <CardContentValue>
            <TransferAmountForm>
              <AmountFormSimpleInput />
            </TransferAmountForm>
          </CardContentValue>
        </CardContentItem>
        <CardFooter>
          <Button onClick={() => {
            if(mode === 'transfer') {
              setCardStatus(LinkTransferCardStatus.SEND_BY_ADDRESS)
            } else if(mode === 'link') {
              setCardStatus(LinkTransferCardStatus.SEND_BY_LINK)
            } else {
              setCardStatus(LinkTransferCardStatus.SEND_METHOD)
            }
          }}>Next</Button>
        </CardFooter>
      </CardContent>
    </CardContainer>
  )
}

function SendMethodSelection({setCardStatus}: {setCardStatus: (status: LinkTransferCardStatus) => void}) {
  return (
    <CardContainer>
      <CardTitle className="flex items-center gap-2">
        <ArrowLeftIcon className="w-4 h-4 cursor-pointer" onClick={() => setCardStatus(LinkTransferCardStatus.TOKEN)}/>
        Send Method
      </CardTitle>
      <CardContent>
        <CardContentItem>
          <div className="w-full">
            <TransferModeChanger targetMode="link" asChild onModeChange={() => setCardStatus(LinkTransferCardStatus.SEND_BY_LINK)}>
              <Button className="w-full" variant="outline">Send via Link</Button>
            </TransferModeChanger>
          </div>
          <div className="w-full">
            <TransferModeChanger targetMode="transfer" asChild onModeChange={() => setCardStatus(LinkTransferCardStatus.SEND_BY_ADDRESS)}>
              <Button className="w-full" variant="outline">Send to address</Button>
            </TransferModeChanger>
          </div>
        </CardContentItem>
      </CardContent>
    </CardContainer>
  )
}

function SendByLink({mode, setCardStatus}: {mode: Mode, setCardStatus: (status: LinkTransferCardStatus) => void}) {
  const returnHandler = () => {
    if(mode === 'link') {
      setCardStatus(LinkTransferCardStatus.TOKEN)
    } else {
      setCardStatus(LinkTransferCardStatus.SEND_METHOD)
    }
  }
  return (
    <CardContainer>
      <CardTitle className="flex items-center gap-2">
        <ArrowLeftIcon className="w-4 h-4 cursor-pointer" onClick={returnHandler}/>
        Send via Link
      </CardTitle>
      <CardContent>
        <CardContentItem>
          <CardContentLabel>
            Amount
          </CardContentLabel>
          <CardContentValue>
            <TransferAmount showSymbol/>
          </CardContentValue>
        </CardContentItem>
        <CardContentItem>
          <CardContentLabel>
            Expiration
          </CardContentLabel>
          <CardContentValue>
            1 hour
          </CardContentValue>
        </CardContentItem>
      </CardContent>
      <TransferMessage />
      <CardFooter>
        <Button variant="outline" className="w-24" onClick={returnHandler}>Back</Button>
        <TransferCreateLinkButton className="w-24">
          Create Link
        </TransferCreateLinkButton>
      </CardFooter>
    </CardContainer>
  )
}

function SendByAddress({setCardStatus, mode}: {setCardStatus: (status: LinkTransferCardStatus) => void, mode: Mode}) {
  const returnHandler = () => {
    if(mode === 'transfer') {
      setCardStatus(LinkTransferCardStatus.TOKEN)
    } else {
      setCardStatus(LinkTransferCardStatus.SEND_METHOD)
    }
  }
  return (
    <CardContainer>
      <CardTitle className="flex items-center gap-2">
        <ArrowLeftIcon className="w-4 h-4 cursor-pointer" onClick={returnHandler}/>
        Send to Address
      </CardTitle>
      <CardContent>
        <CardContentItem>
          <CardContentLabel>
            Amount
          </CardContentLabel>
          <CardContentValue>
            <TransferAmount showSymbol/>
          </CardContentValue>
        </CardContentItem>
        <CardContentItem>
          <CardContentLabel>
            Recipient
          </CardContentLabel>
          <CardContentValue>
            <TransferRecipientInput />
          </CardContentValue>
        </CardContentItem>
        <TransferMessage />
        <CardFooter>
          <Button variant="outline" className="w-20" onClick={returnHandler}>Back</Button>
          <TransferButton className="w-20">
            Transfer
          </TransferButton>
        </CardFooter>
      </CardContent>
    </CardContainer>
  )
}
