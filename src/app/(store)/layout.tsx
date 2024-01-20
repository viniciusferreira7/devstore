import { Header } from '@/app/components/header'
import { CartProvider } from '@/contexts/cart-context'
import { Metadata } from 'next'
import { ReactNode } from 'react'

export const metadata: Metadata = {
  title: {
    template: '%s | devstore',
    default: 'devstore',
  },
}

export default function StoreLayout({ children }: { children: ReactNode }) {
  return (
    <CartProvider>
      <div className="mx-auto grid min-h-screen w-full max-w-[1600px] grid-rows-app gap-5 p-8">
        <Header />
        {children}
      </div>
    </CartProvider>
  )
}
