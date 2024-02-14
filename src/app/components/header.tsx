import Image from 'next/image'
import Link from 'next/link'
import { CartWigdet } from './cart-wigdet'
import { SearchForm } from './search-form'
import { Suspense } from 'react'

export function Header() {
  return (
    <header className="flex items-center justify-between">
      <div className="flex items-center gap-5">
        <Link className="text-2xl font-extrabold text-white" href="/">
          devstore
        </Link>
        <Suspense fallback={null}>
        <SearchForm />
        </Suspense>
      </div>
      <div className="flex items-center gap-4">
        <CartWigdet />
        <div className="h-4 w-px bg-zinc-700" />

        <Link href="/" className="flex items-center gap-2 hover:underline">
          <span>Account</span>
          <Image
            src="https://github.com/viniciusferreira7.png"
            className="h-6 w-6 rounded-full"
            width={24}
            height={24}
            alt=""
          />
        </Link>
      </div>
    </header>
  )
}
