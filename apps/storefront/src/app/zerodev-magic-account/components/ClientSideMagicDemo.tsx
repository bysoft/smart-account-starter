"use client"

import dynamic from 'next/dynamic'
import "../index.css"
import "../polyfills.ts"
import "react-toastify/dist/ReactToastify.css"

const DynamicApp = dynamic(() => import('../App.tsx'), { ssr: false })
const DynamicProviders = dynamic(() => import('../Providers.tsx'), { ssr: false })

export default function ClientSideMagicDemo() {
  return (
    <DynamicProviders>
      <DynamicApp />
    </DynamicProviders>
  )
}