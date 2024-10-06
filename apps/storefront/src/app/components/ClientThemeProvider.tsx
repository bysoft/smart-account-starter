'use client'

import React, { useState, useEffect } from 'react'
import { ThemeProvider } from 'next-themes'

export function ClientThemeProvider({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <>{children}</>
  }

  return <ThemeProvider attribute="class">{children}</ThemeProvider>
}