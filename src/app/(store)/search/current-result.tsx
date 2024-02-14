'use client'

import { useSearchParams } from 'next/navigation'

export function CurrentResult( ){
  const searchParams = useSearchParams()

  const query = searchParams.get('q')


  return (
    <p className="text-sm">
      resultados para... <span>{query}</span>
    </p>
  )
}