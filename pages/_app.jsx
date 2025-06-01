import '../styles/globals.css'
import { useEffect } from 'react'

function App({ Component, pageProps }) {
  useEffect(() => {
    // Activate our DaisyUI pastel theme
    document.documentElement.setAttribute('data-theme', 'pastel')
  }, [])

  return <Component {...pageProps} />
}

export default App
