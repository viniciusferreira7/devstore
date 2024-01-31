import { convertNumberToPrice } from '@/utils/price'
import { NextRequest } from 'next/server'
import { z } from 'zod'
import data from '../data.json'

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl

  const query = z.string().parse(searchParams.get('q'))

  const product = data.products
    .filter((product) =>
      product.title.toLocaleLowerCase().includes(query.toLocaleLowerCase()),
    )
    .map((product) => {
      return {
        ...product,
        price: convertNumberToPrice(product.price),
      }
    })

  if (!product) {
    return Response.json({ message: 'Product not found' }, { status: 400 })
  }
  return Response.json(product)
}
