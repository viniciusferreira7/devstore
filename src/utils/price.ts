export function convertNumberToPrice(number: number) {
  return number.toLocaleString('en', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  })
}
