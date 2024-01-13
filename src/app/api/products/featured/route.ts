import data from '../data.json'

export async function GET() {
  const featuredProducts = data.products
    .filter((product) => product.featured)
    .map((product) => {
      return {
        ...product,
        price: product.price.toLocaleString('pt-br', {
          style: 'currency',
          currency: 'BRL',
          minimumFractionDigits: 0,
          maximumFractionDigits: 0,
        }),
      }
    })

  return Response.json(featuredProducts)
}
