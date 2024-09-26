import dayjs from 'dayjs'

export function getFormattedDate(timestamp: number): string {
  return dayjs(timestamp * 1000).format('YYYY年MM月DD日 HH時mm分')
}
