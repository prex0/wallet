import { LinkTransferResponse } from "@prex0/uikit/link-transfer"

export const makeURL = (linkTransferResponse: LinkTransferResponse) => {
  return `${window.location.origin}/receive?id=${encodeURIComponent(linkTransferResponse.id)}&s=${encodeURIComponent(linkTransferResponse.secret)}`
}