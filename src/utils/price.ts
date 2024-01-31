export function convertNumberToPrice(number: number) {
  return number.toLocaleString('pt-br', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  })
}
