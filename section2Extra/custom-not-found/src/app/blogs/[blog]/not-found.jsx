"use client"

import { usePathname } from "next/navigation"

export default function notfound() {
  const path = usePathname()
  return (
    <div className='flex justify-center items-center flex-col gap-3 text-sm text-white/70'>
        <h1 className='font-bold text-5xl text-red-500'>404 | Page Not Found</h1>
        <div>
          <p>Your requested page "{path}" is invalid, please check and try again</p>
        </div>
    </div>
  )
}
