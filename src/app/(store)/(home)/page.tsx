import { api } from '@/data/api'
import { Product } from '@/data/types/product'
import Image from 'next/image'
import Link from 'next/link'

async function getFeaturedProducts(): Promise<Product[]> {
  const response = await api('/products/featured', {
    cache: 'no-cache',
  })

  const products = await response.json()

  return products
}

export default async function Home() {
  const [highlightedProduct, ...othersProducts] = await getFeaturedProducts()

  return (
    <div className="grid-rows-6 grid max-h-[860px] grid-cols-9 gap-6">
      <Link
        href={`/product/${highlightedProduct.slug}`}
        className="group relative col-span-6 row-span-6 flex items-baseline justify-center overflow-hidden rounded-lg bg-zinc-900
        "
      >
        <Image
          src={highlightedProduct.image}
          className="transition-transform duration-500 group-hover:scale-105"
          width={920}
          height={920}
          quality={100}
          alt=""
        />
        <div className="absolute bottom-28 right-28 flex h-12 max-w-[280px] items-center gap-2 rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
          <span className="truncate">{highlightedProduct.description}</span>
          <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">
            {highlightedProduct.price}
          </span>
        </div>
      </Link>
      {othersProducts.slice(0, 2).map((product) => {
        return (
          <Link
            key={product.id}
            href={`/product/${product.slug}`}
            className="group relative col-span-3 row-span-3 flex items-baseline justify-center overflow-hidden rounded-lg bg-zinc-900
          "
          >
            <Image
              src={product.image}
              className="transition-transform duration-500 group-hover:scale-105"
              width={920}
              height={920}
              quality={100}
              alt=""
            />
            <div className="absolute bottom-10 right-28 flex h-12 max-w-[280px] items-center gap-2 rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
              <span className="truncate">{product.description}</span>
              <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">
                {product.price}
              </span>
            </div>
          </Link>
        )
      })}
    </div>
  )
}
