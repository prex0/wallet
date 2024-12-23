import dayjs from 'dayjs'

export function getFormattedDate(timestamp: number): string {
  return dayjs(timestamp * 1000).format('MM/DD HH:mm')
}
