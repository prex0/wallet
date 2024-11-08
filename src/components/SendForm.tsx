import { RichTransferCard } from './rich/RichTransferCard';
import { getURL } from '../utils/make-url';
import { USDC_TOKEN_ARBITRUM } from '@prex0/uikit';
import { useToast } from "@/hooks/use-toast"
import { useCallback } from 'react';

export const SendForm = () => {
  const { toast } = useToast()
  const handleCopy = useCallback(() => {
    toast({
      title: "Copied to clipboard",
      description: "The link has been copied to your clipboard.",
    })
  }, [toast])

  return (
    <div className="px-3">
      <RichTransferCard
        token={USDC_TOKEN_ARBITRUM}
        disableTokenSelection
        amount=""
        getURL={getURL}
        onSuccess={() => console.log('success')}
        onCopied={handleCopy}
      />
    </div>
  );
};
