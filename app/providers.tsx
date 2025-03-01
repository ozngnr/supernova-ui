'use client'
import { SupernovaThemeProvider } from '@whiteorg/supernova/dist/styles/ThemeProvider'

const Providers = ({ children }: { children: React.ReactNode }) => {
  return <SupernovaThemeProvider>{children}</SupernovaThemeProvider>
}

export default Providers
