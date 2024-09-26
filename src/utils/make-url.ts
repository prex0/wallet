import { LinkTransferResponse } from "@prex0/uikit/link-transfer"

/**
 * makeURL creates a URL for a link transfer
 * @param linkTransferResponse - The response from the link transfer
 * @returns The URL for a link transfer
 */
export const makeURL = (linkTransferResponse: LinkTransferResponse) => {
  return `${window.location.origin}/receive?id=${encodeURIComponent(linkTransferResponse.id)}&s=${encodeURIComponent(linkTransferResponse.secret)}`
}