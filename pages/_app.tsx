import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export const gradient: string = "bg-gradient-to-r from-red via-green to-sky animate-bg-scroll bg-600"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`w-full h-screen ${gradient}`}>
      <Component {...pageProps} />
    </main>
  )
}
