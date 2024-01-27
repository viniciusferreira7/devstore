import { Search, ShoppingBag } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { CartWigdet } from './cart-wigdet'

export function Header() {
  return (
    <header className="flex items-center justify-between">
      <div className="flex items-center gap-5">
        <Link className="text-2xl font-extrabold text-white" href="/">
          devstore
        </Link>
        <form className="flex w-[320px] items-center gap-3 rounded-full bg-zinc-900 px-5 py-3 ring-zinc-700">
          <Search className="h-5 w-5" />
          <input
            placeholder="Buscar produtos..."
            className="flex-1 bg-transparent text-sm outline-none placeholder:text-zinc-500"
          />
        </form>
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
