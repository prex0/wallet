import { useEffect, useState } from 'react'
import * as QRCode from 'qrcode'
import { LoadingIndicator } from './LoadingIndicator'

export const QRLink = ({ url }: { url: string }) => {
  const [src, setSrc] = useState<string | null>(null)

  useEffect(() => {
    QRCode.toDataURL(url).then(image => {
      setSrc(image)
    })
  }, [url])

  if (src === null) {
    return <LoadingIndicator />
  }

  return (
    <div className="space-y-1">
      <img src={src} alt="qr" />
    </div>
  )
}
