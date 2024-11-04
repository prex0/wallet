/**
 * getURL creates a URL for a link transfer
 * @returns The URL for a link transfer
 */
export const getURL = () => {
  return `${window.location.origin}/receive?openExternalBrowser=1`
}
