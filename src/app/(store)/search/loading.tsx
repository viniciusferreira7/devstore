
import { Skeleton } from '@/app/components/skeleton'
import { CurrentResult } from './current-result'
import { Suspense } from 'react'

export default function SearchLoading() {
 
  return (
    <div className="flex flex-col gap-4">
      <Suspense fallback={null}>
     <CurrentResult/>

      </Suspense>
      <div className="grid grid-cols-3 gap-6">
        <Skeleton className="h-[400px]" />
        <Skeleton className="h-[400px]" />
        <Skeleton className="h-[400px]" />
        <Skeleton className="h-[400px]" />
        <Skeleton className="h-[400px]" />
        <Skeleton className="h-[400px]" />
     </div>
    </div>
  )
}
