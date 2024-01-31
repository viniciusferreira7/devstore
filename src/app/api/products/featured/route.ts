import { convertNumberToPrice } from '@/utils/price'
import data from '../data.json'

export async function GET() {
  const featuredProducts = data.products
    .filter((product) => product.featured)
    .map((product) => {
      return {
        ...product,
        price: convertNumberToPrice(product.price),
      }
    })

  return Response.json(featuredProducts)
}
